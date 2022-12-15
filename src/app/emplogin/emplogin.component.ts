import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-emplogin',
  templateUrl: './emplogin.component.html',
  styleUrls: ['./emplogin.component.css']
})
export class EmploginComponent {
  email=""
  password=""
  constructor(private api:ApiService,private route:Router){}
 
  readValues=()=>
  {
    let data:any={"email":this.email,"password":this.password}
    console.log(data)
    this.api.empLogin(data).subscribe(
      (response:any)=>{
        this.email=""
        this.password=""
        if (response.length==0) {
          
          alert("Invalid credential")
        } else {
          let userId=response.userid
          console.log(userId)
          localStorage.setItem("userInfo",userId)
          //alert("Valid credential")
          this.route.navigate(['/viewprofile'])
          
        }
      }
    )

    

      
  }
 
}
