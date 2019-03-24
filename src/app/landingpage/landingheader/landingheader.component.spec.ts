import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingheaderComponent } from './landingheader.component';

describe('LandingheaderComponent', () => {
  let component: LandingheaderComponent;
  let fixture: ComponentFixture<LandingheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
