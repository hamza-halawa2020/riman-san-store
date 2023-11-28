import { Component } from '@angular/core';
import { ContactService } from 'src/app/services/contact/contact.service';

@Component({
  selector: 'app-admin-contact',
  templateUrl: './admin-contact.component.html',
  styleUrls: ['./admin-contact.component.css'],
})
export class AdminContactComponent {
  Contacts: any;
  selectedContact: any;
  selectedContactIndex: number | null = null;
  loading: boolean = false;
  constructor(private ContactService: ContactService) {}
  ngOnInit(): void {
    this.getContact();
  }

  getContact() {
    this.loading = true;
    this.ContactService.getContacts().subscribe((data) => {
      this.Contacts =Object.values(data)[0];
      this.loading = false;
    });
  }
  deleteContact(ContactId: number): void {
    this.ContactService.deleteContacts(ContactId).subscribe(
      () => {
        this.ContactService.getContacts().subscribe((data) => {
          this.Contacts = data;
        });
      },
      (error) => {
        console.error('Error deleting Contact:', error);
      }
    );
  }
  updateContact(Contact: any): void {
    console.log('Updating Contact:', Contact);
  }

  editContact(Contact: any): void {
    const index = this.Contacts.indexOf(Contact);
    if (this.selectedContactIndex === index) {
      this.selectedContactIndex = null;
      this.selectedContact = null;
    } else {
      this.selectedContactIndex = index;
      this.selectedContact = { ...Contact };
    }
  }

  cancelEdit(): void {
    this.selectedContactIndex = null;
  }
}
