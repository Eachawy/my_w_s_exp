import { TestBed, inject } from '@angular/core/testing';

import { AuthonService } from './authon.service';

describe('AuthonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthonService]
    });
  });

  it('should be created', inject([AuthonService], (service: AuthonService) => {
    expect(service).toBeTruthy();
  }));
});
