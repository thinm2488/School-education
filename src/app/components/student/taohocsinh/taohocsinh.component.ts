import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import { ApiService } from '../../../service/api.service'
import User from 'src/app/model/User';
import * as XLSX from 'xlsx';  

import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-taohocsinh',
  templateUrl: './taohocsinh.component.html',
  styleUrls: ['./taohocsinh.component.css']
})
export class TaohocsinhComponent implements OnInit {
  studentForm: FormGroup
  Student: any
  StudentList : Array<User> = []
  danhsachkhoi = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  danhsachhocsinh: any;
  danhsachlop: any;
  khoilop: String;
  soHieu: String;
  hocsinh:any;
  res:any;
  model;
  constructor(private http: HttpClient, private fb: FormBuilder,private as: ApiService,private calendar: NgbCalendar) { 
    this.createform();
  }
  createform() {
    this.studentForm = this.fb.group({
      tenHocSinh: [''],
      soHieu: [''],
      khoi: [''],
      gioiTinh: [''],
      ngaySinh: [''],
      diaChi: [''],
   

    });
  }
  selectToday() {
    this.model = this.calendar.getToday();
  }
  // getlop() {
  //   let data = {
  //     khoi: this.khoilop
  //   }
  //   window.alert()
  
  //   this.as.getliststudent(data).subscribe(res => {
  //     let danhsachlop = Object.assign(res)
  //     this.danhsachlop = danhsachlop.list.liststudent;
  //   })
  // }



  // gethocsinh() {
 
  //   this.as.getliststudent(this.soHieu).subscribe(res => {
  //     let student = Object.assign(res)
  //     this.danhsachhocsinh = student.list.liststudent;
  //   })
  // }
  // tenHocSinh:String;
  tao(tenHocSinh,gioiTinh,ngaySinh,diaChi) {
  
    let data = {
      tenHocSinh: tenHocSinh,
      khoi: this.khoilop,
      soHieu:this.soHieu,
      gioiTinh:gioiTinh,
      ngaySinh:ngaySinh,
      diaChi:diaChi
      

    }
    console.log(data)
   
    this.as.createstudent(data).subscribe(res => {
      this.Student = Object.assign(res)
      // window.alert(this.User.user.message)
      if (this.Student.status == 200) {
        window.alert("Thêm Học Sinh Thành Công")
        window.location.href = "/home/hocsinh/danhsach"
      }
    })

  }
  fileUploaded: File;  
  worksheet: any; 
  storeData: any;   
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
      this.soHieu=this.worksheet.C2.v
      this.khoilop=this.worksheet.B2.v
      this.StudentList=XLSX.utils.sheet_to_json(this.worksheet,{
        raw:true
      })
      
      // this.userList.push(this.worksheet);
    }  
    readFile.readAsArrayBuffer(this.fileUploaded);  
    
  }  
  importexcel(){
   
   var data={
      soHieu:this.soHieu,
      khoi:this.khoilop,
      liststudent:this.StudentList
   }
    this.as.StudentImportexcel(data).subscribe(data=>{
      this.res=Object.assign(data)
      if(this.res.student.status==200){
        window.alert("Import file thành công!");
        window.location.href="/home/hocsinh/danhsach"
      }
    })

  }
  ngOnInit() {
  }

}
