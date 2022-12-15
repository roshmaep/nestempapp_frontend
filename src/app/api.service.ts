import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  addemployee=(datatosend:any)=>
  {
    return this.http.post("http://localhost:8080/addemployee",datatosend)
  }
  addsecurity=(datatosend:any)=>
  {
    return this.http.post("http://localhost:8080/addsecurity",datatosend)
  }
  readValues=(datatosend:any)=>

  {

    return this.http.post("http://localhost:8080/search",datatosend)

  }
  deleteemployee=(datatosend:any)=>{
    return this.http.post("http://localhost:8080/delete",datatosend)
  }
  searchsecurity=(datatosend:any)=>

  {

    return this.http.post("http://localhost:8080/securitysearch",datatosend)

  }
  deletesecurity=(datatosend:any)=>{
    return this.http.post("http://localhost:8080/deletesecurity",datatosend)
  }
  viewemployee=()=>{
    return this.http.get("http://localhost:8080/viewallemp")
  }
  viewsecurity=()=>{
    return this.http.get("http://localhost:8080/viewallsecurity")
  }
  empLogin=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/userlogin",dataToSend)
  }
  getempprofile=(datatosend:any)=>{
    return this.http.post("http://localhost:8080/viewprofile",datatosend)
  }
  securityLogin=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/securitylogin",dataToSend)
  }
  getsecurityprofile=(datatosend:any)=>{
    return this.http.post("http://localhost:8080/securityviewprofile",datatosend)
  }
  
}
