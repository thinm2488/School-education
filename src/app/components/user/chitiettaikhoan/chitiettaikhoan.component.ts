import { Component, OnInit } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ActivatedRoute } from "@angular/router";
import { ApiService } from '../../../service/api.service'
@Component({
  selector: 'app-chitiettaikhoan',
  templateUrl: './chitiettaikhoan.component.html',
  styleUrls: ['./chitiettaikhoan.component.css']
})
export class ChitiettaikhoanComponent implements OnInit {
  modalRef: BsModalRef;
  iduser:any;
  UserObj:any;
  HocSinh:any;
  tenNguoiDung:'';
  soDienThoai:'';
  email:'';
  hinh:'';
 
  
  constructor(private modalService: BsModalService, private route: ActivatedRoute,private as:ApiService) { }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  close() {
    this.modalRef.hide();
  }
  ngOnInit() {
    this.iduser = this.route.snapshot.paramMap.get("id");
   

    window.alert(this.iduser)
    this.as.getUser(this.iduser).subscribe(data=>{
      var userobj=Object.assign(data);
      this.UserObj=userobj.user.user;
      this.HocSinh=this.UserObj.quanHe
      this.tenNguoiDung=this.UserObj.tenNguoiDung;
      this.soDienThoai=this.UserObj.soDienThoai;
      this.email=this.UserObj.email;
      this.hinh=this.UserObj.hinh

      
   
    })
  }
  
  Xoa(){
  var id=this.iduser;
  this.as.deleteUser(id).subscribe(data=>{
    var res=Object.assign(data)
    if(res.user.status==200){
      window.alert("Xóa Thành Công!!")
      window.location.href="/home/danhsach"
    }
  })
  }

}
