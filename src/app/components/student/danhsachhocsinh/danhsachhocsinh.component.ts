import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import User from '../../../model/User'
import { ApiService } from 'src/app/service/api.service';
import { Button } from 'protractor';
import {ExcelService} from '../../../service/excel.service';
import { ActivatedRoute } from '@angular/router';

import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-danhsachhocsinh',
  templateUrl: './danhsachhocsinh.component.html',
  styleUrls: ['./danhsachhocsinh.component.css']
})
export class DanhsachhocsinhComponent implements OnInit {

  liststudent:any
  danhsachkhoi = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  danhsachlop: any;
  khoilop: String;
  soHieu: String;
  studentForm:FormGroup;
  isshow: boolean=false;
  constructor(private fb: FormBuilder,private excelService:ExcelService,private apiService: ApiService) { }

  ngOnInit() {
  
    
    // console.log(this.userlist)
  }

  getlop() {
    let data = {
      khoi: this.khoilop
    }
    window.alert()
  
    this.apiService.getlistclass(data).subscribe(res => {
      let danhsachlop = Object.assign(res)
      this.danhsachlop = danhsachlop.classes.Classes;
 
    })
  }
  getstudent(){

 
    this.apiService.getliststudent(this.soHieu)
      .subscribe(data => {
        this.liststudent = Object.assign(data)
        //for (let index = 0; index < user.length; index++) {

        this.innitDatatable(this.liststudent.list.liststudent);
        this.isshow=true
      }
      )
  }
  // createform() {
  //   this.studentForm = this.fb.group({
  //     soDienThoai: [''],
  //     tenNguoiDung: [''],
  //     khoi: [''],
  //     lop: [''],
  //     tenHocSinh: [],
   

  //   });
  // }
  exportAsXLSX(){
    const listexport = new Array();
    let count=1;
    this.liststudent.list.liststudent.forEach(element => {
     var data={
       "STT":count++,
        "Họ Và Tên":element.tenHocSinh,
         "Lớp":element.soHieu,
         "Ngày Sinh":element.ngaySinh,
         "Địa chỉ":element.diaChi
         
       }
       listexport.push(data);
    });
    var lop=Object.assign(this.soHieu)
    this.excelService.exportAsExcelFile(listexport, 'Danh Sách Học Sinh lớp '+ lop.soHieu);
  }

 
  innitDatatable(datares) {
    $(document).ready(function() {
    
      var table = $('#datatable').DataTable({
        responsive: true,
        destroy: true,
        
        "processing": true,
        data: datares,
        columns: [
          {
            "render": function (data, type, JsonResultRow, meta) {
              return '<img style="height: 100px;width:100px;border-radius:50%" src="../../../../assets/images/' + JsonResultRow.hinh + '">';
            }
          },
          {
            "render": function (data, type, JsonResultRow, row) {
              return '<a style="color:black; margin-top:20px"  href="/home/hocsinh/' + JsonResultRow._id + '">' + JsonResultRow.tenHocSinh + '</a>'
            }
          },
          {
            "render": function (data, type, JsonResultRow, row) {
              return '<a style="color:black; margin-top:20px" href="/home/hocsinh/' + JsonResultRow._id + '">' + JsonResultRow.soHieu + '</a>'
            }
          },
          {
            "render": function (data, type, JsonResultRow, row) {
              var now = new Date(Number(JsonResultRow.ngaySinh));
              var d= now.toLocaleDateString()
              return '<a style="color:black; margin-top:20px" href="/home/hocsinh/' + JsonResultRow._id + '">' + d + '</a>'
            }
          },
          {
            "render": function (data, type, JsonResultRow, row) {
              return '<a style="color:black; margin-top:20px" href="/home/hocsinh/' + JsonResultRow._id + '">' + JsonResultRow.gioiTinh + '</a>'
            }
          },
        ],
        
        
        
        
      });
    });
    
  }

}
