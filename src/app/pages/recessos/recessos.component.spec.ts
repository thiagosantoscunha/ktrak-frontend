import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecessosComponent } from './recessos.component';

describe('RecessosComponent', () => {
  let component: RecessosComponent;
  let fixture: ComponentFixture<RecessosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecessosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecessosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
