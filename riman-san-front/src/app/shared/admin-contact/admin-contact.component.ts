import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NgToastService } from 'ng-angular-popup';
import { ContactService } from 'src/app/services/contact/contact.service';

@Component({
  selector: 'app-admin-contact',
  templateUrl: './admin-contact.component.html',
  styleUrls: ['./admin-contact.component.css'],
})
export class AdminContactComponent {
  updatedContactData: { fullName?: string; email?: string } = {};
  Contacts: any;
  selectedContact: any;
  selectedContactIndex: number | null = null;
  loading: boolean = false;
  editedContact: any = {};
  constructor(
    private ContactService: ContactService,
    private toast: NgToastService,
    public translate: TranslateService
  ) {}
  ngOnInit(): void {
    this.getContact();
  }

  getContact() {
    this.loading = true;
    this.ContactService.getContacts().subscribe((data) => {
      this.Contacts = Object.values(data)[0];
      this.loading = false;
    });
  }

  deleteContact(contactId: number): void {
    this.ContactService.deleteContacts(contactId).subscribe(
      () => {
        this.ContactService.getContacts().subscribe((data) => {
          this.Contacts = Object.values(data)[0];
          this.toast.success({
            detail: this.translate.instant('SUCCESS'),
            summary: this.translate.instant('message deleted'),
            // position: 'topCenter',
          });
        });
      },
      (error) => {
        this.toast.error({
          detail: this.translate.instant('ERROR'),
          summary: 'Your Error Message',
          sticky: true,
          position: 'topCenter',
        });
        // console.error('Error deleting Contact:', error);
      }
    );
  }

  updateContact(Contact: any): void {
    // console.log('Updating Contact:', Contact);
    this.editedContact = {};
    this.selectedContactIndex = null;
    this.toast.success({
      detail: 'SUCCESS',
      summary: 'Your Success Message',
      // position: 'topCenter',
    });
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
