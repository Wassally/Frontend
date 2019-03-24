import { TestBed } from '@angular/core/testing';

import { SigninAuthService } from './signin-auth.service';

describe('SigninAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SigninAuthService = TestBed.get(SigninAuthService);
    expect(service).toBeTruthy();
  });
});
