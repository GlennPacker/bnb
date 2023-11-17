import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import LocationSearch from '../../models/locationSearch';
import * as fromStore from '../../state';

@Component({
  selector: 'app-location-container',
  templateUrl: './location-container.component.html',
  styleUrls: ['./location-container.component.scss']
})
export class LocationContainerComponent implements OnInit {
  public locations$ = this.store.pipe(select(fromStore.locationSearchedList));
  public search: LocationSearch;
  public searchForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store<fromStore.State>
  ) { }

  public ngOnInit(): void {
    this.store.dispatch(fromStore.locationsLoad());

    this.searchForm = this.fb.group({
      facility: new FormControl(),
      searchTerm: new FormControl(),
    });
  }

  public formUpdated(): void {
    this.store.dispatch(fromStore.setLocationSearchTerms({ searchTerm: this.searchForm.value }));
  }
}
