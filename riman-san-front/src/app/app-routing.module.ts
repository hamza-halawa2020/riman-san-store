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
import { AdminGuard } from './guards/admin.guard';
import { unauthGuard } from './guards/unauth.guard';
import { PrivacyPolicyComponent } from './shared/privacy-policy/privacy-policy.component';
import { TermsOfUseComponent } from './shared/terms-of-use/terms-of-use.component';
import { FaqsComponent } from './shared/faqs/faqs.component';
import { AddProductComponent } from './shared/add-product/add-product.component';
import { register } from 'swiper/element/bundle';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './guards/auth.guard';

register();

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
    canActivate: [unauthGuard],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [unauthGuard],
  },
  {
    path: 'contact',
    component: ContactUsComponent,
  },
  {
    path: 'admincontact',
    component: AdminContactComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'add',
    component: AddProductComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'adminorders',
    component: AdminOrderComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'adminreviews',
    component: AdminReviewComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'recovery',
    component: ForgetPasswordComponent,
    canActivate: [unauthGuard],
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'user/:id',
    component: UserDetailsComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'products/:id',
    component: ProductDetailsComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
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
  },

  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
