import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingNavbarComponent } from './landing-navbar.component';

describe('LandingNavbarComponent', () => {
  let component: LandingNavbarComponent;
  let fixture: ComponentFixture<LandingNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
