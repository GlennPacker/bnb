import { Control } from './control';
import ValidationRule from './validationRuleAndMessage';

export default class FieldData {
  public control: Control;
  public hint?: string;
  public label?: string;
  public prop: string;
  public validationRules?: ValidationRule[]
}
