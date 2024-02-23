import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import Room from '../../models/room';
import { RoomService } from '../../services/room/room.service';

export const RoomResolver: ResolveFn<Room> = route => {
  return inject(RoomService).get(+route.paramMap.get('id'));
};
