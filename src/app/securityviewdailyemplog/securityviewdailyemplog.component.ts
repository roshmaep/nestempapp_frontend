import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-securityviewdailyemplog',
  templateUrl: './securityviewdailyemplog.component.html',
  styleUrls: ['./securityviewdailyemplog.component.css']
})
export class SecurityviewdailyemplogComponent {
  constructor(private api:ApiService){
    api.viewEmployeeLog().subscribe(
      (response:any)=>
      {
        this.data=response
      }
    )
  }
  date=""
  searchData:any=[]
  readValues=()=>
  {
    let data:any={"date":this.date}
    console.log(data)
    this.api.securityviewDailyEmployeeLog(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if(response.length==0)
        {
          alert("Invalid")
        }
        else{
          this.data=[];
          this.searchData=response
        }
      }
    )

  }
  data:any=[]

}
