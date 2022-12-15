import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewsecurityprofile',
  templateUrl: './viewsecurityprofile.component.html',
  styleUrls: ['./viewsecurityprofile.component.css']
})
export class ViewsecurityprofileComponent {
  userId:any=""

  constructor(private api:ApiService){

    this.userId=localStorage.getItem("userInfo")

    let data:any={"id":this.userId}

    this.api.getsecurityprofile(data).subscribe(

      (response:any)=>{

        console.log(response)

        this.data=response



      }

    )

  }

  data:any=[]
}
