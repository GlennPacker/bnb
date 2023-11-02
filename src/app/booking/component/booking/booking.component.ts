import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Control } from 'src/app/component-library/models/control';
import FieldUpdated from 'src/app/component-library/models/fieldUpdated';
import SchemaData from 'src/app/component-library/models/schemaData';
import { Reservation } from '../../models/reservation';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})

export class BookingComponent implements OnInit {
  public reservation: Reservation;
  public reservationForm: FormGroup;
  public schema: SchemaData;

  constructor(private fb: FormBuilder) {}

  public ngOnInit(): void {
    this.reservationForm = this.fb.group({
      Breakfast: new FormControl(true),
      Email: ['', [
        Validators.email,
        Validators.required
      ]],
      EndDate: '',
      FirstName: [{ value: '', disabled: false }, [
        Validators.required,
        Validators.minLength(2)
      ]],
      LastName: ['', [
        Validators.required,
        Validators.minLength(3),
      ]],
      Events: '',
      EventPrice: { value: null, disabled: true },
      PassportNumber: ['', Validators.required],
      Phone: [
        '', [
        Validators.required,
        Validators.minLength(9)
      ]],
      People: [{value: 2, disabled: true}],
      StartDate: null,
      PhonePreferredContactMethod: false
    });

    this.schema = {
      form: this.reservationForm,
      fieldData: [{
        control: Control.Input,
        label: 'First Name',
        hint: 'Please enter First Name',
        prop: 'FirstName',
        validationRules: [{
          message: 'First Name must be more than 2 characters',
          rule: 'minlength'
        }]
      }, {
        control: Control.Input,
        label: 'Last Name',
        hint: 'Please enter Last Name',
        prop: 'LastName',
        validationRules: [{
          message: 'Last Name must be more than 3 characters',
          rule: 'minlength'
        }]
      }, {
        control: Control.Input,
        label: 'Email',
        hint: 'Please enter your Email Address',
        prop: 'Email',
        validationRules: [{
          message: 'Email Address is not valid',
          rule: 'email'
        }]
      }, {
        control: Control.Input,
        label: 'Phone',
        hint: 'Please enter your Phone Number',
        prop: 'Phone',
        validationRules: [{
          message: 'Phone Number is not valid',
          rule: 'minlength'
        }]
      }, {
        control: Control.Input,
        label: 'Passport Number',
        hint: 'Please enter your Passport Number',
        prop: 'PassportNumber',
        validationRules: [{
          message: 'Passport Number is not valid',
          rule: 'minlength'
        }]
      }, {
        control: Control.CheckBox,
        label: 'Preferred Contact Method',
        hint: 'How would you like us to contact you?',
        prop: 'PhonePreferredContactMethod',
      }, {
        control: Control.CheckBox,
        hint: 'Would all members of the party like Breakfast during your stay?',
        label: 'Breakfast',
        prop: 'Breakfast',
      }]
    };
  }

  public formUpdated(update: FieldUpdated) {
    if (update.field !== 'PhonePreferredContactMethod') return;
   
    const phone = this.reservationForm.get('Phone');
    
    if (update.value) {
      phone.clearValidators();
    } else {
      phone.setValidators([
        Validators.required,
        Validators.minLength(9)
      ]);
    }
    
    phone.updateValueAndValidity();
  }

  public submit() {
    console.log(this.reservationForm.value);
    console.log(this.reservationForm.getRawValue());
  }
}
