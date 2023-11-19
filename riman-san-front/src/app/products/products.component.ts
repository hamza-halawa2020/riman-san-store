import { Component } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products: any = [];
  selectedProducts: any;
  selectedProductsIndex: number | null = null;
  loading: boolean = false;

  constructor(private productsService: ApiServiceService) {}
  ngOnInit(): void {
this.getProducts();
  }
  getProducts(){
    this.loading = true;
    this.productsService.getProducts().subscribe((data) => {
      this.products = data;
      this.loading = false;
    });
  }
  deleteProduct(productId: number): void {
    this.productsService.deleteProduct(productId).subscribe(
      () => {
        this.productsService.getProducts().subscribe((data) => {
          this.products = data;
        });
      },
      (error) => {
        console.error('Error deleting Product:', error);
      }
    );
  }
  updateProduct(products: any): void {
    console.log('Updating Product:', products);
  }

  editProduct(products: any): void {
    const index = this.products.indexOf(products);
    if (this.selectedProductsIndex === index) {
      this.selectedProductsIndex = null;
      this.selectedProducts = null;
    } else {
      this.selectedProductsIndex = index;
      this.selectedProducts = { ...products };
    }
  }

  cancelEdit(): void {
    this.selectedProductsIndex = null;
  }
}
