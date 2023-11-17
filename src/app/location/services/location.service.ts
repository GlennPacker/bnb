import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { activityIcon } from 'src/app/core/models/activityIcons';
import Location from '../models/location';

const data: Location[] = [{
  id: 1,
  alt: '',
  src: '/assets/Lac De Saint Pardoux - sky line.jpg',
  title: 'Lake Saint Pardoux',
  facilities: [
    activityIcon.beach,
    activityIcon.cycling,
    activityIcon.foil,
    activityIcon.hiking,
    activityIcon.kayaking,
    activityIcon.parking,
    activityIcon.pets,
    activityIcon.sup,
    activityIcon.swimming,
    activityIcon.views,
    activityIcon.wifi,
    activityIcon.windsurfing,
    activityIcon.fishing,
  ],
  paras: [
    'Lake Saint Pardoux 20mins away and has a beach',
    'The lake is the is the largest in the local area and great for swimming, all watersports, hiking and cycling.'
  ]
}, {
  id: 2,
  alt: 'Gartemp near Bersac Sur Ravailier',
  src: '/assets/Gartemp near Bersac Sur Ravailier.jpg',
  title: 'Gartempe',
  facilities: [
    activityIcon.kayaking,
    activityIcon.hiking,
    activityIcon.parking,
    activityIcon.pets,
    activityIcon.views,
  ],
  paras: [
    `The Gartempe is 7 mins away from the Chambre D'Hôte.`,
    'The river is 205km long and offers hiking, nature trails and white water activities (subject to rain).'
  ]
}, {
  id: 3,
  alt: '',
  src: '/assets/gartempe the viaduct.jpg',
  title: 'Viaduct',
  facilities: [
    activityIcon.hiking,
    activityIcon.parking,
    activityIcon.pets,
    activityIcon.views,
  ],
  paras: [

  ]
}, {
  id: 4,
  alt: 'Le Taurion at Châtelus-le-Marcheix',
  src: '/assets/le Marcheix le Taurion river.jpg',
  title: 'Châtelus-le-Marcheix',
  facilities: [
    activityIcon.beach,
    activityIcon.foil,
    activityIcon.kayaking,
    activityIcon.parking,
    activityIcon.sup,
    activityIcon.swimming,
    activityIcon.views,
    activityIcon.windsurfing
  ],
  paras: [
    `The Châtelus-le-Marcheix is 30 mins away from Vue de Vallon and is on the pilgrimage path of the Way of St. James.`,
    'This reservoir and beach offers water sports and great views.'
  ]
}, {
  id: 5,
  alt: '',
  src: '/assets/gartempe the viaduct.jpg',
  title: 'Viaduct',
  facilities: [
    activityIcon.hiking,
    activityIcon.parking,
    activityIcon.pets,
    activityIcon.views,
  ],
  paras: [

  ]
}];

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  public get(): Observable<Location[]> {
    return of(data).pipe(
      tap(data => console.log('Locations:', JSON.stringify(data))),
    );
  }
}
