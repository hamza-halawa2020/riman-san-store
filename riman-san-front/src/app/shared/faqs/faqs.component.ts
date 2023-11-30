import { Component } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent {
  faqs = [
    {
      title: 'How do I booktour guide through your website?',
      body: 'To book a tour guide, simply browse through our listings and find the accommodation or guide that suits your preferences. Contact details will be provided for you to reach out to them directly and make a booking.',
    },
    {
      title: 'What information do I need to provide when requesting a booking?',
      body: 'When requesting a booking, you may need to provide your name, contact information, preferred dates of stay or tour, and any specific requirements you have. Thetour guide will guide you on the information they need for the booking.',
    },
    {
      title: 'Can I modify or cancel my reservation through your website?',
      body: 'Modifications and cancellations are handled directly with the tour guide. Simply contact them using the provided contact details to discuss any changes to your reservation.',
    },
    {
      title: 'Is it possible to customize a tour based on my preferences?',
      body: 'Absolutely! Our tour guides are flexible and can tailor the tour to match your interests and preferences. Reach out to them directly to discuss customization options.',
    },
    {
      title: 'What payment methods are accepted for bookings?',
      body: 'We do not handle payments on our website. Payment details and methods will be discussed directly with the tour guide you are booking with.',
    },
    {
      title: 'How will I receive confirmation of my booking?',
      body: 'After reaching out to the tour guide and finalizing your booking, they will provide you with confirmation details directly.',
    },
    {
      title: 'Are there any additional charges apart from the booking fee?',
      body: 'Any charges and terms associated with the booking will be discussed directly with the tour guide. Our website does not charge any additional fees.',
    },
    {
      title: 'Is my personal information secure when making a booking request?',
      body: 'Yes, we take privacy seriously. Your personal information is kept secure on our website. However, actual booking transactions and communication will be handled directly with the tour guide.',
    },
    {
      title: 'How can I contact customer support for further assistance?',
      body: 'If you need assistance or have questions about using our website, you can contact our customer support team by phone at [your provided contact number] or via email at [your provided email address].',
    },
  ];
}
