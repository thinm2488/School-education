import { Component, OnInit } from '@angular/core';
import{NotificationService} from '../../../../service/notification.service'
import { not } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-danhsachnoti',
  templateUrl: './danhsachnoti.component.html',
  styleUrls: ['./danhsachnoti.component.css']
})
export class DanhsachnotiComponent implements OnInit {

  listnoti:any
  constructor(private nt: NotificationService) { }

  ngOnInit() :void{
    this.nt.laydanhsachnoti().subscribe(data=>{
      var noti=Object.assign(data)
      this.listnoti=noti.listnoti
      this.innitDatatable(this.listnoti);
    })
  }

innitDatatable(datares) {
    $(document).ready(function() {
    var now = new Date;
      var table = $('#datatable').DataTable({
        responsive: true,
        
        
        "processing": true,
        data: datares,
        columns: [
        
          {
            "render": function (data, type, JsonResultRow, row) {
              
              return '<a style="color:black; margin-top:20px"  href="/home/chitietnoti/' + JsonResultRow._id + '">' + JsonResultRow.chuDe + '</a>'
            }
          },
          {
            "render": function (data, type, JsonResultRow, row) {
              return '<a style="color:black; margin-top:20px" href="/home/chitietnoti/' + JsonResultRow._id + '">' + JsonResultRow.noiDung + '</a>'
            }
          },
          
          { 
            "render": function (data, type, JsonResultRow, row) {
              var now = new Date(Number(JsonResultRow.gioTao));
              var d= now.toLocaleString()
              ;
             
              return '<a style="color:black; margin-top:20px"  href="/home/chitietnoti/' + JsonResultRow._id + '">' + d + '</a>'
            }
          },
        ],
        
        
        
        
      });
    });
    
  }
}
