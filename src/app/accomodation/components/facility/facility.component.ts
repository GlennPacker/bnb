import { Component, Input } from '@angular/core';
import Facility from '../../models/Facility';

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.scss']
})
export class FacilityComponent {
  @Input() facility: Facility;
}
