import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewallsecurity',
  templateUrl: './viewallsecurity.component.html',
  styleUrls: ['./viewallsecurity.component.css']
})
export class ViewallsecurityComponent {
  constructor(private api:ApiService){
    api.viewsecurity().subscribe(
      (response)=>
      {
        this.data=response;
      }
    )
  }
  
  data:any=[]
}
