import { FormGroup } from '@angular/forms';
import FieldData from './fieldData';

export default class SchemaData {
  public fieldData: FieldData[] = [];
  public form: FormGroup;
}
