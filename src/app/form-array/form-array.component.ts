import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../component/modal/modal.component';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent implements OnInit {
  profileForm!:FormGroup;
  errorMsg:any =[];
  profileData:any=[];
  constructor(
    private fb : FormBuilder,
    private ngbModal:NgbModal
  ) { }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      name:['', Validators.required],
      address:['', Validators.required],
      skills: this.fb.array([])
    })
  }
  get skills() {
    return this.profileForm.get('skills') as FormArray;
  }
  addSkills() {
    this.skills.push(this.newSkill());
  }
  newSkill(): FormGroup {
    return this.fb.group({
      skill: ['', Validators.required]
    })
 }
  delete(index: number) {
    this.skills.removeAt(index);
  }
  trim(){
    this.profileForm
    .get('name')
    ?.patchValue(
      this.profileForm.get('name')?.value !== null
        ? this.profileForm.get('name')?.value.trim()
        : this.profileForm.get('name')?.value
    );
    this.profileForm.get('address')
    ?.patchValue(
      this.profileForm.get('address')?.value !== null
        ? this.profileForm.get('address')?.value.trim()
        : this.profileForm.get('address')?.value
    );
    // this.profileForm.get('skills')
    // ?.patchValue(
    //   this.profileForm.get('skills')?.value !== null
    //     ? this.profileForm.get('skills')?.value.trim()
    //     : this.profileForm.get('skills')?.value
    // );
  }
  submit(){
    if (this.profileForm.invalid) {
    this.errorMsg= [''];
      if (
        this.profileForm.value.name === '' ||
        this.profileForm.value.name === null ||
        this.profileForm.value.name === undefined
      ) {
        this.errorMsg.push('Please Enter a Name');
      }
      if (
        this.profileForm.value.address === '' ||
        this.profileForm.value.address === null ||
        this.profileForm.value.address === undefined
      ) {
        this.errorMsg.push('Please Enter Your Address');
      }
      if (
        this.profileForm.get('skills')?.get('skill')?.value.skill === '' ||
        this.profileForm.get('skills')?.get('skill')?.value.skill === null ||
        this.profileForm.get('skills')?.get('skill')?.value.skill === undefined
      ) {
        this.errorMsg.push('Please Enter Your Skills');
      }
      if (this.errorMsg !== null) {
        const modalRef = this.ngbModal.open(ModalComponent, {
          backdrop: false,
          keyboard: false,
        });
        modalRef.componentInstance.errorMsg = this.errorMsg;
      }
    } else {
      this.trim();
      this.profileData.push(this.profileForm.value);
      this.profileForm.reset();
    }
  }
}
