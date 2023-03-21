import { Component, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  userForm!: FormGroup;
  public user: any[] =[];
  public errorMsg = [''];
  countryList: any = ['India', 'USA', 'AUS'];
  // userData: User = {
  //   userName: '',
  //   email: '',
  //   password: '',
  //   address1: '',
  //   address2: '',
  //   city: '',
  //   country: ''
  // }
  constructor(private fb: FormBuilder,
    private ngbModel:NgbModal) {}

  ngOnInit(): void {
    this.initializeForm();
    console.log(this.user);
  }
  initializeForm() {
    this.userForm = this.fb.group({
      userName: ['', Validators.required],
      email: [
        '',
        [Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),Validators.required],
      ],
      password: ['', [Validators.minLength(4),Validators.required]],
      address1: ['', Validators.required],
      address2: [''],
      city: ['', Validators.required],
      country: ['', Validators.required],
      mobileNo: this.fb.group({
        mobile: ['', Validators.required],
        home: [''],
      }),
    });
  }
  get mobileNo() {
    return this.userForm.get('mobileNo') as FormControl;
  }
  trim() {
    this.userForm
      .get('userName')
      ?.patchValue(
        this.userForm.get('userName') !== null
          ? this.userForm.get('userName')?.value.trim()
          : this.userForm.get('userName')?.value.trim()
      );
    this.userForm
      .get('email')
      ?.patchValue(
        this.userForm.get('email') !== null
          ? this.userForm.get('email')?.value.trim()
          : this.userForm.get('email')?.value.trim()
      );
    this.userForm
      .get('address1')
      ?.patchValue(
        this.userForm.get('address1') !== null
          ? this.userForm.get('address1')?.value.trim()
          : this.userForm.get('address1')?.value.trim()
      );
    this.userForm
      .get('address2')
      ?.patchValue(
        this.userForm.get('address2') !== null
          ? this.userForm.get('address2')?.value.trim()
          : this.userForm.get('address2')?.value.trim()
      );
    this.userForm
      .get('city')
      ?.patchValue(
        this.userForm.get('city') !== null
          ? this.userForm.get('city')?.value.trim()
          : this.userForm.get('city')?.value.trim()
      );
    this.userForm
      .get('country')
      ?.patchValue(
        this.userForm.get('country') !== null
          ? this.userForm.get('country')?.value.trim()
          : this.userForm.get('country')?.value.trim()
      );
    this.userForm
      .get('password')
      ?.patchValue(
        this.userForm.get('password') !== null
          ? this.userForm.get('password')?.value.trim()
          : this.userForm.get('password')?.value.trim()
      );
    // this.userForm.value.userName.patchValue(
    //   this.userForm.value.userName !== null
    //                       ? this.userForm.value.userName.trim()
    //                       : this.userForm.value.userName.value
    //               );
  }
  submit() {
    this.trim();
    if (this.userForm.invalid) {
      this.errorMsg = [''];
      if (
        this.userForm.value.userName === null ||
        this.userForm.value.userName === undefined ||
        this.userForm.value.userName === ''
      ) {
        this.errorMsg.push('Please Enter Username');
      }
      if (
        this.userForm.value.email === null ||
        this.userForm.value.email === undefined ||
        this.userForm.value.email === ''
      ) {
        this.errorMsg.push('Please Enter Email');
      }
      if (
        this.userForm.value.password === null ||
        this.userForm.value.password === undefined ||
        this.userForm.value.password === ''
      ) {
        this.errorMsg.push('Please Enter Password with Min 4 Characters');
      }
      if (
        this.userForm.value.address1 === null ||
        this.userForm.value.address1 === undefined ||
        this.userForm.value.address1 === ''
      ) {
        this.errorMsg.push('Please Enter Address');
      }
      if (
        this.userForm.value.city === null ||
        this.userForm.value.city === undefined ||
        this.userForm.value.city === ''
      ) {
        this.errorMsg.push('Please Enter City');
      }
      if (
        this.userForm.value.country === null ||
        this.userForm.value.country === undefined ||
        this.userForm.value.country === ''
      ) {
        this.errorMsg.push('Please Enter Country');
      }
      if (
        this.userForm.value.mobile === null ||
        this.userForm.value.mobile === undefined ||
        this.userForm.value.mobile === ''
      ) {
        this.errorMsg.push('Please Enter Mobile');
      }
      // console.log(this.errorMsg);
      if (this.errorMsg !== null) {
        const modalRef = this.ngbModel.open(ModalComponent, {
          backdrop:false,
          keyboard: false
        });
        modalRef.componentInstance.errorMsg = this.errorMsg
      }
    } else {
      this.errorMsg = [''];
      this.user.push(this.userForm.value);
      console.log(this.user)
      // this.userForm.setValue({
      //   userName: '',
      //   email: '',
      //   password: '',
      //   address1: '',
      //   address2: '',
      //   city: '',
      //   country: '',
      //   mobileNo: {
      //     mobile: '',
      //     home: '',
      //   },
      // });
      // this.router.navigate(['/profile']);
      // setTimeout(() => {
      //   this.userForm.reset();
      // }, 1000);
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
