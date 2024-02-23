import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import Room from '../../models/room';

@Component({
  selector: 'app-rooms-container',
  templateUrl: './rooms-container.component.html',
  styleUrls: ['./rooms-container.component.scss']
})
export class RoomsContainerComponent implements OnInit {
  room$: Observable<Room[]> | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
  ) {}

  public ngOnInit(): void {
    this.room$ = this.activatedRoute.data.pipe(
      map(data => data.RoomList)
    );
  }
}
