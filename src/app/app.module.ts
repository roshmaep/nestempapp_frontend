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
import { ViewallempComponent } from './viewallemp/viewallemp.component';
import { ViewallsecurityComponent } from './viewallsecurity/viewallsecurity.component';
import { EmploginComponent } from './emplogin/emplogin.component';
import { EmpnavbarComponent } from './empnavbar/empnavbar.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { SecurityloginComponent } from './securitylogin/securitylogin.component';
import { SecuritynavbarComponent } from './securitynavbar/securitynavbar.component';
import { ViewsecurityprofileComponent } from './viewsecurityprofile/viewsecurityprofile.component';
import { ApplyleaveComponent } from './applyleave/applyleave.component';
import { LeavestatusComponent } from './leavestatus/leavestatus.component';
import { ViewleaveapplicationComponent } from './viewleaveapplication/viewleaveapplication.component';
import { ViewemplogComponent } from './viewemplog/viewemplog.component';
import { DailyemploginComponent } from './dailyemplogin/dailyemplogin.component';
import { ViewvisitorlogComponent } from './viewvisitorlog/viewvisitorlog.component';
import { ViewdailyvisitorlogComponent } from './viewdailyvisitorlog/viewdailyvisitorlog.component';
import { ViewsecurityemplogComponent } from './viewsecurityemplog/viewsecurityemplog.component';
import { SecurityviewemployeeComponent } from './securityviewemployee/securityviewemployee.component';
import { SecurityviewdailyemplogComponent } from './securityviewdailyemplog/securityviewdailyemplog.component';
import { VisitorlogComponent } from './visitorlog/visitorlog.component';
import { SecurityviewvisitorlogComponent } from './securityviewvisitorlog/securityviewvisitorlog.component';
import { SecurityviewdailyvisitorComponent } from './securityviewdailyvisitor/securityviewdailyvisitor.component';
import { HomeComponent } from './home/home.component';
import { NavbarhomeComponent } from './navbarhome/navbarhome.component';
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
},{
  path:"viewemp",
  component:ViewallempComponent
},
{
  path:"viewsecurity",
  component:ViewallsecurityComponent
},
{
  path:"emplogin",
  component:EmploginComponent
},
{
  path:"viewprofile",
  component:ViewprofileComponent
},{
  path:"securitylogin",
  component:SecurityloginComponent
},
{
  path:"viewsecurityprofile",
  component:ViewsecurityprofileComponent
},{
path:"applyleave",
component:ApplyleaveComponent

},{
  path:"leavestatus",
  component:LeavestatusComponent
},{
  path:"viewleave",
  component:ViewleaveapplicationComponent
},{
  path:"viewemployeelog",
  component:ViewemplogComponent
},
{
  path:"dailyemployeelog",
  component:DailyemploginComponent
},{
  path:"viewvisitorlog",
  component:ViewvisitorlogComponent
},{
  path:"dailyvisitorlog",
  component:ViewdailyvisitorlogComponent
},{
  path:"employeelog",
  component:ViewsecurityemplogComponent
},{
  path:"securityviewemplog",
  component:SecurityviewemployeeComponent
},
{
  path:"securitydaliyviewemp",
  component:SecurityviewdailyemplogComponent
},{
  path:"visitorlog",
  component:VisitorlogComponent
},
{
  path:"securityviewvisitor",
  component:SecurityviewvisitorlogComponent
},{
  path:"securityviewdailyvisitor",
  component:SecurityviewdailyvisitorComponent
},{
  path:"home",
  component:HomeComponent
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
    NavbarComponent,
    ViewallempComponent,
    ViewallsecurityComponent,
    EmploginComponent,
    EmpnavbarComponent,
    ViewprofileComponent,
    SecurityloginComponent,
    SecuritynavbarComponent,
    ViewsecurityprofileComponent,
    ApplyleaveComponent,
    LeavestatusComponent,
    ViewleaveapplicationComponent,
    ViewemplogComponent,
    DailyemploginComponent,
    ViewvisitorlogComponent,
    ViewdailyvisitorlogComponent,
    ViewsecurityemplogComponent,
    SecurityviewemployeeComponent,
    SecurityviewdailyemplogComponent,
    VisitorlogComponent,
    SecurityviewvisitorlogComponent,
    SecurityviewdailyvisitorComponent,
    HomeComponent,
    NavbarhomeComponent
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
