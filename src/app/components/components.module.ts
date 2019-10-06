import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from 'ng2-ckeditor';

// import { FooterComponent } from './footer/footer.component';
// import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

// import { TaothongbaoComponent } from './thongbao/taothongbao/taothongbao.component';
// import { SuathongbaoComponent } from './thongbao/suathongbao/suathongbao.component';
// import { DanhsachComponent } from './thongbao/danhsach/danhsach.component';
import { DanhsachtaikhoanComponent } from './user/danhsachtaikhoan/danhsachtaikhoan.component';
import { TaotaikhoanComponent } from './user/taotaikhoan/taotaikhoan.component';
import{ChitiettaikhoanComponent} from './user/chitiettaikhoan/chitiettaikhoan.component';
import { NotificationComponent } from './notification/notification.component';
import { DanhsachnotiComponent } from './notification/danhsach/danhsachnoti/danhsachnoti.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule
  ],
  declarations: [
    // FooterComponent,
    // NavbarComponent,
    SidebarComponent,
   
    // TaothongbaoComponent,
    // SuathongbaoComponent,
    // DanhsachComponent,
    DanhsachtaikhoanComponent,
    TaotaikhoanComponent,
    ChitiettaikhoanComponent,
    NotificationComponent,
    DanhsachnotiComponent
  ],
  exports: [
    // FooterComponent,
    // NavbarComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }