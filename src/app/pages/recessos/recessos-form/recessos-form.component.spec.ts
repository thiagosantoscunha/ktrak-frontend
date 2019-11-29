import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecessosFormComponent } from './recessos-form.component';

describe('RecessosFormComponent', () => {
  let component: RecessosFormComponent;
  let fixture: ComponentFixture<RecessosFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecessosFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecessosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
