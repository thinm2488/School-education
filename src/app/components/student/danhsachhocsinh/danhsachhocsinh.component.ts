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

  // liststudent:any
  // danhsachkhoi = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  // danhsachlop: any;
  // khoilop: String;
  // soHieu: String;
  // studentForm:FormGroup
  constructor(private fb: FormBuilder,private excelService:ExcelService,private apiService: ApiService) { }

  ngOnInit() {
    // var users
    // this.apiService.getalluser()
    //   .subscribe(data => {
    //     this.userlist = Object.assign(data)
    //     //for (let index = 0; index < user.length; index++) {

    //     this.innitDatatable(this.userlist.userlist);
    //   }
    //   )
    // console.log(this.userlist)
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
  // // exportAsXLSX(){
  // //   const listexport = new Array();
  // //   let count=1;
  // //   this.userlist.userlist.forEach(element => {
  // //    var data={
  // //      "STT":count++,
  // //       "Họ Và Tên":element.tenNguoiDung,
  // //        "Số Điện Thoại":element.soDienThoai,
  // //        "Email":element.email
         
  // //      }
  // //      listexport.push(data);
  // //   });
   
  // //   this.excelService.exportAsExcelFile(listexport, 'Danh Sách Phụ Huynh');
  // // }

  // check(){
  //   if(this.liststudent==null){
  //     return true
  //   }
  //   else{
  //     return false
  //   }
  // }
  // innitDatatable(datares) {
  //   $(document).ready(function() {
    
  //     var table = $('#datatable').DataTable({
  //       responsive: true,
        
        
  //       "processing": true,
  //       data: datares,
  //       columns: [
  //         {
  //           "render": function (data, type, JsonResultRow, meta) {
  //             return '<img style="height: 100px;width:100px;border-radius:50%" src="../../../../assets/images/' + JsonResultRow.hinh + '">';
  //           }
  //         },
  //         {
  //           "render": function (data, type, JsonResultRow, row) {
  //             return '<a style="color:black; margin-top:20px"  href="/home/chitiettaikhoan/' + JsonResultRow._id + '">' + JsonResultRow.tenNguoiDung + '</a>'
  //           }
  //         },
  //         {
  //           "render": function (data, type, JsonResultRow, row) {
  //             return '<a style="color:black; margin-top:20px" href="/home/chitiettaikhoan/' + JsonResultRow._id + '">' + JsonResultRow.soDienThoai + '</a>'
  //           }
  //         },
  //       ],
        
        
        
        
  //     });
  //   });
    
  // }

}
