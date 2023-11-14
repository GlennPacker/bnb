import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import Accommodation from '../../models/Accommodation';
import { accommodationListResolver } from './accommodationList.resolver';

describe('accommodationResolver', () => {
  const executeResolver: ResolveFn<Accommodation[]> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => accommodationListResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
