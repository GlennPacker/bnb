import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import FieldUpdated from 'src/app/component-library/models/fieldUpdated';
import { activityIcon } from 'src/app/core/models/activityIcons';
import Location from '../../models/location';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent {
  @Input() public locations: Location[];
  @Input() public searchForm: FormGroup;
  @Output() updated = new EventEmitter<FieldUpdated>()

  public facilities = [
    {
      label: 'All',
      value: ''
    },
    ...Object.keys(activityIcon)
      .map(k => ({
        value: activityIcon[k as keyof typeof activityIcon].description,
        label: activityIcon[k as keyof typeof activityIcon].description
      }))
      .sort((a, b) => (a.label > b.label ? 1 : -1)),

  ];

  public emitValue(update?: FieldUpdated) {
    this.updated.emit(update);
  }
}
