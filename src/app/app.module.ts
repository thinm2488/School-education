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

//component module
import{ComponentsModule} from './components/components.module'
//services
import { ApiService } from './service/api.service';
//components
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ExcelService } from './service/excel.service';


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
    
    
  ],
  providers: [
    ApiService,
    CookieService,
    ExcelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
