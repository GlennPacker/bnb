import { Component, Input } from '@angular/core';
import Cta from '../models/cta';

@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.scss']
})
export class CtaComponent {
  @Input() public cta: Cta;
}
