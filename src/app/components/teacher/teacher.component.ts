import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import { ApiService } from '../../service/api.service'
import { CookieService } from 'ngx-cookie-service';
import { TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import * as XLSX from 'xlsx';  
import * as FileSaver from 'file-saver'; 
@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  danhsachkhoi = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  modalRef: BsModalRef;
  accountForm:FormGroup
  khoilop:any;
  danhsachlop:any;
   teacherList:any;
   userlist:any;
   User:any
   lopCN:any;
   id:any;
   fileimport:any
   lopDay=[]
  constructor( private modalService: BsModalService,private as:ApiService, private cookies:CookieService, private fb:FormBuilder) {
    this.createform()
   }

  ngOnInit() {
    this.getallteacher();
    this.getalluser()
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  
  }
  close() {
    this.modalRef.hide();
  }
  createform() {
    this.accountForm = this.fb.group({
      soDienThoai: [''],
      tenNguoiDung: [''],
      email: [''],
      GVCN: [''],
     

    });
  }

  tao(tenNguoiDung,soDienThoai,email){
    var id=this.cookies.get('id')
    var data={
      idTao:id,
      tenNguoiDung:tenNguoiDung,
      soDienThoai:soDienThoai,
      email:email,
      GVCN:this.lopCN.soHieu
    }
    this.as.createTeacher(data).subscribe(data=>{
      this.User=Object.assign(data)
      if(this.User.status==200){
        window.alert("Thêm tài khoản thành công!")
       this.getallteacher()
      }
    })

  }
  Xoa(){
    var id=this.id;
    this.as.deleteTeacher(id).subscribe(data=>{
      var res=Object.assign(data)
      if(res.user.status==200){
        window.alert("Xóa Thành Công!!")
       this.getallteacher()
      }
    })
    }
  getallteacher(){
    this.as.getaccount().subscribe(data=>{
      var user=Object.assign(data)
      this.teacherList=user.teacher
      // for(let i=0;i<=this.teacherList.length;i++){
      //   this.teacherList[i].lopDay=String(user.teacher[i].lopDay)
      // }
    })
  }
  getalluser(){
    this.as.getalluser()
    .subscribe(data => {
      let user = Object.assign(data)
      this.userlist=user.userlist
      //for (let index = 0; index < user.length; index++) {

     
    }
    )
  }
  getlop() {
    let data = {
      khoi: this.khoilop
    }

  
    this.as.getlistclass(data).subscribe(res => {
      let danhsachlop = Object.assign(res)
      this.danhsachlop =  danhsachlop.classes.Classes;
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
      this.fileimport=XLSX.utils.sheet_to_json(this.worksheet,{
        raw:true
      })
      
      // this.userList.push(this.worksheet);
    }  
    readFile.readAsArrayBuffer(this.fileUploaded);  
    
  }  
  importexcel(){
   
    this.as.Importexcelteacher(this.fileimport).subscribe(data=>{
      var res=Object.assign(data)
      if(res.status==200){
        window.alert("Import file thành công!");
       this.getallteacher()
      }
    })

  }
  Phanconggiangday(){
   
    this.as.Phanconggiangday(this.fileimport).subscribe(data=>{
      var res=Object.assign(data)
      if(res.status==200){
        window.alert("Import file thành công!");
        window.location.href="/home/giaoVien"
      }
    })

  }
}
