import { TestBed } from '@angular/core/testing';

import { ClientPackagesService } from './client-packages.service';

describe('ClientPackagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClientPackagesService = TestBed.get(ClientPackagesService);
    expect(service).toBeTruthy();
  });
});
