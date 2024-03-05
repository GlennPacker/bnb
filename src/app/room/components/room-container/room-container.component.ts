import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import Room from '../../models/Room';

@Component({
  selector: 'app-room-container',
  templateUrl: './room-container.component.html',
  styleUrls: ['./room-container.component.scss']
})
export class RoomContainerComponent implements OnInit {
  public room$: Observable<Room>;
  public roomId: string | null = '';

  constructor(
    private activatedRoute: ActivatedRoute,
  ) {}

  @Input()
  public set id(roomId: string) {
    this.roomId = roomId;
  }

  public ngOnInit(): void {
    this.room$ = this.activatedRoute.data.pipe(
      map(data => data.room)
    );
  }
}
