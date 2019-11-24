import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface ModalRender {
  title: string;
  description: string;
  label: string;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() public show: boolean;
  @Input() public title: string;
  @Input() public description: string;

  @Output()
  public closed: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
    this.show = false;
  }

  build(modalRender: ModalRender = null): void {
    this.title = modalRender.title;
    this.description = modalRender.description;
  }

  ngOnInit() {
  }

  toggleShow() {
    this.show = !this.show;
    this.closed.emit(this.show);
  }

  open() {
    this.show = true;
  }

  close() {
    this.show = false;
  }

}
