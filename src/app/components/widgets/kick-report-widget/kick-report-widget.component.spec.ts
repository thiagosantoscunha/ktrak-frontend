import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KickReportWidgetComponent } from './kick-report-widget.component';

describe('KickReportWidgetComponent', () => {
  let component: KickReportWidgetComponent;
  let fixture: ComponentFixture<KickReportWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KickReportWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KickReportWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
