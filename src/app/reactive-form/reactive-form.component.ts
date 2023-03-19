import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  userForm!: FormGroup;
  countryList: any = ['India', 'USA', 'AUS']
  userData: User = {
    userName: '',
    email: '',
    password: '',
    address1: '',
    address2: '',
    city: '',
    country: ''
  }
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }
  initializeForm() {
    this.userForm = this.fb.group({
      userName: ['', Validators.required],
      email: ['', Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$]')],
      password: ['', Validators.minLength(4)],
      address1: ['', Validators.required],
      address2: [''],
      city: ['', Validators.required],
      country: ['', Validators.required]
    })
  }
  submit() {
    this.userData = {
      userName: '',
      email: '',
      password: '',
      address1: '',
      address2: '',
      city: '',
      country: ''
    };
    this.userData.userName = this.userForm.value.userName;
    this.userData.email = this.userForm.value.email;
    this.userData.password = this.userForm.value.password;
    this.userData.address1 = this.userForm.value.address1;
    this.userData.address2 = this.userForm.value.address2;
    this.userData.city = this.userForm.value.city;
    this.userData.country = this.userForm.value.country;
    console.log(this.userData);

  }
}
