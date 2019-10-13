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
import {NotificationService} from './service/notification.service'
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
    MatDatepickerModule

    
  ],
  providers: [
    ApiService,
    CookieService,
    ExcelService,
    NotificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
