import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  Hinh = '';
  TenNguoiDung="";
  constructor(private cookieService:CookieService) { }

  ngOnInit() {
    this.Hinh = this.cookieService.get('hinh');
    this.TenNguoiDung = this.cookieService.get('tenNguoiDung');
  }

}
