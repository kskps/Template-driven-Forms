import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 @Input() user: any
 @Output() eventEmiter = new EventEmitter ()
 @Output() eventDelete = new EventEmitter ()
  constructor() { }

  ngOnInit(): void {
  }
onClick($event:any) {
  this.eventEmiter.emit($event)
}
delete(event:any) {
  this.eventDelete.emit(event)
}
}
