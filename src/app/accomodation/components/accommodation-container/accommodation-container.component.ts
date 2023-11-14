import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import Accommodation from '../../models/Accommodation';

@Component({
  selector: 'app-accommodation-container',
  templateUrl: './accommodation-container.component.html',
  styleUrls: ['./accommodation-container.component.scss']
})
export class AccommodationContainerComponent implements OnInit {
  
  accommodation$: Observable<Accommodation[]> | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.accommodation$ = this.activatedRoute.data.pipe(map(data => data.accommodationList));
  }
}
