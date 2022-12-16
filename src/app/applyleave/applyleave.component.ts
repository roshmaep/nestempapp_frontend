import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-applyleave',
  templateUrl: './applyleave.component.html',
  styleUrls: ['./applyleave.component.css']
})
export class ApplyleaveComponent {
  empId:any=""
  type=""
  remarks=""
  fromDate=""
  toDate=""
  
  
  constructor(private api:ApiService){this.empId=localStorage.getItem("userInfo")}
  readValues=()=>
  {
    let data:any={"empId":this.empId,"type":this.type,"remarks":this.remarks,"fromDate":this.fromDate,"toDate":this.toDate,}
    console.log(data)
    this.api.applyLeave(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if (response.status=="success") {
          alert("Leave added successfully")
          this.empId=""
          this.type=""
          this.remarks=""
          this.fromDate=""
          this.toDate=""
          
         

        } else {
          alert("Something went wrong")
        }
      }
    )
  }

}
