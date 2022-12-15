import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewallemp',
  templateUrl: './viewallemp.component.html',
  styleUrls: ['./viewallemp.component.css']
})
export class ViewallempComponent {
  constructor(private api:ApiService){
    api.viewemployee().subscribe(
      (response)=>
      {
        this.data=response;
      }
    )
  }
  
  data:any=[]
}
