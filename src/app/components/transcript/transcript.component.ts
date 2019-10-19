import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { TranscriptService } from '../../service/transcript.service'
import { CookieService } from 'ngx-cookie-service';
import * as XLSX from 'xlsx';  
@Component({
  selector: 'app-transcript',
  templateUrl: './transcript.component.html',
  styleUrls: ['./transcript.component.css']
})
export class TranscriptComponent implements OnInit {
  teacher: any
  soHieu: String;
  danhsachhocsinh: any
  danhsachlop: any
  isshow: boolean = false;
  constructor(private as: ApiService, private cookieService: CookieService, private ts:TranscriptService) { }

  ngOnInit() {
    var id = this.cookieService.get('id');
    this.as.getteacher(id).subscribe(data => {
      var res = Object.assign(data);
      this.teacher = res.teacher
      this.danhsachlop = res.teacher.lopDay
      console.log(res)
    })
  }
  getstudent() {
    var data = {
      soHieu: this.soHieu
    }
    this.as.getliststudent(data).subscribe(res => {
      let student = Object.assign(res)
      this.danhsachhocsinh = student.list.liststudent;
      this.innitDatatable(this.danhsachhocsinh)
      this.isshow = true

    })
  }
  fileUploaded: File;  
  worksheet: any; 
  storeData: any;  
  fileimport:any 
  uploadedFile(event) {  
    this.fileUploaded = event.target.files[0];  
    this.readExcel();  
  }  
  readExcel() {  
    let readFile = new FileReader();  
    readFile.onload = (e) => {  
      this.storeData = readFile.result;  
      var data = new Uint8Array(this.storeData);  
      var arr = new Array();  
      for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);  
      var bstr = arr.join("");  
      var workbook = XLSX.read(bstr, { type: "binary" });  
      var first_sheet_name = workbook.SheetNames[0];  
      this.worksheet =  workbook.Sheets[first_sheet_name]; 
      this.fileimport=XLSX.utils.sheet_to_json(this.worksheet,{
        raw:true
      })
      
      // this.userList.push(this.worksheet);
    }  
    readFile.readAsArrayBuffer(this.fileUploaded);  
    
  }  
  importexcel(){
   
    this.ts.importexcel(this.fileimport).subscribe(data=>{
      var res=Object.assign(data)
      if(res.status==200){
        window.alert("Import file thành công!");
        window.location.href="/home/bangDiem"
      }
    })

  }

  innitDatatable(datares) {
    $(document).ready(function () {

      var table = $('#datatable').DataTable({
        responsive: true,
        destroy: true,

        "processing": true,
        data: datares,
        columns: [

          {
            "render": function (data, type, JsonResultRow, row) {
              return '<a style="color:black; margin-top:20px"  href="/home/bangdiem/' + JsonResultRow._id + '">' + JsonResultRow.tenHocSinh + '</a>'
            }
          },
          {
            "render": function (data, type, JsonResultRow, row) {
              return '<a style="color:black; margin-top:20px" href="/home/bangdiem/' + JsonResultRow._id + '">' + JsonResultRow.soHieu + '</a>'
            }
          },
          {
            "render": function (data, type, JsonResultRow, row) {
              var now = new Date(Number(JsonResultRow.ngaySinh));
              var d = now.toLocaleDateString()
              return '<a style="color:black; margin-top:20px" href="/home/bangDiem/' + JsonResultRow._id + '">' + d + '</a>'
            }
          },
          {
            "render": function (data, type, JsonResultRow, row) {
              return '<a style="color:black; margin-top:20px" href="/home/bangdiem/' + JsonResultRow._id + '">' + JsonResultRow.gioiTinh + '</a>'
            }
          },

        ],

      });
    });

  }

}
