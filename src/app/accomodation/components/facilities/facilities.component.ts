import { Component } from '@angular/core';
import Facility from '../../models/Facility';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.scss']
})
export class FacilitiesComponent {
  facilities: Facility[] = [ {
    description: 'Hot Tub',
    icon: 'hot_tub'
  }, {
    description: 'Pool',
    icon: 'pool'
  }, {
    description: 'WIFI',
    icon: 'wifi'
  }, {
    description: 'Stunning Views',
    icon: 'landscape'
  }, {
    description: 'Pets allowed',
    tooltip: 'Dogs must be friendly and get on well with other people and animals. We reserve the right of refusal.',
    icon: 'pets'
  }, {
    description: 'Cards and Games',
    icon: 'toys_and_games'
  }, {
    description: 'Tea & Coffee making facilities',
    icon: 'coffee'
  }, {
    description: 'Outdoor Dining Furniture',
    icon: 'deck'
  }, {
    description: 'Evening Meals and Picnics to order',
    tooltip: 'Must give reasonable notice. This is a paid extra service.',
    icon: 'restaurant'
  }, {
    description: 'BBQ',
    icon: 'outdoor_grill'
  }, {
    description: 'Long Term Stays Available',
    icon: 'calendar_month'
  }, {
    description: 'TV',
    icon: 'tv'
  }, {
    description: 'Dedicated workspace',
    icon: 'desk'
  }]

  transport = [{
    description: 'Free parking on premises',
    icon: 'directions_car'
  }, {
    description: 'Close to Train Station',
    icon: 'train'
  }, {
    description: 'Half hour from airport',
    icon: 'flight'
  }, {
    description: 'Airport pickup',
    tooltip: 'Free when staying 2 or more nights.',
    icon: 'airport_shuttle'
  }]


  sports = [{
      description: 'Paragliding',
      tooltip: 'Must have a license and insurance',
      icon: 'paragliding'
    }, {
      description: 'Kayaking',
      icon: 'kayaking'
    },{
      description: 'Basketball and hoop',
      icon: 'sports_basketball'
    }, {
      description: 'Windsurfing, Wind SUP',
      icon: 'kitesurfing'
    }, {
      description: 'Wind foil and wing foil',
      icon: 'surfing'
    },{
      description: 'Small Gym',
      icon: 'fitness_center'
    },{
      description: 'Hiking',
      icon: 'hiking'
    }, {
      description: 'SUP',
      tooltip: 'Stand Up Paddleboard',
      icon: 'toggle_off'
    },
  ]
}