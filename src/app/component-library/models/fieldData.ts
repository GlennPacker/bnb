import { Control } from './control';
import Option from './option';
import ValidationRule from './validationRuleAndMessage';

export default class FieldData {
  public control: Control;
  public hint?: string;
  public label?: string;
  public prop: string;
  public validationRules?: ValidationRule[];
  public options?: Option[];
}
