import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  userData:any =[]
  public user = {
    email: '',
    password: '',
    address1: '',
    address2: '',
    city: '',
    country: '',
  };
  constructor() { }

  ngOnInit(): void {
  }
  submit($event:any){
    this.userData.push($event);
    this.user = {
      email: '',
      password: '',
      address1: '',
      address2: '',
      city: '',
      country: '',
    };
    // console.log($event);
  }
}
