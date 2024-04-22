import { TestBed } from '@angular/core/testing';

import { GetStartedFormService } from './get-started-form.service';

describe('GetStartedFormService', () => {
  let service: GetStartedFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetStartedFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
