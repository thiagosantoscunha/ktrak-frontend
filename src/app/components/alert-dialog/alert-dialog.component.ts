import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable, of } from 'rxjs';

export enum AlertType {
  SUCCESS, DANGER, WARNING, INFO
}

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.scss']
})
export class AlertDialogComponent implements OnInit {

  @Input()
  public show = false;
  @Input() public title: string;
  @Input() public contentBody: string;
  @Input() public confirmationMode = false;
  @Input() public type: string;
  @Output() public isConfirmed: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  public accept(): void {
    this.closeDialog();
    this.isConfirmed.emit(true);
  }

  public decline(): void {
    this.closeDialog();
    this.isConfirmed.emit(false);
  }

  public openDialog(): void {
    this.show = true;
  }

  public closeDialog(): void {
    this.show = false;
  }

  build(title: string, body: string, type: string, mode: boolean = false) {
    this.confirmationMode = mode;
    this.title = title;
    this.contentBody = body;
    this.type = type;
  }

}
