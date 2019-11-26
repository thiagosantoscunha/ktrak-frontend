import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QrpageComponent } from './qrpage.component';

describe('QrpageComponent', () => {
  let component: QrpageComponent;
  let fixture: ComponentFixture<QrpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
