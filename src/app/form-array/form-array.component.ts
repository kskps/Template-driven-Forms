import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent implements OnInit {
  profileForm!:FormGroup;
  constructor(
    private fb : FormBuilder
  ) { }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      name:['', Validators.required],
      address:['', Validators.required],
      skills: this.fb.array([
        this.fb.control('')
      ])
    })
  }
  get skills() {
    return this.profileForm.get('skills') as FormArray;
  }
  addSkills() {
    this.skills.push(this.fb.control(''));
  }
  delete(index: number) {
    this.skills.removeAt(index);
  }
}
