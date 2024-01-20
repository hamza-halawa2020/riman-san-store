import { Component } from '@angular/core';

@Component({
  selector: 'app-carusol',
  templateUrl: './carusol.component.html',
  styleUrls: ['./carusol.component.css'],
})
export class CarusolComponent {
  carouselItems = [
    {
      // heading: "Superior beauty with innovative products.",
      // subHeading: 'Healthy hair with unique formulas.',
      img: '/assets/images/carusol/1.jpeg',
      // mimg: '/assets/images/slider-m1.jpeg',
      active: true,
    },
    {
      // heading: "Fresh skin with premium products.",
      // subHeading: 'Immediate and noticeable effects.',
      img: '/assets/images/carusol/2.jpeg',
      // mimg: '/assets/images/slider-m1.jpeg',
      // active: true,
    },
    {
      // heading: "High quality, outstanding results.",
      // subHeading: 'Luxury products for care.',
      img: '/assets/images/carusol/3.jpeg',
      // mimg: '/assets/images/slider-m1.jpeg',
      // active: true,
    },
    {
      // heading: "Effective natural formulations.",
      // subHeading: 'A comprehensive and diverse product line.',
      img: '/assets/images/carusol/4.jpeg',
      // mimg: '/assets/images/slider-m1.jpeg',
      // active: true,
    },
    {
      // heading: "Constant innovation to improve quality.",
      // subHeading: 'A unique experience of care.',
      img: '/assets/images/carusol/5.jpeg',
      // mimg: '/assets/images/slider-m1.jpeg',
      // active: true,
    },
    {
      // heading: "Radiance & superior hydration.",
      // subHeading: 'Sustainable and environmentally friendly formulations.',
      img: '/assets/images/carusol/6.jpeg',
      // mimg: '/assets/images/slider-m1.jpeg',
      // active: true,
    },
    {
      // heading: "Natural beauty, exceptional results.",
      // subHeading: 'Complete hair and skin care.',
      img: '/assets/images/carusol/7.jpeg',
      // mimg: '/assets/images/slider-m1.jpeg',
      // active: true,
    },
    {
      // heading: "Elegant and sophisticated finish.",
      // subHeading: 'Beautify with natural extracts.',
      img: '/assets/images/carusol/8.jpeg',
      // mimg: '/assets/images/slider-m1.jpeg',
      // active: false,
    },
    // {
    //   heading: 'ancient marvels and lively heritage',
    //   subHeading: 'The cradle of civilization',
    //   img: '/assets/images/slider2.png',
    //   // mimg: '/assets/images/slider-m2.jpg',
    //   active: false,
    // },
  ];

  constructor() {}
}
