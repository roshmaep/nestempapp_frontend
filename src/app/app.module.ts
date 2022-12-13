import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { AddsecurityComponent } from './addsecurity/addsecurity.component';
import { SearchComponent } from './search/search.component';
import { SearchsecurityComponent } from './searchsecurity/searchsecurity.component';
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
const myRoute:Routes=[
  {
 path:"",
 component:AdminloginComponent
  },
  {
  path:"addemp",
  component:AddemployeeComponent
},
{
  path:"adds",
  component:AddsecurityComponent
},
{
  path:"searchemp",
  component:SearchComponent}
,{
path:"searchs",
component:SearchsecurityComponent
},{
  path:"navadmin",
  component:NavbarComponent
}
]
@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    AddemployeeComponent,
    AddsecurityComponent,
    SearchComponent,
    SearchsecurityComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(myRoute),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
