import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ SidebarComponent} from './components/sidebar/sidebar.component';
import {LoginComponent} from './components/login/login.component';
import{DanhsachtaikhoanComponent} from './components/user/danhsachtaikhoan/danhsachtaikhoan.component';
import{TaotaikhoanComponent} from './components/user/taotaikhoan/taotaikhoan.component'
import{ChitiettaikhoanComponent} from './components/user/chitiettaikhoan/chitiettaikhoan.component'
import { NotificationComponent } from './components/notification/notification.component'
import{DanhsachnotiComponent} from './components/notification/danhsach/danhsachnoti/danhsachnoti.component'
import {ChitietnotiComponent} from './components/notification/chitietnoti/chitietnoti.component'
import{DanhsachhocsinhComponent} from './components/student/danhsachhocsinh/danhsachhocsinh.component'
import {ChitiethocsinhComponent} from './components/student/chitiethocsinh/chitiethocsinh.component'
import {TaohocsinhComponent} from './components/student/taohocsinh/taohocsinh.component'
import { from } from 'rxjs';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
    component: SidebarComponent,children:[
      {
        path: 'danhsach',
        component: DanhsachtaikhoanComponent
      },
      {
        path: 'taotaikhoan',
        component: TaotaikhoanComponent
      },
      {
        path: 'chitiettaikhoan/:id',
        component: ChitiettaikhoanComponent
      },
      {
        path: 'thongbao/tao',
        component: NotificationComponent
      },
      {
        path: 'thongbao/danhsach',
        component: DanhsachnotiComponent
      },
      {
        path: 'thongbao/chitietnoti/:id',
        component: ChitietnotiComponent
      },
      {
        path: 'hocsinh/danhsach',
        component: DanhsachhocsinhComponent
      },
      {
        path: 'hocsinh/taohocsinh',
        component: TaohocsinhComponent
      },
      {
        path: 'hocsinh/:id',
        component: ChitiethocsinhComponent
      },
      
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
