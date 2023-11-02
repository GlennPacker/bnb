import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import Accommodation from '../../models/Accommodation';
import { AccommodationService } from '../../services/accommodation/accommodation.service';

@Component({
  selector: 'app-accommodation-container',
  templateUrl: './accommodation-container.component.html',
  styleUrls: ['./accommodation-container.component.scss']
})
export class AccommodationContainerComponent implements OnInit {
  accommodation$: Observable<Accommodation[]> | undefined;

  constructor(private accommodationService: AccommodationService) {
    
  }
  ngOnInit(): void {
    this.accommodation$ = this.accommodationService.getAll();
  }
}
