import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import Search from '../../../component-library/models/sssearch';
import * as fromStore from '../../state';

@Component({
  selector: 'app-location-container',
  templateUrl: './location-container.component.html',
  styleUrls: ['./location-container.component.scss']
})
export class LocationContainerComponent implements OnInit {
  public locations$ = this.store.pipe(select(fromStore.SearchedList));

  constructor(
    private store: Store<fromStore.State>
  ) { }

  public search(searchTerm: Search): void {
    this.store.dispatch(fromStore.setSearchTerms({ searchTerm }));
  }

  public ngOnInit(): void {
    this.store.dispatch(fromStore.locationsLoad());
  }
}
