import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() errorMsg:any
  constructor(
    private activeModal:NgbActiveModal
  ) { }

  ngOnInit(): void {
  }
  close(){
    this.activeModal.close();
  }
}
