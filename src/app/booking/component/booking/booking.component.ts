import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Control } from 'src/app/component-library/models/control';
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
      Email: new FormControl('', [
        Validators.email,
        Validators.required
      ]),
      EndDate: new FormControl(''),
      EventPrice: new FormControl(),
      Events: new FormControl(),
      FirstName: new FormControl('', [
        Validators.required,
        Validators.minLength(2)
      ]),
      LastName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      PassportNumber: new FormControl(''),
      People: new FormControl(2),
      StartDate: new FormControl(null),
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
        hint: 'Please enter your Email Adress',
        prop: 'Email',
        validationRules: [{
          message: 'Email Address is not valid',
          rule: 'email'
        }]
      },{
        control: Control.CheckBox,
        hint: 'Would all members of the party like Breakfast during your stay?',
        label: 'Breakfast',
        prop: 'Breakfast',
      }]
    };
  }

  public submit() {
    console.log(this.reservationForm.value);
  }
}
