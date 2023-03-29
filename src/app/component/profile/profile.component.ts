import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 @Input() user: any
 @Output() eventEmiter = new EventEmitter ()
  constructor() { }

  ngOnInit(): void {
  }
onClick(item:any) {
  // this.eventEmiter.emit($event)
  this.eventEmiter.emit({
    action: 'EDIT',
    id:item.id,
 })
}
delete(item:any) {
  // this.eventDelete.emit(event)
  this.eventEmiter.emit({
    action: 'DELETE',
    id:item.id,
 })
}
}
