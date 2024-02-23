import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import Room from '../../models/room';
import { RoomListResolver } from './roomList.resolver';

describe('RoomResolver', () => {
  const executeResolver: ResolveFn<Room[]> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => RoomListResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
