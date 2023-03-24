import { Component, Input, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css'],
})
export class TemplateFormComponent implements OnInit {
  // userData: any = [];
  @Input() user:any;
  @Output() submit :  EventEmitter<any> = new EventEmitter()
  constructor() {}

  ngOnInit(): void {}
  onSubmit(myForm: any) {
    // this.userData.push(myForm.value);
    this.submit.emit(myForm.value)
    //  console.log(myForm.value);
  }
}
