import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient} from '@angular/common/http'
import {ApiService} from '../../service/api.service'



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private http : HttpClient) {
    this.createForm();
   }
   createForm() {
    this.angForm = this.fb.group({
      soDienThoai: [''],
      password: [''],
  
    });
  }
  lg:ApiService
  login(soDienThoai,password){
    this.lg = new ApiService(this.http);
    this.lg.login(soDienThoai,password);

  }
  ngOnInit() {
  }

}
