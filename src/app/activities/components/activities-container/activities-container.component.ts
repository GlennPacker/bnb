import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromStore from '../../state';

@Component({
  selector: 'app-activities-container',
  templateUrl: './activities-container.component.html',
  styleUrls: ['./activities-container.component.scss']
})
export class ActivitiesContainerComponent implements OnInit {
  activities$ = this.store.pipe(select(fromStore.activityList));

  constructor(private store: Store<fromStore.State>) {}

  public ngOnInit(): void {
    this.store.dispatch(fromStore.activitiesLoad());
  }
}
