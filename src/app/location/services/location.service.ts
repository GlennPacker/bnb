import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
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
  alt: 'Gartempe near Bersac Sur Ravailier',
  src: '/assets/Gartempe near Bersac Sur Ravailier.jpg',
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
  title: 'Viaduc de Rocherolles',
  facilities: [
    activityIcon.kayaking,
    activityIcon.hiking,
    activityIcon.parking,
    activityIcon.pets,
    activityIcon.views,
  ],
  paras: [
    `The is 7 mins drive and a short walk along the Gartempe.`,
    'This spot is great for the views, hiking, nature trails and white water activities (subject to rain).'
  ]
}, {
  id: 4,
  alt: 'Bessines sur Gartempe',
  src: '/assets/Bessines sur Gartempe.jpg',
  title: 'Bessines sur Gartempe',
  facilities: [
    activityIcon.cycling,
    activityIcon.coffee,
    activityIcon.bar,
    activityIcon.boulangerie,
    activityIcon.parking,
    activityIcon.restaurant,
    activityIcon.shopping,
    activityIcon.localTowns,
    activityIcon.atm
  ],
  paras: [
    'The town of Bessines sur Gartempe is 8mins drive away and has a local market, 2 supermarkets, a couple of bars and all the essentials.'
  ]
}, {
  id: 5,
  alt: 'Etang de Sagnat',
  src: '/assets/Etang de Sagnat.jpg',
  title: 'Etang de Sagnat',
  facilities: [
    activityIcon.bar,
    activityIcon.beach,
    activityIcon.basketball,
    activityIcon.coffee,
    activityIcon.cycling,
    activityIcon.fishing,
    activityIcon.hiking,
    activityIcon.parking,
    activityIcon.pets,
    activityIcon.restaurant,
    activityIcon.swimming,
    activityIcon.views,
  ],
  paras: [
    ``
  ]
}, {
  id: 6,
  alt: `Lac du pont à l'Age`,
  src: '/assets/Lac du pont à l’Age.jpg',
  title: `Lac du pont à l'Age`,
  facilities: [
    activityIcon.cycling,
    activityIcon.fishing,
    activityIcon.hiking,
    activityIcon.kayaking,
    activityIcon.parking,
    activityIcon.pets,
    activityIcon.views,
  ],
  paras: [
    `Lac du pont à l'Age is 8mins away from Vue de Vallon and is our closest big lake.`,
    `It is a great spot for hiking and taking in the views.`
  ]
}, {
  id: 7,
  alt: `Saint Sulpice Laurière – Bois des Echelles`,
  src: '/assets/Saint Sulpice Laurière – Bois des Echelles.jpg',
  title: `Bois des Echelles`,
  facilities: [
    activityIcon.hiking,
    activityIcon.paragliding,
    activityIcon.parking,
    activityIcon.pets,
    activityIcon.views,
  ],
  paras: [
    `Saint Sulpice Laurière – Bois des Echelles is 10mins drive from Vue de Vallon and offers great views over the valley below.`,
    `It is a great spot for hiking, dog walking and paraglding (northerly winds).`
  ]
}, {
  id: 8,
  alt: `Saint Sulpice Laurière - fishing lake`,
  src: '/assets/Saint Sulpice Laurière - fishing lake.jpg',
  title: `Saint Sulpice Laurière (lake)`,
  facilities: [
    activityIcon.fishing,
    activityIcon.hiking,
    activityIcon.parking,
    activityIcon.pets,
    activityIcon.views,
  ],
  paras: [
    `Saint Sulpice Laurière is 9mins from Vue de Vallon and a favourite for many fishing.`,
    `It is a great spot for hiking, dog walking and fishing.`
  ]
},

{
  id: 9,
  alt: 'Saint-Léger-la-Montagne',
  src: '/assets/Saint-Léger-la-Montagne.jpg',
  title: 'Saint Léger la Montagne',
  facilities: [
    activityIcon.cycling,
    activityIcon.paragliding,
    activityIcon.views,
  ],
  paras: [
    `Saint Léger la Montagne is 15mins drive away and offers great views.`,
    `It is a great spot due to the mountain bike tracks and paragliding take off (southerly winds).`
  ]
}, {
  id: 10,
  alt: 'Saint-Laurent-les-Églises',
  src: '/assets/Le Taurion Saint-Laurent-les-Églises.jpg',
  title: 'Le Taurion',
  facilities: [
    activityIcon.cycling,
    activityIcon.fishing,
    activityIcon.foil,
    activityIcon.hiking,
    activityIcon.kayaking,
    activityIcon.parking,
    activityIcon.pets,
    activityIcon.sup,
    activityIcon.swimming,
    activityIcon.restaurant,
    activityIcon.views,
  ],
  paras: [
    `Le Turion at Saint Laurent les Églises is 24mins drive away and offers great views.`,
    `It is a great spot for water sports, hiking, dogs and a great restaurant 'ESAT Pont du Dognon'.`
  ]
},

{
  id: 11,
  alt: 'La Jonchere Saint Maurice - fishing lake.',
  src: '/assets/La Jonchere Saint Maurice - fishing lake.jpg',
  title: 'La Jonchere',
  facilities: [
    activityIcon.fishing,
    activityIcon.parking,
    activityIcon.views,
  ],
  paras: [
    `La Jonchere Saint Maurice is a 15min drive and has a great fishing lake.`
  ]
}, {
  id: 12,
  alt: 'Étang de la Brousse',
  src: '/assets/Étang de la Brousse.jpg',
  title: 'Étang de la Brousse',
  facilities: [
    activityIcon.cycling,
    activityIcon.fishing,
    activityIcon.hiking,
    activityIcon.parking,
    activityIcon.pets,
    activityIcon.views,
  ],
  paras: [
    `Étang de la Brousse in Marsac is a 18mins away and great lake. This spot is good for hiking, dog walks and fishing`
  ]
}
  , {
  id: 13,
  alt: 'Le Taurion at Châtelus-le-Marcheix',
  src: '/assets/le Marcheix le Taurion river.jpg',
  title: 'Châtelus-le-Marcheix',
  facilities: [
    activityIcon.beach,
    activityIcon.foil,
    activityIcon.kayaking,
    activityIcon.parking,
    activityIcon.restaurant,
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
  id: 14,
  alt: `Lac de Chambon`,
  src: '/assets/Lac de Chambon.jpg',
  title: `Lac de Chambon`,
  facilities: [
    activityIcon.bar,
    activityIcon.beach,
    activityIcon.cycling,
    activityIcon.foil,
    activityIcon.hiking,
    activityIcon.kayaking,
    activityIcon.parking,
    activityIcon.pets,
    activityIcon.restaurant,
    activityIcon.sup,
    activityIcon.swimming,
    activityIcon.views,
    activityIcon.windsurfing
  ],
  paras: [
    `Lac de Chambon is a 40 min drive and of the largest lakes of the area.`,
    `It is a great spot for hiking, watersports, beach and dog walking and teh nearby town of Crozant is worth a visit.`
  ]
}, {
  id: 15,
  alt: 'Lac de Vassivière',
  src: '/assets/Lac de Vassivière.jpg',
  title: 'Lac de Vassivière',
  facilities: [
    activityIcon.bar,
    activityIcon.beach,
    activityIcon.cycling,
    activityIcon.fishing,
    activityIcon.foil,
    activityIcon.hiking,
    activityIcon.kayaking,
    activityIcon.parking,
    activityIcon.pets,
    activityIcon.restaurant,
    activityIcon.sup,
    activityIcon.swimming,
    activityIcon.views,
    activityIcon.windsurfing
  ],
  paras: [
    `Lac de Vassivière is an hours drive and is one of the largest lakes in France.`,
    `It is great for water sports, dogs and hiking.`
  ]
}, {
  id: 16,
  alt: 'Vienne at Confolens',
  src: '/assets/Vienne at Confolens.jpg',
  title: 'Confolens',
  facilities: [
    activityIcon.atm,
    activityIcon.bar,
    activityIcon.boulangerie,
    activityIcon.coffee,
    activityIcon.kayaking,
    activityIcon.parking,
    activityIcon.restaurant,
    activityIcon.shopping,
    activityIcon.sup,
    activityIcon.views
  ],
  paras: [
    `The town of Confolens is an hours drive from the Chambre D'Hôte. It is a very pretty town with the Viene running through.`,
    `The town offers several bars and good places to eat.`
  ]
}
];

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  public get(): Observable<Location[]> {
    return of(data);
  }
}
