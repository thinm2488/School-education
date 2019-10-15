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

  getstudent(id){
    return this.http.get("/api/route/student/"+id);
  }
  getlistclass(data){
    return this.http.post("/api/route/student/class",data);
  }
  getliststudent(data){
    return this.http.post("/api/route/student/getall",data);
  }
  getalldayoff(){
    return this.http.get("/api/route/student/getalldayoff")
  }
  getdayoff(id){
    return this.http.get("/api/route/student/dayoff/"+id)
  }
  alloweddayoff(data){
    return  this.http.put("/api/route/student/dayoff/",data)
  }
  createstudent(data){
    return this.http.post("/api/route/student/create",data);
  }
  StudentImportexcel(data){
    return this.http.post("/api/route/student/excel",data)
  
  }
  updataStudent(data){
    return this.http.put("/api/route/student/update",data)
  }

  deleteStudent(id){
    return this.http.delete("/api/route/student/"+id)
  }
}
