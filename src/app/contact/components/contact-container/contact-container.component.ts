import { Component } from '@angular/core';
import { ContactGroupForm } from '../../models';

@Component({
  selector: 'app-contact-container',
  templateUrl: './contact-container.component.html',
  styleUrls: ['./contact-container.component.scss']
})
export class ContactContainerComponent {
  contactForm: ContactGroupForm = {} as ContactGroupForm;
  saved: string|null = null;

  saveForm(data: ContactGroupForm) {
    this.saved = JSON.stringify(data);
  }
}
