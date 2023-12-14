import { Component } from '@angular/core';
import { ProductService } from '../services/product/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products: any = [];
  categories: any = [];
  selectedProducts: any;
  selectedProductsIndex: number | null = null;
  loading: boolean = false;

  constructor(private productsService: ProductService) {}
  ngOnInit(): void {
    this.getProducts();
    this.getAllCate();
  }
  getProducts() {
    this.loading = true;
    this.productsService.getProducts().subscribe((data) => {
      this.products = Object.values(data)[0];
      this.loading = false;
    });
  }
  getAllCate() {
    this.productsService.getCategory().subscribe((data) => {
      this.categories = Object.values(data)[0];
      // console.log(this.categories);
    });
  }

  filterCategory(event: any) {
    let value = event.target.value;
    this.productsService.getCategoryById(value).subscribe((data) => {
      this.products = Object.values(data)[0];
      // console.log(this.products);
    });
  }
  // getCategoryByID(keyWord: number) {
  //   this.productsService.getCategoryById(keyWord).subscribe((data) => {
  //     // console.log((this.products = Object.values(data)));
  //     // console.log((this.products = data));
  //     // this.products = Object.values(data)[0];
  //   });
  // }

  //   deleteProduct(productId: number): void {
  //     this.productsService.deleteProduct(productId).subscribe(
  //       () => {
  //         this.productsService.getProducts().subscribe((data) => {
  //           this.products = data;
  //         });
  //       },
  //       (error) => {
  //         console.error('Error deleting Product:', error);
  //       }
  //     );
  //   }
  //   updateProduct(products: any): void {
  //     console.log('Updating Product:', products);
  //   }

  //   editProduct(products: any): void {
  //     const index = this.products.indexOf(products);
  //     if (this.selectedProductsIndex === index) {
  //       this.selectedProductsIndex = null;
  //       this.selectedProducts = null;
  //     } else {
  //       this.selectedProductsIndex = index;
  //       this.selectedProducts = { ...products };
  //     }
  //   }

  //   cancelEdit(): void {
  //     this.selectedProductsIndex = null;
  //   }
}
