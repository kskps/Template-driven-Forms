import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Input() userForm: any;
  @Input() enableUpdate:any;
  @Output() onSubmit = new EventEmitter();
  @Output() onUpdate = new EventEmitter();
  public user: any[] = [];
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
  constructor() {}

  ngOnInit(): void {

  }
  get mobileNo() {
    return this.userForm.get('mobileNo') as FormControl;
  }

  submit() {
  this.onSubmit.emit(this.userForm)
  }
  update () {
  this.onUpdate.emit(this.userForm)
  }
}
