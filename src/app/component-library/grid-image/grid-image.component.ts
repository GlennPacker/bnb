import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grid-image',
  templateUrl: './grid-image.component.html',
  styleUrls: ['./grid-image.component.scss']
})
export class GridImageComponent {
  @Input() public alt: string;
  @Input() public imgClass: string;
  @Input() public link: string;
  @Input() public src: string;
}
