import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ContactGroupForm } from '../../models/ContactGroupForm';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnChanges {
  @Input() contactForm: ContactGroupForm = {} as ContactGroupForm;
  @Output() cancel = new EventEmitter();
  @Output() save = new EventEmitter<ContactGroupForm>();

  form: FormGroup = {} as FormGroup;

  constructor(private fb: FormBuilder) {
    this.buildForm();
  }

  buildForm() {
    this.form = this.fb.group({
      name: null,
      message: null,
      email: null,
    });
  }

  patchForm() {
    const { name, message, email } = this.contactForm;
    this.form.patchValue({
      name,
      message,
      email
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['contactForm'] && changes['contactForm']?.currentValue) {
      this.patchForm();
    }
  }

  submit() {
    this.save.emit(this.form.value);
  }
}
