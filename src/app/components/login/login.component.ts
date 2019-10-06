import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient} from '@angular/common/http'
import {ApiService} from '../../service/api.service'
import User from '../../model/User'
import { CookieService } from 'ngx-cookie-service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:any;
  angForm: FormGroup;
  constructor(private fb: FormBuilder, private http : HttpClient, private cookieService: CookieService ,private lg:ApiService) {
    this.createForm();
   }
   createForm() {
    this.angForm = this.fb.group({
      soDienThoai: [''],
      password: [''],
  
    });
  }
  
  login(soDienThoai,password){
   
    this.lg.login(soDienThoai,password).subscribe(data => {
      
       
      this.user=Object.assign(data)      
      var tenNguoiDung=this.user.user.tenNguoiDung;
       var hinh=this.user.user.hinh;
       var id=this.user.user._id
      if (this.user.user.status==500) {
        window.alert(this.user.user.message)
       
      }
     
      else{
        this.cookieService.set( 'tenNguoiDung',tenNguoiDung.toString()  );
        this.cookieService.set( 'hinh',hinh.toString()  );
        this.cookieService.set( 'id',id.toString()  );
       
        
        window.alert("Đăng Nhập Thành Công!!");
        window.location.href = '/home/danhsach'
        return data
      
      }
      
    });
    

  }
  ngOnInit() {
  }

}
