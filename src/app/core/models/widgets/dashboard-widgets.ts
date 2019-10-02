import { ProgressWidgetRender, ProgressWidget } from 'src/app/components/widgets/progress-widget/progress-widget.component';
import { KickReportWidgetRender, KickReportWidget } from 'src/app/components/widgets/kick-report-widget/kick-report-widget.component';

export class BreakfastWidget implements KickReportWidgetRender {
  getModel(): KickReportWidget {
    const widget: KickReportWidget = new KickReportWidget();
    widget.title = 'Café da manhã';
    widget.quantity = 60;
    widget.icon = 'fas fa-coffee';
    widget.total = 100;
    widget.color = 'red';
    return widget;
  }
}

export class LunchWidget implements KickReportWidgetRender {
  getModel(): KickReportWidget {
    const widget: KickReportWidget = new KickReportWidget();
    widget.title = 'Almoço';
    widget.quantity = 32;
    widget.icon = 'fas fa-utensils';
    widget.total = 100;
    widget.color = 'blue';
    return widget;
  }
}
export class SnackWidget implements KickReportWidgetRender {
  getModel(): KickReportWidget {
    const widget: KickReportWidget = new KickReportWidget();
    widget.title = 'Janta';
    widget.quantity = 32;
    widget.icon = 'fas fa-hamburger';
    widget.total = 100;
    widget.color = 'skyblue';
    return widget;
  }
}
