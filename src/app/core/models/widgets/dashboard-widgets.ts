import { ProgressWidgetRender, ProgressWidget } from 'src/app/components/widgets/progress-widget/progress-widget.component';

export class BreakfastWidget implements ProgressWidgetRender {
  getModel(): ProgressWidget {
    const widget: ProgressWidget = new ProgressWidget();
    widget.title = 'Café da manhã';
    widget.quantity = 60;
    widget.statusProgress = 80;
    widget.total = 100;
    widget.color = 'red';
    return widget;
  }
}

export class LunchWidget implements ProgressWidgetRender {
  getModel(): ProgressWidget {
    const widget: ProgressWidget = new ProgressWidget();
    widget.title = 'Almoço';
    widget.quantity = 32;
    widget.statusProgress = 80;
    widget.total = 100;
    widget.color = 'blue';
    return widget;
  }
}
export class SnackWidget implements ProgressWidgetRender {
  getModel(): ProgressWidget {
    const widget: ProgressWidget = new ProgressWidget();
    widget.title = 'Janta';
    widget.quantity = 32;
    widget.statusProgress = 80;
    widget.total = 100;
    widget.color = 'green';
    return widget;
  }
}
