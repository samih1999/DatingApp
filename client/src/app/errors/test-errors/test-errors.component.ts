import { HttpClient, HttpRequest } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-errors',
  templateUrl: './test-errors.component.html',
  styleUrls: ['./test-errors.component.css']
})
export class TestErrorsComponent implements OnInit {
baseUrl='https://localhost:5001/api/';
validationErrors: string[]=[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  get404Erorr(){
    this.http.get(this.baseUrl +'buggy/notfound').subscribe(Response=>{
      console.log(Response);
    },
    error=>{
      console.log(error); } ) }

get400Erorr(){
    this.http.get(this.baseUrl +'buggy/bad-request').subscribe(Response=>{
      console.log(Response);
    },
    error=>{
      console.log(error); } ) }

      get500Erorr(){
        this.http.get(this.baseUrl +'buggy/server-error').subscribe(Response=>{
          console.log(Response);
        },
        error=>{
          console.log(error); } ) }
          get401Erorr(){
            this.http.get(this.baseUrl +'buggy/auth').subscribe(Response=>{
              console.log(Response);
            },
            error=>{
              console.log(error); } ) }

              get400ValidationErorr(){
                this.http.post(this.baseUrl +'account/register',{}).subscribe(Response=>{
                  console.log(Response);
                },
                error=>{
                  console.log(error);
                this.validationErrors=error; } ) }
}
