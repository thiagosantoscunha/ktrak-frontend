import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefeicaoListComponent } from './refeicao-list.component';

describe('RefeicaoListComponent', () => {
  let component: RefeicaoListComponent;
  let fixture: ComponentFixture<RefeicaoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefeicaoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefeicaoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
