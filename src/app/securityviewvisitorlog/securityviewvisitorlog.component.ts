import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-securityviewvisitorlog',
  templateUrl: './securityviewvisitorlog.component.html',
  styleUrls: ['./securityviewvisitorlog.component.css']
})
export class SecurityviewvisitorlogComponent {
  constructor(private api:ApiService){
    api.securityviewVisitorLog().subscribe(
      (response)=>
      {
        this.data=response;
      }
    )
  }
  data:any=[]

}
