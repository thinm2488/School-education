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
  getUser(id){
    return this.http.get("/api/route/user/"+id)
  }
  createUser(data){
    return this.http.post("/api/route/user/signup",data)
  }
  Importexcel(data){
    return this.http.post("/api/route/user/excel",data)
  
  }
  deleteUser(id){
    return this.http.delete("/api/route/user/"+id)
  }


  //student
  getliststudent(data){
    return this.http.post("/api/route/student/getall",data);
  }


}
