import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent {
  empcode=""
  name=""
  address=""
  email=""
  phone=""
  designation=""
  username=""
  password=""
  cpassword=""
  constructor(private api:ApiService){}
  readValues=()=>
  {
  let data:any={"empcode":this.empcode,"name":this.name,"address":this.address,"email":this.email,"phone":this.phone,"designation":this.designation,"username":this.username,"password":this.password,"cpassword":this.password}
  console.log(data)
  this.api.addemployee(data).subscribe(
    (response:any)=>{console.log(response)
      if(response.status =="success"){
        alert("employee added successfully")
       
        this.empcode=""
        this.name=""
        this.address=""
        this.email=""
        this.phone=""
        this.designation=""
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
