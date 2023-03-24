import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-data',
  templateUrl: './template-data.component.html',
  styleUrls: ['./template-data.component.css']
})
export class TemplateDataComponent implements OnInit {

  @Input() userData:any
  constructor() { }

  ngOnInit(): void {
  }

}
