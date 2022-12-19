import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-leavepending',
  templateUrl: './leavepending.component.html',
  styleUrls: ['./leavepending.component.css']
})
export class LeavependingComponent {
  empId:any=""

  data:any=[]

  constructor(private api:ApiService){

  this.empId=localStorage.getItem("userInfo")

  let data:any={"empId":this.empId}

  this.api.viewLeavePending(data).subscribe(

    (response:any)=>{

      console.log(response)

      this.data=response

    }

  )

}
}
