import { Component, OnInit, Input } from '@angular/core';

export class DataTableModel {
  key: number;
  type: string;
  title: string;
  label: string;
}

export interface DataTableRender {
  getModel(): DataTableModel;
}

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  @Input()
  public data: DataTableRender;

  public model: DataTableModel;

  constructor() {
    if (this.data) {
      this.model = this.data.getModel();
    }
  }

  ngOnInit() {
  }

}
