import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
  @Input() public form: FormGroup;
  @Input() public hint: string | null;
  @Input() public label: string | null;
  @Input() public prop: string;
}
