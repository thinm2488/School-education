import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ApiService } from '../../../../service/api.service'
import Student from 'src/app/model/Student';
import { ActivatedRoute } from "@angular/router";
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { TemplateRef } from '@angular/core';
@Component({
  selector: 'app-detaildayoff',
  templateUrl: './detaildayoff.component.html',
  styleUrls: ['./detaildayoff.component.css']
})
export class DetaildayoffComponent implements OnInit {
 dayoff:any;
 id:any;
 tenPhuHuynh:any;
 tenHocSinh:any;
 soHieu:any;
 ngayBatDau:number;
 ngayKetThuc:number;
 lyDo:any; 
 soNgayNghi:number

  constructor( private as:ApiService,private route: ActivatedRoute,private modalService: BsModalService,) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.as.getdayoff(this.id).subscribe(data=>{
     this.dayoff=Object.assign(data);
     this.tenPhuHuynh=this.dayoff.dayoff.tenPhuHuynh
    this.tenHocSinh=this.dayoff.dayoff.tenHocSinh
    this.soHieu=this.dayoff.dayoff.soHieu
    this.ngayBatDau=this.dayoff.dayoff.ngayBatDau
    this.ngayKetThuc=this.dayoff.dayoff.ngayKetThuc
    this.soNgayNghi=this.dayoff.dayoff.soNgayNghi
    this.lyDo=this.dayoff.dayoff.lyDo
    })
    
  }
  duyet(){
    var data={
      id:this.id
    }
    this.as.alloweddayoff(data).subscribe(data=>{
      window.alert("Duyệt Thành Công")
      window.location.href="/home/ngaynghi"
    })

  }

}
