import { Component, OnInit, Input, AfterViewInit, OnChanges, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit, OnChanges, AfterViewInit {

  @ViewChild('tableElement', { static: true })
  public tableElement: HTMLElement;

  constructor() {
  }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

}
