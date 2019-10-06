import { Component, OnInit } from '@angular/core';
import { CKEditorModule } from 'ng2-ckeditor';
import { create } from 'domain';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {NotificationService} from '../../service/notification.service'
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
 
  // ckeditorContent: any;
  res:any
  notiForm: FormGroup
  constructor(private fb: FormBuilder,private nt: NotificationService,private cookieService:CookieService) { 
    this.createform()
  }
  createform() {
    this.notiForm = this.fb.group({
      noiDung: [''],
      chuDe: [''],
   
    });
  }
  // create(){
    
    //  let noti=$('noti').html()
    //  console.log(this.ckeditorContent)
    // this.ckeditorContent.content=this.ckeditorContent.content.replace(/<img /g, '<img style="max-width:100%;height:auto" ');
    // this.ckeditorContent.content=this.ckeditorContent.content.replace(/<video /g, '<video style="max-width:100%;height:auto" ');
    // this.ckeditorContent.content=this.ckeditorContent.content.replace(/<iframe /g, '<iframe style="max-width:100%;height:auto" ');
    // this.ckeditorContent.content=this.ckeditorContent.content.replace('style="max-width:100%;height:auto" style="max-width:100%;height:auto" ', '')
  // }
  
create(chuDe,noiDung){
  var today = new Date();
  var time=today.getTime()
  var data={
    gioTao: time,
    nguoiTao:this.cookieService.get('id'),
    hinh:this.cookieService.get('hinh'),
    chuDe:chuDe,
    noiDung:noiDung
  }
this.nt.taonoti(data).subscribe(data=>{
  this.res=Object.assign(data)
  if(this.res.status==200){
    window.alert("Tạo thông báo thành công!")
    window.location.href='/home/thongbao/danhsach'
  }
})
}
  ngOnInit() {
  }

}
