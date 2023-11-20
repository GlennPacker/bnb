import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import Search from 'src/app/component-library/models/Search';
import * as fromStore from '../../state';

@Component({
  selector: 'app-activities-container',
  templateUrl: './activities-container.component.html',
  styleUrls: ['./activities-container.component.scss']
})
export class ActivitiesContainerComponent implements OnInit {
  activities$ = this.store.pipe(select(fromStore.filteredActivityList));

  constructor(private store: Store<fromStore.State>) {}

  public ngOnInit(): void {
    this.store.dispatch(fromStore.activitiesLoad());
  }

  public search(searchTerm: Search): void {
    console.log('event to store', searchTerm);
    this.store.dispatch(fromStore.setSearchTerms({ searchTerm }));
  }
}
