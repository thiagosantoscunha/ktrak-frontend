import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderContentPageComponent } from './header-content-page.component';

describe('HeaderContentPageComponent', () => {
  let component: HeaderContentPageComponent;
  let fixture: ComponentFixture<HeaderContentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderContentPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderContentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
