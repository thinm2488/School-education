import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { CookieService } from 'ngx-cookie-service';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

//component module
import{ComponentsModule} from './components/components.module'
//services
import { ApiService } from './service/api.service';
import { ExcelService } from './service/excel.service';
import {NotificationService} from './service/notification.service';
import {TranscriptService}  from './service/transcript.service'
// import{FirebaseService} from './service/firebase.service'
//components
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { 
  MatDatepickerModule,
  MatNativeDateModule,
  MatInputModule
} from '@angular/material';
// import {AngularFireDatabaseModule} from 'angularfire2/database'
// import {AngularFireModule} from 'angularfire2'
// import {environment} from '../environments/environment'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    CommonModule,
    ComponentsModule,
    DataTablesModule,
    FilterPipeModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    CKEditorModule,
    NgbModule,
    MatNativeDateModule,
    MatInputModule,
    MatDatepickerModule,
    // AngularFireDatabaseModule,
//  AngularFireModule.initializeApp(environment.firebaseconfig)   


    
  ],
  providers: [
    ApiService,
    CookieService,
    ExcelService,
    NotificationService,
    TranscriptService
    // FirebaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
