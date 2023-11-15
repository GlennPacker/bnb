import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grid-image',
  templateUrl: './grid-image.component.html',
  styleUrls: ['./grid-image.component.scss']
})
export class GridImageComponent {
  @Input() alt: string;
  @Input() link: string;
  @Input() src: string;
}
