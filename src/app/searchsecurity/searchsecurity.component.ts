import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-searchsecurity',
  templateUrl: './searchsecurity.component.html',
  styleUrls: ['./searchsecurity.component.css']
})
export class SearchsecurityComponent {
  constructor(private api:ApiService){}

  scode=""

  searchsecurity:any = []

  readValue=()=>

  {

    let data:any={

    "scode":this.scode}

    console.log(data)

    this.api.searchsecurity(data).subscribe(

      (response:any)=>{

        console.log(response)

        if (response.length==0) {

          alert("invalide security details")

         

        } else {

          this.searchsecurity = response

        }

      }

    )

  }
  deleteBtnclick=(id:any)=>{
    let data:any={"id":id}
    this.api.deletesecurity(data).subscribe(
      (response:any)=>{
        console.log(response)
        if(response.status=="success"){
          alert("succesfully deleted")
          this.searchsecurity=[]
          
        }
        else{
          alert("invalid input")
        }
      }
    )
  }

}
