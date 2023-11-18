import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { RegisterComponent } from './register/register.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'contact',
    component: ContactUsComponent,
  },
  {
    path: 'recovery',
    component: ForgetPasswordComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  { path: 'user/:id', component: UserDetailsComponent },
  {
    path: 'products',
    component: ProductsComponent,
  },
  { path: 'product/:id', component: ProductDetailsComponent },
  // {
  //   path: '**',
  //   component: NotFoundComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
