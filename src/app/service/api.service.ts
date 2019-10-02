import { Injectable } from '@angular/core';
import User from '../model/User'
import { HttpClient } from '@angular/common/http'
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  login(soDienThoai, password) {
    const user = {
      soDienThoai,
      password
    };
    console.log(user);
    return this.http.post("/api/route/user/signin", user)

  }
  getalluser() {
    return this.http.get("/api/route/user/getall");
  }
  createUser(data){
    return this.http.post("/api/route/user/signup",data)
  }

}
