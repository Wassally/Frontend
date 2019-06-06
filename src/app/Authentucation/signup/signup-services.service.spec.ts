import { TestBed } from '@angular/core/testing';

import { SignupServicesService } from './signup-services.service';

describe('SignupServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SignupServicesService = TestBed.get(SignupServicesService);
    expect(service).toBeTruthy();
  });
});
