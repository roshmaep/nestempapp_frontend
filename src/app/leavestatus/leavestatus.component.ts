import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-leavestatus',
  templateUrl: './leavestatus.component.html',
  styleUrls: ['./leavestatus.component.css']
})
export class LeavestatusComponent {
  empId:any=""
  searchData:any=[]
  constructor(private api:ApiService){
    this.empId=localStorage.getItem("userInfo")
  }
  
  readValue=()=>
  {
    let data:any={"empId":this.empId}
    console.log(data)
    this.api.searchStatus(data).subscribe(
      (response:any)=>
      {
       this.searchData=response
        
      }
    )
  }
  data:any=[]
}
