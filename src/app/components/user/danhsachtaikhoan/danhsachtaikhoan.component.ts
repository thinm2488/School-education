import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import User from '../../../model/User'
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-danhsachtaikhoan',
  templateUrl: './danhsachtaikhoan.component.html',
  styleUrls: ['./danhsachtaikhoan.component.css']
})
export class DanhsachtaikhoanComponent implements OnInit {
  http: HttpClient
  userlist: User[]
  resdata: any[]

  constructor(private apiService: ApiService) {

  }

  ngOnInit(): void {
    var users
    this.apiService.getalluser()
      .subscribe((data: User[]) => {
        let user = Object.entries(data)
        //for (let index = 0; index < user.length; index++) {
        const element = user[0];
        for (let i = 1; i < element.length; i++) {
          users = element[1];
          this.userlist = users;
          console.log(users);
        }
        this.innitDatatable(this.userlist);

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
        
        { data: 'soDienThoai' },
        { data: 'tenNguoiDung' },
        //{ data: 'tenHocSinh' },
        {
          "render": function (data, type, JsonResultRow, meta) {
            return '<a href="'+'/home/taikhoan/'+JsonResultRow.id+'"><button class="btn btn-warning"> <span class="glyphicon glyphicon-pencil"></span>&ensp; Sửa</button></a>&ensp&ensp<a href="'+'/home/taikhoan/'+JsonResultRow.id+'"><button class="btn btn-danger"> <span class="glyphicon glyphicon-pencil"></span>&ensp; Xóa</button></a>';
          }
        },

      ]


    });
  }

}