import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewleaveapplication',
  templateUrl: './viewleaveapplication.component.html',
  styleUrls: ['./viewleaveapplication.component.css']
})
export class ViewleaveapplicationComponent {
  constructor(private api:ApiService)
  {
    api.viewLeave().subscribe(
      (response)=>
      {
        this.leaves=response;
      }
    )
  }

  leaves:any=[]
}
