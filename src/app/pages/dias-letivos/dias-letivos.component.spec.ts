import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiasLetivosComponent } from './dias-letivos.component';

describe('DiasLetivosComponent', () => {
  let component: DiasLetivosComponent;
  let fixture: ComponentFixture<DiasLetivosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiasLetivosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiasLetivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
