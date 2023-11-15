import { Component, Input } from '@angular/core';
import Accommodation from '../../models/Accommodation';

@Component({
  selector: 'app-accomodation-grid',
  templateUrl: './accomodation-grid.component.html',
  styleUrls: ['./accomodation-grid.component.scss']
})
export class AccomodationGridComponent {
  @Input() accommodation: Accommodation[];
}
