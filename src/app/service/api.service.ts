import { Injectable } from '@angular/core';
import User from '../model/User'
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  login(soDienThoai,password) {
    const user = {
      soDienThoai,
      password
    };
    console.log(user);
    this.http.post("/api/route/user/signin", user)
        .subscribe(res => window.alert("Đăng Nhập Thành Công!!"));
  }
  getalluser(){
    return this.http.get("/api/route/user/getall");
  }
}
