import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-listblog',
  templateUrl: './listblog.component.html',
  styleUrls: ['./listblog.component.css']
})
export class ListblogComponent implements OnInit {
Details;
  constructor(public activatedRoute:ActivatedRoute,public http:HttpClient,public router:Router) {
    this.Details= new FormGroup({
      'FirstName':new FormControl(),
      'LastName' : new FormControl(),
      'Email' :new FormControl(),
     
    })
   }

  ngOnInit() {
    this.http.get(`http://5d1e0d063374890014f00c26.mockapi.io/form/${this.activatedRoute.snapshot.paramMap.get('id')}`)
    .toPromise()
    .then((response:any)=>{
      this.Details.setValue({
        'FirstName' : response.FirstName,
        'LastName' : response.LastName,
        'Email' : response.Email,
      })
    },(error)=>{
      console.log(error);
    })  
  }
  

  PostBlog()
  {
    this.http.put(`http://5d1e0d063374890014f00c26.mockapi.io/form/${this.activatedRoute.snapshot.paramMap.get('id')}`,this.Details.value)
    .toPromise()
    .then((response)=> {
      this.router.navigate(["viewblog"]);

    },(error)=>{
      console.log(error);
    })

  }

}
