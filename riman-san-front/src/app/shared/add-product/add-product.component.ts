import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  add: FormGroup;
  formSubmitted: boolean = false;
  imageFile: any;
  categories:any;
  constructor(private products:ProductService){

    this.add = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(16),
      ]),
      description: new FormControl('', [
         Validators.required,
         Validators.minLength(5),
         Validators.maxLength(255),
        ]),
        category: new FormControl('', [
          Validators.required,
        ]),
        price: new FormControl('', [
          Validators.required,
        ]),
        img: new FormControl('', [
        Validators.required,
        // Validators.minLength(5),
        // Validators.maxLength(16),
      ]),
    });
  }
  



  ngOnInit(): void {
    this.getCategories() ;
  }



  filterCategory(event: any) {
    const value = event.target.value;
    if (value === 'all') {
      this.getCategories();
    } else {
      this.getCategoryByID(value);
    }
  }
  
  getCategories() {
    this.products.getCategory().subscribe((data) => {
      this.categories = Object.values(data)[0];
      console.log(this.categories);
    });
  }
  
  getCategoryByID(keyWord: number) {
    this.products.CategoryById(keyWord).subscribe((data) => {
      this.categories = Object.values(data)[0];
      console.log(this.categories);
    });
  }
  

  saveImageToDataBase(event: any) {
    this.imageFile = event.target.files[0];
    // console.log(this.imageFile)
  }
  

  
  
  onSubmit() {
    if (this.add.valid) {
      const productData = this.add.value;
      const formData = new FormData();
      formData.append('name', productData.name);
      formData.append('description', productData.description);
      formData.append('category', productData.category);
      formData.append('price', productData.price);
      formData.append('img', this.imageFile);
  // console.log();
  
      this.products.AddProduct(formData).subscribe(
        (response: any) => {
          this.formSubmitted = true;
          // console.log(this.sendMessage.value);
          this.add.reset();
        },
        (error: any) => {
          console.error('failed:', error);
        }
      );
    } else {
      console.log('Form is invalid. Please fill all the required fields.');
    }
  }
  }
  
  
  
  