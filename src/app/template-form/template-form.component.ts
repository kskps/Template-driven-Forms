import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  userData:any = [] ;
 public user={
  "email":'',
  "password":'',
  "address1":'',
  "address2":'',
  "city":'',
  "country":'',
 };
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(myForm:any) {
    this.userData.push(myForm.value)
   console.log(this.user);
  }
}

