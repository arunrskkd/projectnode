import { TestBed, inject } from '@angular/core/testing';

import { ColorservService } from './colorserv.service';

describe('ColorservService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ColorservService]
    });
  });

  it('should be created', inject([ColorservService], (service: ColorservService) => {
    expect(service).toBeTruthy();
  }));
});
