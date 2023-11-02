import { Component, EventEmitter, Input, Output } from '@angular/core';
import FieldUpdated from '../models/fieldUpdated';
import SchemaData from '../models/schemaData';

@Component({
  selector: 'app-field-picker',
  templateUrl: './field-picker.component.html',
  styleUrls: ['./field-picker.component.scss']
})
export class FieldPickerComponent {
  @Input() public schema: SchemaData;
  @Output() updated = new EventEmitter<FieldUpdated>()
  

  public emitValue(update: FieldUpdated) {
    this.updated.emit(update);
  }
}
