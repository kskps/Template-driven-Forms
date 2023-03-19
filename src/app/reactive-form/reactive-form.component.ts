import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  userForm!: FormGroup;
  user: any = [''];
  public errorMsg = ['']
  countryList: any = ['India', 'USA', 'AUS']
  // userData: User = {
  //   userName: '',
  //   email: '',
  //   password: '',
  //   address1: '',
  //   address2: '',
  //   city: '',
  //   country: ''
  // }
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }
  initializeForm() {
    this.userForm = this.fb.group({
      userName: ['', Validators.required],
      email: ['', Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")],
      password: ['', Validators.minLength(4)],
      address1: ['', Validators.required],
      address2: [''],
      city: ['', Validators.required],
      country: ['', Validators.required],
      mobileNo: this.fb.group({
        mobile: ['', Validators.required],
        home: ['']
      }),
    })
  }
  get mobileNo() {
    return this.userForm.get('mobileNo') as FormControl;
  }
  submit() {
    if (this.userForm.invalid) {
      if (this.userForm.value.userName === null || this.userForm.value.userName === undefined || this.userForm.value.userName === "") {
        this.errorMsg.push('Please Enter Username');
      }
      if (this.userForm.value.email === null || this.userForm.value.email === undefined || this.userForm.value.userName === "") {
        this.errorMsg.push('Please Enter Email');
      }
      if (this.userForm.value.address1 === null || this.userForm.value.address1 === undefined || this.userForm.value.userName === "") {
        this.errorMsg.push('Please Enter Address');
      }
      if (this.userForm.value.city === null || this.userForm.value.city === undefined || this.userForm.value.userName === "") {
        this.errorMsg.push('Please Enter City');
      }
      if (this.userForm.value.country === null || this.userForm.value.country === undefined || this.userForm.value.userName === "") {
        this.errorMsg.push('Please Enter Country');
      }
      if (this.userForm.value.mobile === null || this.userForm.value.mobile === undefined || this.userForm.value.userName === "") {
        this.errorMsg.push('Please Enter Mobile');
      }
    }
    else {
      this.user.push(this.userForm);
    }
    // this.userData = {
    //   userName: '',
    //   email: '',
    //   password: '',
    //   address1: '',
    //   address2: '',
    //   city: '',
    //   country: ''
    // };
    // this.userData.userName = this.userForm.value.userName;
    // this.userData.email = this.userForm.value.email;
    // this.userData.password = this.userForm.value.password;
    // this.userData.address1 = this.userForm.value.address1;
    // this.userData.address2 = this.userForm.value.address2;
    // this.userData.city = this.userForm.value.city;
    // this.userData.country = this.userForm.value.country;
  }
}
