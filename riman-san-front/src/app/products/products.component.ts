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
    if (value == 'all') {
      this.getProducts();
    } else {
      this.getProductCategoryByID(value);
    }
  }

  getProductCategoryByID(keyWord: number) {
    this.productsService.getCategoryById(keyWord).subscribe((data) => {
      this.products = Object.values(data)[0];
      // console.log(this.products);
    });
  }


}
