import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { TranscriptService } from '../../../service/transcript.service'
import { ApiService } from '../../../service/api.service'
import { from } from 'rxjs';
import { ActivatedRoute } from "@angular/router";
import { CookieService } from 'ngx-cookie-service';
import Transcript from '../../../model/Transcript'
@Component({
  selector: 'app-trancriptedit',
  templateUrl: './trancriptedit.component.html',
  styleUrls: ['./trancriptedit.component.css']
})
export class TrancripteditComponent implements OnInit {
  bangDiem :Transcript
  student:any
  mon:String;
  test ='hhhh';
  ishiden:boolean=false;
  isshow:boolean=true;
  
  constructor( private fb:FormBuilder,private ts: TranscriptService, private route: ActivatedRoute,private as:ApiService,private cookieService:CookieService) {
    
   }

  ngOnInit() {
  
 
   
    this.bangDiem =  new Transcript();
    console.log()
   this.mon=  this.cookieService.get('chuyenmon');
   this.gethocsinh()
   
    // var id;
    // this.ts.gettrancript(id).subscribe(data => {
    //   var res = Object.assign(data)
    //   this.bangDiem = res.transcript
    // })
  }
 
  gethocsinh(){
    var id = this.route.snapshot.paramMap.get("id");
    this.as.getstudent(id).subscribe(data=>{
      var res=Object.assign(data)
      this.student=res.student
    })
    var data={
      id:id,
      mon:this.mon
    }
    this.ts.gettrancript(data).subscribe(data=>{
      var res=Object.assign(data)
      this.bangDiem=res.transcript.transcript
      
     
      
      this.bangDiem.diem15p1=res.transcript.transcript.HKI.diem15p[0];
      this.bangDiem.diem15p2=res.transcript.transcript.HKI.diem15p[1];
      this.bangDiem.diem15p3=res.transcript.transcript.HKI.diem15p[2];
      this.bangDiem.diem15p4=res.transcript.transcript.HKII.diem15p[0];
      this.bangDiem.diem15p5=res.transcript.transcript.HKII.diem15p[1];
      this.bangDiem.diem15p6=res.transcript.transcript.HKII.diem15p[2];

      this.bangDiem.diemmieng1=res.transcript.transcript.HKI.diemMieng[0];
      this.bangDiem.diemmieng2=res.transcript.transcript.HKI.diemMieng[1];
      this.bangDiem.diemmieng3=res.transcript.transcript.HKI.diemMieng[2];
      this.bangDiem.diemmieng4=res.transcript.transcript.HKII.diemMieng[0];
      this.bangDiem.diemmieng5=res.transcript.transcript.HKII.diemMieng[1];
      this.bangDiem.diemmieng6=res.transcript.transcript.HKII.diemMieng[2];

      this.bangDiem.diem1tiet1=res.transcript.transcript.HKI.diem15p[0];
      this.bangDiem.diem1tiet2=res.transcript.transcript.HKI.diem1tiet[1];
      this.bangDiem.diem1tiet3=res.transcript.transcript.HKI.diem1tiet[2];
      this.bangDiem.diem1tiet4=res.transcript.transcript.HKII.diem1tiet[0];
      this.bangDiem.diem1tiet5=res.transcript.transcript.HKII.diem1tiet[1];
      this.bangDiem.diem1tiet6=res.transcript.transcript.HKII.diem1tiet[2];

      this.bangDiem.GKI= res.transcript.transcript.HKI.diemGiuaKy
      this.bangDiem.CKI= res.transcript.transcript.HKI.diemCuoiKy
      this.bangDiem.GKII= res.transcript.transcript.HKII.diemGiuaKy
      this.bangDiem.CKII= res.transcript.transcript.HKII.diemCuoiKy

      this.bangDiem.canam= res.transcript.transcript.HKII.diemTB
     
    })
  } 
  Sua(){
    this.ishiden=true;
    this.isshow=false

  }
  insertmark(){
    var hocsinh=this.bangDiem
    var data={
      mon:this.mon,
      bangDiem:this.bangDiem,
      idHocSinh:this.student._id,
      soHieu:this.student.soHieu,
      
      
    }
    this.ts.createtranscript(data).subscribe(data=>{
      let respon=Object.assign(data)
    })
   
    console.log(this.test)
  }

}
