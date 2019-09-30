import { Component, OnInit, Input } from '@angular/core';

export class ProgressWidget {
  title: string;
  quantity: number;
  statusProgress: number;
  total: number;
  color: string;
}

export interface ProgressWidgetRender {
  getModel(): ProgressWidget;
}

@Component({
  selector: 'app-progress-widget',
  templateUrl: './progress-widget.component.html',
  styleUrls: ['./progress-widget.component.scss']
})
export class ProgressWidgetComponent implements OnInit {

  @Input()
  public data: ProgressWidgetRender;

  public model: ProgressWidget;

  constructor() {
  }

  ngOnInit() {
    this.model = this.data.getModel();
  }

  public hasValue(value: any): boolean {
    return value !== null && value !== undefined;
  }

  public valueAsString(value: number): string {
    return value.toString();
  }



}
