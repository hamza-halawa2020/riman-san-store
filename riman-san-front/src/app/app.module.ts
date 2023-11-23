import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BackToTopComponent } from './shared/back-to-top/back-to-top.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UsersComponent } from './users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiServiceService } from './services/api-service.service';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarusolComponent } from './shared/carusol/carusol.component';
import { CarusolItemComponent } from './shared/carusol-item/carusol-item.component';
import { AboutComponent } from './shared/about/about.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { PalestineComponent } from './shared/palestine/palestine.component';
import { About2Component } from './shared/about2/about2.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { CartComponent } from './cart/cart.component';
import { OrderNowComponent } from './order-now/order-now.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { FeedbackComponent } from './feedback/feedback.component';
import { ReviewComponent } from './review/review.component';
import { Carusol2Component } from './shared/carusol2/carusol2.component';
import { PricePipe } from './pipes/price.pipe';
import { StockPipe } from './pipes/stock.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    BackToTopComponent,
    NavbarComponent,
    LoginComponent,
    NotFoundComponent,
    UsersComponent,
    UserDetailsComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    ProductsComponent,
    ProductDetailsComponent,
    ContactUsComponent,
    CarusolComponent,
    CarusolItemComponent,
    AboutComponent,
    HomepageComponent,
    LoadingComponent,
    PalestineComponent,
    About2Component,
    ProductCardComponent,
    CartComponent,
    OrderNowComponent,
    TruncatePipe,
    FeedbackComponent,
    ReviewComponent,
    Carusol2Component,
    PricePipe,
    StockPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NgbModule,
  ],
  providers: [ApiServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
