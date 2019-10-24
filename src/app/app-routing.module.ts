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
import{ DayoffComponent} from './components/student/dayoff/dayoff.component'
import { DetaildayoffComponent } from './components/student/dayoff/detaildayoff/detaildayoff.component';
import { ChatComponent } from './components/chat/chat.component';
import {ChatboxcontentComponent} from './components/chat/chatboxcontent/chatboxcontent.component';
import {TranscriptComponent} from './components/transcript/transcript.component'
import {TrancripteditComponent} from './components/transcript/trancriptedit/trancriptedit.component'
import{TeacherComponent} from './components/teacher/teacher.component'
import{ EditteacherComponent} from './components/teacher/editteacher/editteacher.component'
import{ FulltranscriptComponent} from './components/transcript/fulltranscript/fulltranscript.component'
import { from } from 'rxjs';
const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'giaoVien/:id',
    component: EditteacherComponent
  },
 
  {
    path: 'home',
    component: SidebarComponent,children:[
      {
        path: 'giaoVien',
        component: TeacherComponent
      },
     
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
      {
        path: 'ngaynghi',
        component: DayoffComponent
      },
      {
        path: 'xinphep/:id',
        component: DetaildayoffComponent
      },
      {
        path: 'bangdiem',
        component: TranscriptComponent
      },
      {
        path: 'bangdiem/:id',
        component: TrancripteditComponent
      },
      {
        path: 'bangdiemchitiet/:id',
        component: FulltranscriptComponent
      },
      {
        path: 'trochuyen',
        component: ChatComponent,children:[
          {
            path: 'trochuyen/:id',
            component: DetaildayoffComponent
          },
        ]
      },
      
      
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
