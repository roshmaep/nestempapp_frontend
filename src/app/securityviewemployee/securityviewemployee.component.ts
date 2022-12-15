import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-securityviewemployee',
  templateUrl: './securityviewemployee.component.html',
  styleUrls: ['./securityviewemployee.component.css']
})
export class SecurityviewemployeeComponent {
  constructor(private api:ApiService){
    api.viewsecurityEmployeeLog().subscribe(
      (response)=>
      {
        this.data=response;
      }
    )
  }
  data:any=[]


}
