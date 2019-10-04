import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import { ApiService } from '../../../service/api.service'
@Component({
  selector: 'app-taotaikhoan',
  templateUrl: './taotaikhoan.component.html',
  styleUrls: ['./taotaikhoan.component.css']
})
export class TaotaikhoanComponent implements OnInit {

  as: ApiService;
  accountForm: FormGroup
  User: any
  danhsachkhoi = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  danhsachhocsinh: any;
  danhsachlop: any;
  khoilop: String;
  soHieu: String;
  hocsinh:any;
  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.createform();

  }
  createform() {
    this.accountForm = this.fb.group({
      soDienThoai: [''],
      tenNguoiDung: [''],
      khoi: [''],
      lop: [''],
      tenHocSinh: [],
   

    });
  }

  getlop() {
    let data = {
      khoi: this.khoilop
    }
    window.alert()
    this.as = new ApiService(this.http);
    this.as.getliststudent(data).subscribe(res => {
      let danhsachlop = Object.assign(res)
      this.danhsachlop = danhsachlop.list.liststudent;
    })
  }



  gethocsinh() {

    this.as = new ApiService(this.http);
    this.as.getliststudent(this.soHieu).subscribe(res => {
      let student = Object.assign(res)
      this.danhsachhocsinh = student.list.liststudent;
    })
  }
  // tenHocSinh:String;
  tao(tenNguoiDung,soDienThoai) {
    let data = {
      tenNguoiDung: tenNguoiDung,
      soDienThoai: soDienThoai,
      HocSinh:this.hocsinh
      

    }
    this.as = new ApiService(this.http);
    this.as.createUser(data).subscribe(res => {
      this.User = Object.assign(res)
      window.alert(this.User.user.message)
      if (this.User.user.status == 200) {
        window.location.href = "/home/danhsach"
      }
    })

  }


  ngOnInit() {

  }

}
