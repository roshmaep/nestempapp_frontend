import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-securityviewdailyvisitor',
  templateUrl: './securityviewdailyvisitor.component.html',
  styleUrls: ['./securityviewdailyvisitor.component.css']
})
export class SecurityviewdailyvisitorComponent {
  constructor(private api:ApiService){
    api.viewVisitorLog().subscribe(
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
    this.api.securityviewDailyVisitorLog1(data).subscribe(
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
