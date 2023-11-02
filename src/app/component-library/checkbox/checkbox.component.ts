import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import FieldUpdated from '../models/fieldUpdated';

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
  @Output() updated = new EventEmitter<FieldUpdated>()
  
  public emitValue(value: boolean) {
    this.updated.emit({ value, field: this.prop });
  }
}
