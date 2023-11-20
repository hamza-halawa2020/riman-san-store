import { Component } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  id: any;
  productDetails: any;
  loading: boolean = false;
  showMore: boolean = false;
  constructor(
    private activateRoute: ActivatedRoute,
    private productService: ApiServiceService,
    private cartApi: CartService
    // private titleService: Title,


  ) {}
  ngOnInit(): void {
// this.getProduct();


const productId = +this.activateRoute.snapshot.params['id'];

this.productService.getProductById(productId).subscribe((res) => {
  console.log(res);
  this.productDetails = res;
  Object.assign(this.productDetails, { quantity: 1 });
});
}

  // }
  // getProduct(){
//     this.loading = true;
//     this.activateRoute.params.subscribe((params) => {
//       this.id = +params['id'];
//       // this.id = this.activateRoute.snapshot.params['id'];

//       this.productService.getProductById(this.id).subscribe((data) => {
//                 this.productDetails = data;
//                 console.log(this.productDetails);

//         // this.productDetails = Object.values(data)[0];
//         // console.log(this.productDetails);
        
//         this.loading = false;
//       });
//     });
// }


  addProdutToCart(item: any) {
    this.cartApi.addProductToCart(item);
  }



  toggleDescriptionDisplay() {
    this.showMore = !this.showMore;
  }
    tourguide: any = {};
  p: number = 1;
  itemsPerPage: number = 3;










  // scrollToTop(pageNumber: number) {
  //   this.p = pageNumber; // Update the current page number
  
  //   // Scroll to the top of the content container by targeting the anchor element
  //   const contentContainer = document.querySelector('.reviews');
  //   const anchorElement = document.querySelector('[name="contentTop"]');
  //   if (contentContainer && anchorElement) {
  //     anchorElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //   }
  // }
  // scrollToBookingForm() {
  //       const headerHeight = 100;  // Adjust this value with your actual header height
  //       const bookingFormElement = document.getElementById('bookingFormSection');
  //       if (bookingFormElement) {
  //         const offsetPosition = bookingFormElement.offsetTop - headerHeight;
  //         window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  //       }
  //     }  
    
  }







// ngOnInit() {
//   this.id = this.activateRoute.snapshot.params['id'];
//   if (this.id) {
//     this.tourguideApi.getTourGuideById(this.id).subscribe(( data) => {
//       this.tourguide =  data
//       this.titleService.setTitle('Tour guide: ' + this.tourguide.name);
//     },(error)=>{
//       this.router.navigate(['/404']);

//     });
//   }
  // this.tourguideApi.getTourGuideReviews().subscribe((data) => {
  //   this.reviews = data as Array<Ireview>;
  //   this.totaltourguide = this.reviews.length;
  // });
// }
