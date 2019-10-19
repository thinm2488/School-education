import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import { ApiService } from '../../../service/api.service'
import * as XLSX from 'xlsx';  
import * as FileSaver from 'file-saver'; 
import User from 'src/app/model/User';
import { utils } from 'protractor';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-taotaikhoan',
  templateUrl: './taotaikhoan.component.html',
  styleUrls: ['./taotaikhoan.component.css']
})
export class TaotaikhoanComponent implements OnInit {


  accountForm: FormGroup
  User: any
  userList : Array<User> = []
  danhsachkhoi = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  danhsachhocsinh: any;
  danhsachlop: any;
  khoilop: String;
  soHieu: String;
  hocsinh:any;
  res:any;
  constructor(private cookies:CookieService,private http: HttpClient, private fb: FormBuilder,private as: ApiService) {
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
  
    this.as.getlistclass(data).subscribe(res => {
      let danhsachlop = Object.assign(res)
      this.danhsachlop =  danhsachlop.classes.Classes;
    })
  }



  gethocsinh() {
 
    this.as.getliststudent(this.soHieu).subscribe(res => {
      let student = Object.assign(res)
      this.danhsachhocsinh = student.list.liststudent;
    })
  }
  // tenHocSinh:String;
  tao(tenNguoiDung,soDienThoai) {
    var id=this.cookies.get('id')
    let data = {
      idTao:id,
      tenNguoiDung: tenNguoiDung,
      soDienThoai: soDienThoai,
      HocSinh:this.hocsinh
      

    }
   
    this.as.createUser(data).subscribe(res => {
      this.User = Object.assign(res)
      window.alert(this.User.user.message)
      if (this.User.user.status == 200) {
        window.location.href = "/home/danhsach"
      }
    })

  }
  fileUploaded: File;  
  worksheet: any; 
  storeData: any;   
  uploadedFile(event) {  
    this.fileUploaded = event.target.files[0];  
    this.readExcel();  
  }  
  readExcel() {  
    let readFile = new FileReader();  
    readFile.onload = (e) => {  
      this.storeData = readFile.result;  
      var data = new Uint8Array(this.storeData);  
      var arr = new Array();  
      for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);  
      var bstr = arr.join("");  
      var workbook = XLSX.read(bstr, { type: "binary" });  
      var first_sheet_name = workbook.SheetNames[0];  
      this.worksheet =  workbook.Sheets[first_sheet_name]; 
      this.userList=XLSX.utils.sheet_to_json(this.worksheet,{
        raw:true
      })
      
      // this.userList.push(this.worksheet);
    }  
    readFile.readAsArrayBuffer(this.fileUploaded);  
    
  }  
  importexcel(){
   
    this.as.Importexcel(this.userList).subscribe(data=>{
      this.res=Object.assign(data)
      if(this.res.status==200){
        window.alert("Import file thành công!");
        window.location.href="/home/danhsach"
      }
    })

  }
  ngOnInit() {

  }

}
