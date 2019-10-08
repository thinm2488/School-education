import { Component, OnInit } from '@angular/core';
import { CKEditorModule } from 'ng2-ckeditor';
import { create } from 'domain';
import { ActivatedRoute } from "@angular/router";
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {NotificationService} from '../../../service/notification.service'
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-chitietnoti',
  templateUrl: './chitietnoti.component.html',
  styleUrls: ['./chitietnoti.component.css']
})
export class ChitietnotiComponent implements OnInit {

  res:any
  modalRef: BsModalRef;
  idnoti:any
  noiDung:any
  chuDe:any
  constructor(private modalService: BsModalService,private route: ActivatedRoute,private nt: NotificationService,private cookieService:CookieService) { 
  
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  close() {
    this.modalRef.hide();
  }
  update(){
    var today = new Date();
    var time=today.getTime()
    var data={
      idfirebase:this.res.noti.idfirebase,
      gioTao: time,
      nguoiTao:this.cookieService.get('id'),
      chuDe:this.chuDe,
      noiDung:this.noiDung,
      hinh:this.cookieService.get('hinh'),

    }
  this.nt.suanoti(data).subscribe(data=>{
    this.res=Object.assign(data)
    if(this.res.status==200){
      window.alert("Sửa thông báo thành công!")
      window.location.href='/home/thongbao/danhsach'
    }
  })
  }
  ngOnInit() { 
    this.idnoti = this.route.snapshot.paramMap.get("id");

    this.nt.laychitietnoti(this.idnoti).subscribe(data=>{
      this.res=Object.assign(data)
      this.noiDung=this.res.noti.noiDung
      this.chuDe=this.res.noti.chuDe
    })
   
  }
  xoa(){
    var id=this.res.noti.idfirebase;
    this.nt.deletenoti(id).subscribe(data=>{
      var res=Object.assign(data)
      if(res.status==200){
        window.alert("Xóa Thành Công!!")
        window.location.href="/home/thongbao/danhsach"
      }
    })
    }
}
