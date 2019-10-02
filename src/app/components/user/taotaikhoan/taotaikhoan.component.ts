import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import { ApiService } from '../../../service/api.service'
@Component({
  selector: 'app-taotaikhoan',
  templateUrl: './taotaikhoan.component.html',
  styleUrls: ['./taotaikhoan.component.css']
})
export class TaotaikhoanComponent implements OnInit {

  as:ApiService
  constructor( private http: HttpClient) {
    // this.createform();

  }
  // createform(){
  //   this.accountFrom = this.fb.group({
  //     soDienThoai: [''],
  //     tenNguoiDung:[''],
  //     khoi:[''],
  //     lop:[''],
  //     tenHocSinh:[],
  //     idHocSinh:[]


  //   });
  // }
  User:any
  tenNguoiDung: string;
  soDienThoai:number;
  khoi: number;
  lop: string;
  tenHocSinh:String;
 
  // idHocSinh: String;
  


  tao() {
    var data={
      tenNguoiDung:this.tenNguoiDung,
      soDienThoai:this.soDienThoai,
      khoi:this.khoi,
      lop:this.lop,
      tenHocSinh:this.tenHocSinh,
      // idHocSinh:this.idHocSinh
    }
    this.as=new ApiService(this.http);
    this.as.createUser(data).subscribe(res=>{
      this.User=Object.assign(res)
      window.alert(this.User.user.message)
      if(this.User.user.status==200){
        window.location.href="/home/danhsach"
      }
    })

  }
  

  ngOnInit() {
  }

}
