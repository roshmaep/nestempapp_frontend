import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent {
  userId:any=""

  constructor(private api:ApiService){

    this.userId=localStorage.getItem("userInfo")

    let data:any={"id":this.userId}

    this.api.getempprofile(data).subscribe(

      (response:any)=>{

        console.log(response)

        this.data=response



      }

    )

  }

  data:any=[]
}
