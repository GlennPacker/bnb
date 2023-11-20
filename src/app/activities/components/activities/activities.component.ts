import { Component, EventEmitter, Input, Output } from '@angular/core';
import Option from 'src/app/component-library/models/option';
import Search from 'src/app/component-library/models/sssearch';
import Activity from '../../models/activity';
import { ActivityType } from '../../models/activityType';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent {
  @Input() public activities: Activity[];
  @Output() public searchUpdated = new EventEmitter<Search>();

  public searchCategories: Option[] = [{
    value: ActivityType.Craft,
    label: ActivityType.Craft,
  }, {
    value: ActivityType.WaterSports,
    label: ActivityType.WaterSports,
  }]

  public search(searchTerm: Search) {
    this.searchUpdated.emit(searchTerm);
  }
}
