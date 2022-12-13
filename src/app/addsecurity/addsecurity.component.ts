import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addsecurity',
  templateUrl: './addsecurity.component.html',
  styleUrls: ['./addsecurity.component.css']
})
export class AddsecurityComponent {
  scode=""
  name=""
  address=""
  email=""
  phone=""
  username=""
  password=""
  cpassword=""
  constructor(private api:ApiService){}
  readValues=()=>
  {
  let data:any={"scode":this.scode,"name":this.name,"address":this.address,"email":this.email,"phone":this.phone,"username":this.username,"password":this.password,"cpassword":this.password}
  console.log(data)
  this.api.addsecurity(data).subscribe(
    (response:any)=>{console.log(response)
      if(response.status =="success"){
        alert("security added successfully")
       
        this.scode=""
        this.name=""
        this.address=""
        this.email=""
        this.phone=""
        this.username=""
        this.password=""
        this.cpassword=""
      }
      else{
        alert("something wrong")
      }
    }
  ) 
}
}
