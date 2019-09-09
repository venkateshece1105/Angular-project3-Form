import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-viewblog',
  templateUrl: './viewblog.component.html',
  styleUrls: ['./viewblog.component.css']
})
export class ViewblogComponent implements OnInit {
Details;
  constructor( public activatedRoute:ActivatedRoute, public http:HttpClient,public router:Router) { }

  ngOnInit() {
    this.LoadData();
    }
    LoadData(){
    this.http.get('http://5d1e0d063374890014f00c26.mockapi.io/form')
    .toPromise()
    .then((response)=>{
      this.Details=response;
    },(error)=>{
      console.log(error);
    } )
  }

  deleteBlog(id)
  {
    let result=confirm("Are u sure wants to delete?")
    if(result==true){
    this.http.delete(`http://5d1e0d063374890014f00c26.mockapi.io/form/${id}`)
    .toPromise()
    .then((response)=>
    {
this.Details=response;
this.LoadData();
    },(error)=>
    {
      console.log(error);
    })
  }
}

}
