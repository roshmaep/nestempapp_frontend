import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewdailyvisitorlog',
  templateUrl: './viewdailyvisitorlog.component.html',
  styleUrls: ['./viewdailyvisitorlog.component.css']
})
export class ViewdailyvisitorlogComponent {

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
    this.api.viewDailyVisitorLog(data).subscribe(
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
