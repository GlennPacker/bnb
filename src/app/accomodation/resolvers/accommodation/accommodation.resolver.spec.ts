import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import Accommodation from '../../models/Accommodation';
import { accommodationResolver } from './accommodation.resolver';

describe('accommodationResolver', () => {
  const executeResolver: ResolveFn<Accommodation> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => accommodationResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
