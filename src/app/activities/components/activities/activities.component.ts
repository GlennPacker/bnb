import { Component, EventEmitter, Input, Output } from '@angular/core';
import Search from 'src/app/component-library/models/Search';
import Option from 'src/app/component-library/models/option';
import Activity from '../../models/activity';
import { ActivityType } from '../../models/activityType';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent {
  @Input() public activities: Activity[];
  public searchCategories: Option[] = [{
    value: null,
    label: 'All',
  }, {
    value: ActivityType.Craft,
    label: ActivityType.Craft,
  }, {
    value: ActivityType.Others,
    label: ActivityType.Others,
  }, {
    value: ActivityType.WaterSports,
    label: ActivityType.WaterSports,
  }]
  @Output() public searchUpdated = new EventEmitter<Search>();

  public search(searchTerm: Search) {
    this.searchUpdated.emit(searchTerm);
  }
}
