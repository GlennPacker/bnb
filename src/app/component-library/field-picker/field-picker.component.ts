import { Component, Input } from '@angular/core';
import SchemaData from '../models/schemaData';

@Component({
  selector: 'app-field-picker',
  templateUrl: './field-picker.component.html',
  styleUrls: ['./field-picker.component.scss']
})
export class FieldPickerComponent {
  @Input() public schema: SchemaData;
}
