import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grid-shield',
  templateUrl: './grid-shield.component.html',
  styleUrls: ['./grid-shield.component.scss']
})
export class GridShieldComponent {
  @Input() public title: string;
}
