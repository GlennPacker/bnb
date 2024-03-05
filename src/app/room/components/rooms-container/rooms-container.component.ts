import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import Room from '../../models/Room';

@Component({
  selector: 'app-rooms-container',
  templateUrl: './rooms-container.component.html',
  styleUrls: ['./rooms-container.component.scss']
})
export class RoomsContainerComponent implements OnInit {
  rooms$: Observable<Room[]> | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
  ) {}

  public ngOnInit(): void {
    this.rooms$ = this.activatedRoute.data.pipe(
      map(data => data.RoomList)
    );
  }
}
