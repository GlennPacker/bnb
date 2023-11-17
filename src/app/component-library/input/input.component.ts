import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import FieldUpdated from '../models/fieldUpdated';
import ValidationRuleAndMessage from '../models/validationRuleAndMessage';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() public form: FormGroup;
  @Input() public hint: string | null;
  @Input() public label: string | null;
  @Input() public prop: string;
  @Input() public placeholder: string;
  @Input() public validationRulesAndMessages: ValidationRuleAndMessage[]
  @Output() updated = new EventEmitter<FieldUpdated>()

  public get customRules() {
    return this.validationRulesAndMessages ?
      this.validationRulesAndMessages.filter(r => r.message) :
      [];
  }

  public get validationError() {
    if (!this.form || !this.form.get(this.prop).errors || !this.customRules.length) return '';

    return this.customRules.reduce((agg, { rule, message }) => {
      if (agg) return agg;

      const errors = this.form.get(this.prop).errors
      const error = errors[rule];
      return error ? message : '';
    }, '')
  }

  public emitValue(value: string) {
    this.updated.emit({ value, field: this.prop });
  }
}
