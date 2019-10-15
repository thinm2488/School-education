import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import Student from '../../../model/Student'
import { ApiService } from 'src/app/service/api.service';
import { Button } from 'protractor';
import {ExcelService} from '../../../service/excel.service';
@Component({
  selector: 'app-dayoff',
  templateUrl: './dayoff.component.html',
  styleUrls: ['./dayoff.component.css']
})
export class DayoffComponent implements OnInit {

  dayoff:any;
  student:Student
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    var id;
    this.apiService.getalldayoff()
      .subscribe(data => {
        this.dayoff = Object.assign(data)
        //for (let index = 0; index < user.length; index++) {
        
       
        this.innitDatatable(this.dayoff.dayofflist);
          
      }
      
      )


    
     
  }


  innitDatatable(datares) {
    $(document).ready(function() {
    
      var table = $('#datatable').DataTable({
        responsive: true,
        destroy: true,
        
        "processing": true,
        data: datares,
        columns: [
          {
            "render": function (data, type, JsonResultRow, row) {
              return '<a style="color:black; margin-top:20px"  href="/home/xinphep/' + JsonResultRow._id + '">' + JsonResultRow.tenPhuHuynh + '</a>'
            }
          },
          {
            "render": function (data, type, JsonResultRow, row) {
              return '<a style="color:black; margin-top:20px"  href="/home/xinphep/' + JsonResultRow._id + '">' + JsonResultRow.tenHocSinh + '</a>'
            }
          },
          {
            "render": function (data, type, JsonResultRow, row) {
              return '<a style="color:black; margin-top:20px" href="/home/xinphep/' + JsonResultRow._id + '">' + JsonResultRow.soHieu + '</a>'
            }
          },
          {
            "render": function (data, type, JsonResultRow, row) {
              var now = new Date(Number(JsonResultRow.ngayBatDau));
              var d= now.toLocaleDateString()
              return '<a style="color:black; margin-top:20px" href="/home/xinphep/' + JsonResultRow._id + '">' + d + '</a>'
            }
          },
          {
            "render": function (data, type, JsonResultRow, row) {
              let trangthai;
              if(JsonResultRow.trangThai==true){
                trangthai="Đã Duyệt";
              }else{
                trangthai="Chưa Duyệt"
              }


              return '<a style="color:black; margin-top:20px" href="/home/xinphep/' + JsonResultRow._id + '">' + trangthai + '</a>'
            }
          },
        ],
        
        
        
        
      });
    });
    
  }
}
