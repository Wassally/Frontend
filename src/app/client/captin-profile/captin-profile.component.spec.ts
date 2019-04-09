import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptinProfileComponent } from './captin-profile.component';

describe('CaptinProfileComponent', () => {
  let component: CaptinProfileComponent;
  let fixture: ComponentFixture<CaptinProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaptinProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptinProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
