import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from 'ng2-ckeditor';
// import { DlDateTimeDateModule, DlDateTimePickerModule } from 'angular-bootstrap-datetimepicker';

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
import { DanhsachnotiComponent } from './notification/danhsach/danhsachnoti/danhsachnoti.component';
import { ChitietnotiComponent } from './notification/chitietnoti/chitietnoti.component';
import { DanhsachhocsinhComponent } from './student/danhsachhocsinh/danhsachhocsinh.component';
import { ChitiethocsinhComponent } from './student/chitiethocsinh/chitiethocsinh.component';
import { TaohocsinhComponent } from './student/taohocsinh/taohocsinh.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { AngularFireModule } from 'angularfire2';

// import { TaohocsinhComponent } from './student/taohocsinh/taohocsinh.component'
import {MatDatepickerModule,
MatNativeDateModule,
MatInputModule
} from '@angular/material';
import { DayoffComponent } from './student/dayoff/dayoff.component';
import { DetaildayoffComponent } from './student/dayoff/detaildayoff/detaildayoff.component';
import { ChatComponent } from './chat/chat.component';
import { ChatboxcontentComponent } from './chat/chatboxcontent/chatboxcontent.component';
import { TranscriptComponent } from './transcript/transcript.component';
import { TeacherComponent } from './teacher/teacher.component';
import { EditteacherComponent } from './teacher/editteacher/editteacher.component';
import { TrancripteditComponent } from './transcript/trancriptedit/trancriptedit.component';
import { FulltranscriptComponent } from './transcript/fulltranscript/fulltranscript.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
    NgbModule,
    MatNativeDateModule,
    MatInputModule,
    MatDatepickerModule,
  

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
    DanhsachnotiComponent,
    ChitietnotiComponent,
    DanhsachhocsinhComponent,
    ChitiethocsinhComponent,
    TaohocsinhComponent,
    DayoffComponent,
    DetaildayoffComponent,
    ChatComponent,
    ChatboxcontentComponent,
    TranscriptComponent,
    TeacherComponent,
    EditteacherComponent,
    TrancripteditComponent,
    FulltranscriptComponent,
    
    // TaohocsinhComponent
  ],
  exports: [
    // FooterComponent,
    // NavbarComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }