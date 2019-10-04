import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import User from '../../../model/User'
import { ApiService } from 'src/app/service/api.service';
import { Button } from 'protractor';

import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-danhsachtaikhoan',
  templateUrl: './danhsachtaikhoan.component.html',
  styleUrls: ['./danhsachtaikhoan.component.css']
})
export class DanhsachtaikhoanComponent implements OnInit {
  http: HttpClient
  userlist: any
  resdata: any[]

  constructor(private apiService: ApiService, private root:ActivatedRoute) {

  }

  ngOnInit(): void {
    
    var users
    this.apiService.getalluser()
      .subscribe(data => {
        this.userlist = Object.assign(data)
        //for (let index = 0; index < user.length; index++) {
        
        this.innitDatatable(this.userlist.userlist);

      }

        // }


      )


    console.log(this.userlist)
    // this.resdata=this.userlist


  };

 


  innitDatatable(datares) {
    var table = $('#datatable').DataTable({
      responsive: true,
      "processing": true,
      data: datares,
      columns: [
        {
          "render": function (data, type, JsonResultRow, meta) {
            return '<img style="height: 100px;width:100px;border-radius:50%" src="../../../../assets/images/' + JsonResultRow.hinh + '">';
          }
        },
        
       
        { data: 'tenNguoiDung' },
        { data: 'soDienThoai' },
        //{ data: 'tenHocSinh' },
      

      ]


    });
  }

}