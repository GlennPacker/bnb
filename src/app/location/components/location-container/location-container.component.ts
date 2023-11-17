import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromStore from '../../state';

@Component({
  selector: 'app-location-container',
  templateUrl: './location-container.component.html',
  styleUrls: ['./location-container.component.scss']
})
export class LocationContainerComponent implements OnInit {
  locations$ = this.store.pipe(select(fromStore.locationList));

  constructor(private store: Store<fromStore.State>) { }

  public ngOnInit(): void {
    this.store.dispatch(fromStore.locationsLoad());
  }
}
