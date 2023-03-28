import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { takeUntil } from 'rxjs';
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
  enableUpdate:boolean = false;
  constructor(private fb: FormBuilder, private ngbModal: NgbModal) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      id:0,
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
        home: ['', [Validators.pattern('([0-9]).{9,}'), Validators.required]],
      }),
    });
    this.valueChanges();
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

  containsSpecialChars(str:any) {
    const specialChars = `\`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`;

    const result = specialChars.split('').some(specialChar => {
      if (str.includes(specialChar)) {
        return true;
      }

      return false;
    });

    return result;
  }

  eventEmitter (users:any) {
const data = this.user.at(users)
// console.log(data);
this.enableUpdate = true ;
    this.userForm.patchValue({
      userName:data.userName,
      email:data.email,
      password:data.password,
      address1:data.address1,
      address2:data.address2,
      city:data.city,
      country:data.country,
    })
    this.userForm.get('mobileNo')?.patchValue({
      mobile:data.mobileNo.mobile,
      home:data.mobileNo.home
    })
  }

  onUpdate(userFormData:any) {

  }

eventDelete(event:any) {
  this.user.slice(event)
}

  onSubmit($event: any) {

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
        this.userForm.get('email')?.value &&
        !this.userForm.get('email')?.valid
      ) {
        this.errorMsg.push('Please Enter a Valid Email Address');
      }
      this.passwordValidation();
        if (
        !this.userForm.get('mobileNo')?.get('mobile')?.valid &&
        !this.userForm.get('mobileNo')?.get('home')?.value
      ) {
        if (
          this.userForm.get('mobileNo')?.get('mobile')?.value === null ||
          this.userForm.get('mobileNo')?.get('mobile')?.value === undefined ||
          this.userForm.get('mobileNo')?.get('mobile')?.value === ''
        ) {
          this.errorMsg.push('Please Enter Mobile');
        }
      }
      if (this.userForm.get('mobileNo')?.get('mobile')?.value) {
        if (
          this.userForm.get('mobileNo')?.get('mobile')?.value &&
          !this.userForm.get('mobileNo')?.get('mobile')?.valid
        ) {
          this.errorMsg.push('Please Enter a Valid Mobile Number');
        }
      }
      if (
        !this.userForm.get('mobileNo')?.get('home')?.valid &&
        !this.userForm.get('mobileNo')?.get('mobile')?.value
      ) {
        if (
          this.userForm.get('mobileNo')?.get('home')?.value === null ||
          this.userForm.get('mobileNo')?.get('home')?.value === undefined ||
          this.userForm.get('mobileNo')?.get('home')?.value === ''
        ) {
          this.errorMsg.push('Please Enter Home Number');
        }
      }
      if (this.userForm.get('mobileNo')?.get('home')?.value) {
        if (
          this.userForm.get('mobileNo')?.get('home')?.value &&
          !this.userForm.get('mobileNo')?.get('home')?.valid
        ) {
          this.errorMsg.push('Please Enter a Valid Home Number');
        }
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
      this.userForm.get('id')?.patchValue(this.userForm.value.id+1)

      // this.userForm.reset();
      this.userForm.patchValue({
        userName: '',
        email: '',
        password: '',
        address1: '',
        address2: '',
        city: '',
        country: '',
        mobileNo: {
          mobile: '',
          home: '',
        },
      });
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

  passwordValidation () {
    if (
      this.userForm.value.password === null ||
      this.userForm.value.password === undefined ||
      this.userForm.value.password === ''
    ) {
      this.errorMsg.push('Please Enter Password');
    } if (
      this.userForm.get('password')?.value &&
      this.userForm.get('password')?.value.toString().length < 9
    ) {
      this.errorMsg.push('Password required with min 9 Characters');
  } else if (!this.containsSpecialChars(this.userForm.value.password)) {
      this.errorMsg.push('Atleast 1 Special character Required in Password');
  }
  }

  valueChanges() {
    this.userForm
      .get('mobileNo')
      ?.get('mobile')
      ?.valueChanges.subscribe((cell) => {
        const work = this.userForm.get('mobileNo')?.get('home')?.value;
        if (cell && cell.toString().length === 10) {
          this.userForm.get('mobileNo')?.get('mobile')?.setErrors(null);
          if (work === null || work === 0 || work.toString().length === 0) {
            this.userForm.get('mobileNo')?.get('home')?.setErrors(null);
            this.userForm.get('mobileNo')?.get('home')?.setValidators([]);
          }
        } else {
          if (
            cell &&
            cell.toString().length > 0 &&
            cell.toString().length < 10
          ) {
            this.userForm
              .get('mobileNo')
              ?.get('mobile')
              ?.setErrors({ mask: true });
            if (
              work &&
              work.toString().length > 0 &&
              work.toString().length < 10
            ) {
              this.userForm
                .get('mobileNo')
                ?.get('home')
                ?.setErrors({ mask: true });
            } else {
              this.userForm.get('mobileNo')?.get('home')?.setErrors(null);
            }
          } else {
            this.userForm.get('mobileNo')?.get('mobile')?.setErrors(null);
          }
        }

        if (
          (cell === null || cell === 0 || cell.toString().length === 0) &&
          (work === null || work === 0 || work.toString().length === 0)
        ) {
          this.userForm
            .get('mobileNo')
            ?.get('mobile')
            ?.setValidators([Validators.required]);
          this.userForm
            .get('mobileNo')
            ?.get('home')
            ?.setValidators([Validators.required]);
          this.userForm
            .get('mobileNo')
            ?.get('mobile')
            ?.setErrors({ required: true });
          this.userForm
            .get('mobileNo')
            ?.get('home')
            ?.setErrors({ required: true });
        }
      });
    this.userForm
      .get('mobileNo')
      ?.get('home')
      ?.valueChanges.subscribe((cell) => {
        const work = this.userForm.get('mobileNo')?.get('mobile')?.value;
        if (cell && cell.toString().length === 10) {
          this.userForm.get('mobileNo')?.get('home')?.setErrors(null);
          if (work === null || work === 0 || work.toString().length === 0) {
            this.userForm.get('mobileNo')?.get('mobile')?.setErrors(null);
            this.userForm.get('mobileNo')?.get('mobile')?.setValidators([]);
          }
        } else {
          if (
            cell &&
            cell.toString().length > 0 &&
            cell.toString().length < 10
          ) {
            this.userForm
              .get('mobileNo')
              ?.get('home')
              ?.setErrors({ mask: true });
            if (
              work &&
              work.toString().length > 0 &&
              work.toString().length < 10
            ) {
              this.userForm
                .get('mobileNo')
                ?.get('mobile')
                ?.setErrors({ mask: true });
            } else {
              this.userForm.get('mobileNo')?.get('mobile')?.setErrors(null);
            }
          } else {
            this.userForm.get('mobileNo')?.get('home')?.setErrors(null);
          }
        }

        if (
          (cell === null || cell === 0 || cell.toString().length === 0) &&
          (work === null || work === 0 || work.toString().length === 0)
        ) {
          this.userForm
            .get('mobileNo')
            ?.get('home')
            ?.setValidators([Validators.required]);
          this.userForm
            .get('mobileNo')
            ?.get('mobile')
            ?.setValidators([Validators.required]);
          this.userForm
            .get('mobileNo')
            ?.get('home')
            ?.setErrors({ required: true });
          this.userForm
            .get('mobileNo')
            ?.get('mobile')
            ?.setErrors({ required: true });
        }
      });
  }
}
