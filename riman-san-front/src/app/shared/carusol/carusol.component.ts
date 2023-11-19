import { Component } from '@angular/core';

@Component({
  selector: 'app-carusol',
  templateUrl: './carusol.component.html',
  styleUrls: ['./carusol.component.css'],
})
export class CarusolComponent {
  carouselItems = [
    {
      heading: "Explore Egypt's timeless beauty",
      subHeading: 'The oldest country in history',
      img: '/assets/images/carusol/1.jpg',
      // mimg: '/assets/images/slider-m1.jpg',
      active: true,
    },
    {
      heading: "Explore Egypt's timeless beauty",
      subHeading: 'The oldest country in history',
      img: '/assets/images/carusol/2.jpg',
      // mimg: '/assets/images/slider-m1.jpg',
      // active: true,
    },
    {
      heading: "Explore Egypt's timeless beauty",
      subHeading: 'The oldest country in history',
      img: '/assets/images/carusol/3.jpg',
      // mimg: '/assets/images/slider-m1.jpg',
      // active: true,
    },
    {
      heading: "Explore Egypt's timeless beauty",
      subHeading: 'The oldest country in history',
      img: '/assets/images/carusol/4.jpg',
      // mimg: '/assets/images/slider-m1.jpg',
      // active: true,
    },
    {
      heading: "Explore Egypt's timeless beauty",
      subHeading: 'The oldest country in history',
      img: '/assets/images/carusol/6.jpg',
      // mimg: '/assets/images/slider-m1.jpg',
      // active: true,
    },
    {
      heading: "Explore Egypt's timeless beauty",
      subHeading: 'The oldest country in history',
      img: '/assets/images/carusol/7.jpg',
      // mimg: '/assets/images/slider-m1.jpg',
      // active: true,
    },
    {
      heading: "Explore Egypt's timeless beauty",
      subHeading: 'The oldest country in history',
      img: '/assets/images/carusol/8.jpg',
      // mimg: '/assets/images/slider-m1.jpg',
      // active: true,
    },
    {
      heading: "Explore Egypt's timeless beauty",
      subHeading: 'The oldest country in history',
      img: '/assets/images/carusol/9.jpg',
      // mimg: '/assets/images/slider-m1.jpg',
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
