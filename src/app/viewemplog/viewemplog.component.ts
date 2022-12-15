import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewemplog',
  templateUrl: './viewemplog.component.html',
  styleUrls: ['./viewemplog.component.css']
})
export class ViewemplogComponent {

  constructor(private api:ApiService){
    api.viewEmployeeLog().subscribe(
      (response)=>
      {
        this.data=response;
      }
    )
  }
  data:any=[]
 }
