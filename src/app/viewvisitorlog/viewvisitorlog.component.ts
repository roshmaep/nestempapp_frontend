import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewvisitorlog',
  templateUrl: './viewvisitorlog.component.html',
  styleUrls: ['./viewvisitorlog.component.css']
})
export class ViewvisitorlogComponent {
  constructor(private api:ApiService){
    api.viewVisitorLog().subscribe(
      (response)=>
      {
        this.data=response;
      }
    )
  }
  data:any=[]
}
