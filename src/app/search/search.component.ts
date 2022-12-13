import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  constructor(private api:ApiService){}

  empcode=""

  readValues:any = []

  readValue=()=>

  {

    let data:any={

    "empcode":this.empcode}

    console.log(data)

    this.api.readValues(data).subscribe(

      (response:any)=>{

        console.log(response)

        if (response.length==0) {

          alert("invalide employee code")

         

        } else {

          this.readValues = response

        }

      }

    )

  }
  deleteBtnclick=(id:any)=>{
    let data:any={"id":id}
    this.api.deleteemployee(data).subscribe(
      (response:any)=>{
        console.log(response)
        if(response.status=="success"){
          alert("succesfully deleted")
          this.readValues=[]
          
        }
        else{
          alert("invalid input")
        }
      }
    )
  }

}
