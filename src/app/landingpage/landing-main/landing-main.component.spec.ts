import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingMainComponent } from './landing-main.component';

describe('LandingMainComponent', () => {
  let component: LandingMainComponent;
  let fixture: ComponentFixture<LandingMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
