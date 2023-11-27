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
import { HomepageComponent } from './homepage/homepage.component';
import { CartComponent } from './cart/cart.component';
import { OrderNowComponent } from './order-now/order-now.component';
import { AdminContactComponent } from './shared/admin-contact/admin-contact.component';
import { AdminOrderComponent } from './shared/admin-order/admin-order.component';
import { AdminReviewComponent } from './shared/admin-review/admin-review.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'order',
    component: OrderNowComponent,
  },
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
    path: 'admincontact',
    component: AdminContactComponent,
  },
  {
    path: 'adminorders',
    component: AdminOrderComponent,
  },
  {
    path: 'adminreviews',
    component: AdminReviewComponent,
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
  { path: 'cart', component: CartComponent },

  {
    path: '404',
    component: NotFoundComponent,
    data: { title: '404 Page not found' },
  },

  {
    path: '**',
    component: NotFoundComponent,
    data: { title: '404 Page not found' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
