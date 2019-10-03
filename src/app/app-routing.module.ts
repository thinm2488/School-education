import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ SidebarComponent} from './components/sidebar/sidebar.component';
import {LoginComponent} from './components/login/login.component';
import{DanhsachtaikhoanComponent} from './components/user/danhsachtaikhoan/danhsachtaikhoan.component';
import{TaotaikhoanComponent} from './components/user/taotaikhoan/taotaikhoan.component'


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
        path: 'chitiettaikhoan',
        component: TaotaikhoanComponent
      },
      {
        path: 'chitiettaikhoan/:id',
        component: TaotaikhoanComponent
      },
      
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
