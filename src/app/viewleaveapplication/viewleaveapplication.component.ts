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
  // statusvalue:any={}
  // readValue=(data:any)=>{
  //   this.statusvalue=1;
  //   let accept:any={"empid":data,"status":this.statusvalue}
  //   this.api.updateStatus(accept).subscribe(
  //     (response:any)=>{
  //       if(response.status=="success"){
  //         console.log(response)
  //         console.log(response.status)
  //         alert("success")
  //       }
  //       else{
  //         alert("failed")
  //       }
  //     }
  //   )
  // }
  // rejectValue=(data:any)=>{
  //   this.statusvalue=-1;
  //   let accept:any={"empid":data,"status":this.statusvalue}
  //   this.api.updateStatus(accept).subscribe(
  //     (response:any)=>{
  //       if(response.status=="success"){
  //         console.log(response)
  //         console.log(response.status)
  //         alert("success")
  //       }
  //       else{
  //         alert("failed")
  //       }
  //     }
  //   )
  // }
  statusvalue:any={}

  readValue=(data:any)=>

  {

    this.statusvalue=1;

    let accept:any={"empId":data,"status":this.statusvalue}

    this.api.updateStatus(accept).subscribe(

      (response:any)=>

      {

        if (response.status=="success") {

          console.log(response)

          console.log(response.status)

          alert("success")

         

        } else {

          alert("failed")

         

        }

      }



    )

  }

  rejectValue=(data:any)=>{



    this.statusvalue=-1;

    let accept:any={"empId":data,"status":this.statusvalue}

    this.api.updateStatus(accept).subscribe(

      (response:any)=>

      {

        if (response.status=="success") {

          console.log(response)

          console.log(response.status)

           this.api.leavePending(accept).subscribe(
            (response:any)=>{
              console.log(response)
            }
           )  
          alert("success")

         

        } else {

          alert("failed")

         

        }

      }



    )

  }

}
