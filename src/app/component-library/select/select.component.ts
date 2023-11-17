import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import FieldUpdated from '../models/fieldUpdated';
import Option from '../models/option';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  @Input() public form: FormGroup;
  @Input() public hint: string | null;
  @Input() public label: string | null;
  @Input() public prop: string;
  @Input() public options: Option[];
  @Output() updated = new EventEmitter<FieldUpdated>()

  public emitValue(value: string | number) {
    this.updated.emit({ value, field: this.prop });
  }
}
