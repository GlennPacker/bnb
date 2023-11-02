import { Component, Input } from '@angular/core';
import Activity from '../../models/activity';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent {
  @Input() public activities: Activity[];
}
