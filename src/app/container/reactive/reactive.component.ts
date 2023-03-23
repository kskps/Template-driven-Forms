import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from 'src/app/component/modal/modal.component';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css'],
})
export class ReactiveComponent implements OnInit {
  userForm!: FormGroup;
  errorMsg: any = [];
  public user: any[] = [];
  constructor(private fb: FormBuilder, private ngbModal: NgbModal) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      userName: ['', Validators.required],
      email: [
        '',
        [
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
          Validators.required,
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
          ),
        ],
      ],
      address1: ['', Validators.required],
      address2: [''],
      city: ['', Validators.required],
      country: ['', [Validators.required]],
      mobileNo: this.fb.group({
        mobile: ['', [Validators.pattern('([0-9]).{9,}'), Validators.required]],
        home: [''],
      }),
    });
  }

  trim() {
    this.userForm
      .get('userName')
      ?.patchValue(
        this.userForm.get('userName')?.value !== null
          ? this.userForm.get('userName')?.value.trim()
          : this.userForm.get('userName')?.value
      );
    this.userForm
      .get('email')
      ?.patchValue(
        this.userForm.get('email')?.value !== null
          ? this.userForm.get('email')?.value.trim()
          : this.userForm.get('email')?.value
      );
    this.userForm
      .get('address1')
      ?.patchValue(
        this.userForm.get('address1')?.value !== null
          ? this.userForm.get('address1')?.value.trim()
          : this.userForm.get('address1')?.value
      );
    this.userForm
      .get('address2')
      ?.patchValue(
        this.userForm.get('address2')?.value !== null
          ? this.userForm.get('address2')?.value.trim()
          : this.userForm.get('address2')?.value
      );
    this.userForm
      .get('city')
      ?.patchValue(
        this.userForm.get('city')?.value !== null
          ? this.userForm.get('city')?.value.trim()
          : this.userForm.get('city')?.value
      );
    this.userForm
      .get('country')
      ?.patchValue(
        this.userForm.get('country')?.value !== null
          ? this.userForm.get('country')?.value.trim()
          : this.userForm.get('country')?.value
      );
    this.userForm
      .get('password')
      ?.patchValue(
        this.userForm.get('password')?.value !== null
          ? this.userForm.get('password')?.value.trim()
          : this.userForm.get('password')?.value
      );
    // this.userForm.value.userName.patchValue(
    //   this.userForm.value.userName !== null
    //                       ? this.userForm.value.userName.trim()
    //                       : this.userForm.value.userName.value
    //               );
  }

  onSubmit($event: any) {
    console.log($event);
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
        this.userForm.get('mobileNo')?.get('mobile')?.value === null ||
        this.userForm.get('mobileNo')?.get('mobile')?.value === undefined ||
        this.userForm.get('mobileNo')?.get('mobile')?.value === ''
      ) {
        this.errorMsg.push('Please Enter Mobile');
      }
      // console.log(this.errorMsg);
      if (this.errorMsg !== null) {
        const modalRef = this.ngbModal.open(ModalComponent, {
          backdrop: false,
          keyboard: false,
        });
        modalRef.componentInstance.errorMsg = this.errorMsg;
      }
    } else {
      this.errorMsg = [''];
      this.user.push(this.userForm.value);
      console.log(this.user);
      this.userForm.reset();
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
