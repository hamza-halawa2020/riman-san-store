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
