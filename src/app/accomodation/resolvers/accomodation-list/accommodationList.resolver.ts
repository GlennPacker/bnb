import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import Accommodation from '../../models/Accommodation';
import { AccommodationService } from '../../services/accommodation/accommodation.service';

export const accommodationListResolver: ResolveFn<Accommodation[]> = () => {
  return inject(AccommodationService).getAll();
};
