import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
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
  constructor(
    private products:ProductService, 
    private fb:FormBuilder,
    private toast: NgToastService,
    ){
    this.add = this.fb.group({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
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
        image: new FormControl('', [
        Validators.required,
      ]),
    });
  }

  ngOnInit(): void {
    this.getCategories() ;
  }

  getCategories() {
    this.products.getCategory().subscribe((data) => {
      this.categories = Object.values(data)[0];
      // console.log(this.categories);
    });
  }
  


  saveImageToDataBase(event: any) {
    this.imageFile = event.target.files;
    console.log(this.imageFile)
  }
    
  onSubmit() {
    if (this.add.valid) {
      
        const productData = this.add.value;
        const formData = new FormData();


    for (let i = 0; i < this.imageFile.length; i++) {
      formData.append('image[]', this.imageFile[i]);
    }
    
    formData.append('name', productData.name);
    formData.append('description', productData.description);
    formData.append('category_id', productData.category);      
    formData.append('price', productData.price);   

    console.log(formData);
  
      this.products.AddProduct(formData).subscribe(
        (response: any) => {
          this.formSubmitted = true;
          this.add.reset();
          this.toast.success({
            detail: 'SUCCESS',
            summary: 'Your Success Message',
            position: 'topCenter',
          });
        },
        (error: any) => {
          // console.error('failed:', error);
          this.toast.error({
            detail: 'ERROR',
            summary: 'Your Error Message',
            sticky: true,
            position: 'topCenter',
          });

          
        }
      );
    } else {
      // console.log('Form is invalid. Please fill all the required fields.');
      this.toast.error({
        detail: 'ERROR',
        summary: 'Your Error Message',
        sticky: true,
        position: 'topCenter',
      });
    }
  }
  }
  
  
  
  