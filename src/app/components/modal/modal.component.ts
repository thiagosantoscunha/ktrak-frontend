import { Component, OnInit, Input } from '@angular/core';

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
  }

  open() {
    this.show = true;
    console.log(this.show);
  }

  close() {
    this.show = false;
    console.log(this.show);
  }

}
