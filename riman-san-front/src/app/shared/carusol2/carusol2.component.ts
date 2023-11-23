import { Component } from '@angular/core';

@Component({
  selector: 'app-carusol2',
  templateUrl: './carusol2.component.html',
  styleUrls: ['./carusol2.component.css'],
})
export class Carusol2Component {
  products = [
    {
      id: 1,
      img: 'assets/images/carusol/1.jpg',
      name: 'Product 1',
      description: 'Description for Product 1',
    },
    {
      id: 2,
      img: 'assets/images/carusol/2.jpg',
      name: 'Product 2',
      description: 'Description for Product 2',
    },
    {
      id: 3,
      img: 'assets/images/carusol/3.jpg',
      name: 'Product 3',
      description: 'Description for Product 3',
    },
    {
      id: 4,
      img: 'assets/images/carusol/4.jpg',
      name: 'Product 4',
      description: 'Description for Product 4',
    },
    {
      id: 5,
      img: 'assets/images/carusol/8.jpg',
      name: 'Product 5',
      description: 'Description for Product 5',
    },
    {
      id: 6,
      img: 'assets/images/carusol/6.jpg',
      name: 'Product 6',
      description: 'Description for Product 6',
    },
    {
      id: 7,
      img: 'assets/images/carusol/7.jpg',
      name: 'Product 7',
      description: 'Description for Product 7',
    },
  ];
  activeProductIndex = 0;
  intervalId: any;

  ngOnInit() {
    this.startCarousel();
  }

  ngOnDestroy() {
    this.stopCarousel();
  }

  moveNext() {
    this.activeProductIndex =
      (this.activeProductIndex + 1) % this.products.length;
  }

  movePrev() {
    this.activeProductIndex =
      this.activeProductIndex > 0
        ? this.activeProductIndex - 1
        : this.products.length - 1;
  }

  startCarousel() {
    this.intervalId = setInterval(() => {
      this.moveNext();
    }, 3000);
  }

  stopCarousel() {
    clearInterval(this.intervalId);
  }
}
