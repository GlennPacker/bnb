import { Component, Input } from '@angular/core';
import Accommodation from '../../models/Accommodation';

@Component({
  selector: 'app-accommodation',
  templateUrl: './accommodation.component.html',
  styleUrls: ['./accommodation.component.scss']
})
export class AccommodationComponent {
  @Input() public accommodation: Accommodation[];
}
