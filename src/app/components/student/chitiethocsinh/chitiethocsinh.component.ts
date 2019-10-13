import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import { ApiService } from '../../../service/api.service'
import Student from 'src/app/model/Student';
import { ActivatedRoute } from "@angular/router";
import { MatDatepickerModule } from '@angular/material/datepicker';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { TemplateRef } from '@angular/core';
@Component({
  selector: 'app-chitiethocsinh',
  templateUrl: './chitiethocsinh.component.html',
  styleUrls: ['./chitiethocsinh.component.css']
})
export class ChitiethocsinhComponent implements OnInit {
  studentForm: FormGroup
  Student: Student ;
  danhsachkhoi = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  res: any;
  model;
  fileData: File = null;
  previewUrl: any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;
  id:string
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService,private http: HttpClient, private fb: FormBuilder, private as: ApiService, private route: ActivatedRoute,private calendar: NgbCalendar) {
    // this.createform()
  }
  // createform() {
  //   this.studentForm = this.fb.group({
  //     tenHocSinh: [''],
  //     soHieu: [''],
  //     khoi: [''],
  //     gioiTinh: [''],
  //     ngaySinh: [''],
  //     hinh:[''],
  //     diaChi:['']
     



  //   });
  // }

  fileupdate(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
    this.preview();
  }
  preview() {
    // Show preview 
    var mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(this.fileData);
    reader.onload = (_event) => {
      this.previewUrl = reader.result;
    }
  
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  close() {
    this.modalRef.hide();
  }
  ngOnInit() {
     this.id = this.route.snapshot.paramMap.get("id");
    this.as.getstudent(this.id).subscribe(res => {
      var resfomat = Object.assign(res)
      this.Student = resfomat.student;
      var now = new Date(Number(this.Student.ngaySinh));
      var d = now.toLocaleDateString()
      this.Student.ngaySinh = d

    })


  }
 
 
  sua() {
    
    const formData = new FormData();
    formData.append('id',this.id);
    formData.append('hinh', this.fileData, this.fileData.name);
    formData.append('tenHocSinh', this.Student.tenHocSinh);
    formData.append('soHieu', this.Student.soHieu);
    formData.append('khoi', this.Student.khoi);
    formData.append('ngaySinh',this.Student.ngaySinh);
    formData.append('gioiTinh', this.Student.tenHocSinh);
    this.as.updataStudent(formData).subscribe(data=>{
      this.Student=Object.assign(data);
    })

  }
  Xoa(){
    var id=this.id;
    this.as.deleteStudent(id).subscribe(data=>{
      var res=Object.assign(data)
      if(res.status==200){
        window.alert("Xóa Thành Công!!")
        window.location.href="/home/hocsinh/danhsach"
      }
    })
  }
}
