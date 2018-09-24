import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';

import {MatFormFieldModule,MatFormFieldControl} from '@angular/material/form-field';
import {MatInputModule, MatSortHeader, MatSortModule} from '@angular/material';
import {MatTableDataSource, MatSort} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';



import { SignUpComponent } from './sign-up/sign-up.component';
import { TableComponent } from './table/table.component';

import {ConfigService} from './config/config.service';
import {Apiservice} from './config/api.service';
import {Zipcodeservice} from './table/table.service';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignUpComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatCardModule,
    MatInputModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    HttpClientModule
  ],
  providers: [
    ConfigService,
    Apiservice,
    Zipcodeservice
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
