import { Component } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent {
  faqs = [
    {
      title: 'How do I choose the right beauty product through your website?',
      body: 'To find the perfect beauty product, simply browse through our listings and discover the products that suit your preferences. Contact details will be provided for you to reach out for more information or to place an order.',
    },
    {
      title: 'What information do I need to provide when placing an order?',
      body: 'When placing an order, you may need to provide your name, contact information, preferred delivery dates, and any specific requirements you have. The beauty consultant will guide you on the information they need for the order.',
    },
    {
      title: 'Can I modify or cancel my order through your website?',
      body: 'Modifications and cancellations are handled directly with the beauty consultant. Simply contact them using the provided contact details to discuss any changes to your order.',
    },
    {
      title: 'Is it possible to customize a beauty package based on my preferences?',
      body: 'Absolutely! Our beauty consultants are flexible and can tailor a package to match your preferences. Reach out to them directly to discuss customization options.',
    },
    {
      title: 'What payment methods are accepted for orders?',
      body: 'We do not handle payments on our website. Payment details and methods will be discussed directly with the beauty consultant you are ordering from.',
    },
    {
      title: 'How will I receive confirmation of my order?',
      body: 'After reaching out to the beauty consultant and finalizing your order, they will provide you with confirmation details directly.',
    },
    {
      title: 'Are there any additional charges apart from the order total?',
      body: 'Any charges and terms associated with the order will be discussed directly with the beauty consultant. Our website does not charge any additional fees.',
    },
    {
      title: 'Is my personal information secure when placing an order?',
      body: 'Yes, we take privacy seriously. Your personal information is kept secure on our website. However, actual transactions and communication will be handled directly with the beauty consultant.',
    },
    {
      title: 'How can I contact customer support for further beauty assistance?',
      body: 'If you need assistance or have questions about our beauty products, you can contact our customer support team by phone at [your provided contact number] or via email at [your provided email address].',
    },
  ];
}
