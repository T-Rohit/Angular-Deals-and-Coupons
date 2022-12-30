import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CouponsComponent } from './coupons/coupons.component';
import { ProductsComponent } from './products/products.component';
import { RegistrationComponent } from './registration/registration.component';
import { SingupComponent } from './singup/singup.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AdminProdComponent } from './admin-prod/admin-prod.component';
import { AdminNewsComponent } from './admin-news/admin-news.component';
import { AdminProdDashComponent } from './admin-prod-dash/admin-prod-dash.component';
import { AdminDelDealsDashComponent } from './admin-del-deals-dash/admin-del-deals-dash.component';
import { AfterLoginComponent } from './after-login/after-login.component';
import { AdminCouponDashComponent } from './admin-coupon-dash/admin-coupon-dash.component';
import { AdminCouponAddComponent } from './admin-coupon-add/admin-coupon-add.component';
import { AdminCouponDelComponent } from './admin-coupon-del/admin-coupon-del.component';
import { AfterAdminLoginComponent } from './after-admin-login/after-admin-login.component';
import { TopheadingComponent } from './topheading/topheading.component';
import { NewsapiservicesService } from './service/newsapiservices.service';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeWithoutNavbarComponent } from './home-without-navbar/home-without-navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    CouponsComponent,
    ProductsComponent,
    RegistrationComponent,
    SingupComponent,
    HeaderComponent,
    FooterComponent,
    AdminLoginComponent,
    HomeComponent,
    AdminProdComponent,
    AdminNewsComponent,
    AdminProdDashComponent,
    AdminDelDealsDashComponent,
    AfterLoginComponent,
    AdminCouponDashComponent,
    AdminCouponAddComponent,
    AdminCouponDelComponent,
    AfterAdminLoginComponent,
    TopheadingComponent,
    NavbarComponent,
    HomeWithoutNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [NewsapiservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
