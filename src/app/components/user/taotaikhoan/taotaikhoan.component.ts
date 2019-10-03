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

  as:ApiService;
  

  constructor( private http: HttpClient,private fb: FormBuilder) {
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
  danhsachkhoi= ['1','2','3','4','5','6','7','8','9','10','11','12'];
  danhsachhocsinh:any;
  danhsachlop:any;
  khoi:string;
  
 
  // idHocSinh: String;
  getlop(){
    let data={
      khoi:this.khoi
    }
    this.as=new ApiService(this.http);
    this.as.getliststudent(data).subscribe(res=>{
     let danhsachlop=Object.assign(res)
     this.danhsachlop=danhsachlop.list.liststudent;
    })
  }
  lop: string;
  
 
  gethocsinh(){
   
    this.as=new ApiService(this.http);
    this.as.getliststudent(this.lop).subscribe(res=>{
     let student=Object.assign(res)
     this.danhsachhocsinh=student.list.liststudent;
    })
  }
  tenHocSinh:String;
  tao() {
    let data={
      tenNguoiDung:this.tenNguoiDung,
      soDienThoai:this.soDienThoai,
      HocSinh:this.tenHocSinh,
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
