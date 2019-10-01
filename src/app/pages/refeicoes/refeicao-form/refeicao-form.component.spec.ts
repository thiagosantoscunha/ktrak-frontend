import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefeicaoFormComponent } from './refeicao-form.component';

describe('RefeicaoFormComponent', () => {
  let component: RefeicaoFormComponent;
  let fixture: ComponentFixture<RefeicaoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefeicaoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefeicaoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
