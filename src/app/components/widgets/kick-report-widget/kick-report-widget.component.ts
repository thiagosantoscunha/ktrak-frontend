import { Component, OnInit, Input } from '@angular/core';

export class KickReportWidget {
  title: string;
  quantity: number;
  icon: string;
  total: number;
  color: string;
}

export interface KickReportWidgetRender {
  getModel(): KickReportWidget;
}

@Component({
  selector: 'app-kick-report-widget',
  templateUrl: './kick-report-widget.component.html',
  styleUrls: ['./kick-report-widget.component.scss']
})
export class KickReportWidgetComponent implements OnInit {

  @Input()
  public data: KickReportWidgetRender;

  public model: KickReportWidget;

  constructor() {
  }

  ngOnInit() {
    this.model = this.data.getModel();
  }

}
