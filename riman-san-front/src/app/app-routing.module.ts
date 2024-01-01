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
import { AuthGuard } from './guards/auth.guard';
import { unauthGuard } from './guards/unauth.guard';
import { PrivacyPolicyComponent } from './shared/privacy-policy/privacy-policy.component';
import { TermsOfUseComponent } from './shared/terms-of-use/terms-of-use.component';
import { FaqsComponent } from './shared/faqs/faqs.component';
import { AddProductComponent } from './shared/add-product/add-product.component';

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
    canActivate: [unauthGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [unauthGuard]
  },
  {
    path: 'contact',
    component: ContactUsComponent,
  },
  {
    path: 'admincontact',
    component: AdminContactComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'add',
    component: AddProductComponent,
  },
  {
    path: 'adminorders',
    component: AdminOrderComponent,
    canActivate:[AuthGuard]

  },
  {
    path: 'adminreviews',
    component: AdminReviewComponent,
    canActivate:[AuthGuard]

  },
  {
    path: 'recovery',
    component: ForgetPasswordComponent,
    canActivate: [unauthGuard]

  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate:[AuthGuard]

  },
  { path: 'user/:id', component: UserDetailsComponent,
  canActivate:[AuthGuard]
},
  {
    path: 'products',
    component: ProductsComponent,
  },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent,
  },
  {
    path: 'terms-conditions',
    component: TermsOfUseComponent,
  },
  {
    path: 'faqs',
    component: FaqsComponent,
  },

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
