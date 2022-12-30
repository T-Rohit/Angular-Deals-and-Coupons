import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminCouponAddService } from './admin-coupon-add.service';
import { AdminCouponAddComponent } from './admin-coupon-add/admin-coupon-add.component';
import { AdminCouponDashComponent } from './admin-coupon-dash/admin-coupon-dash.component';
import { AdminCouponDelComponent } from './admin-coupon-del/admin-coupon-del.component';
import { AdminDelDealsDashComponent } from './admin-del-deals-dash/admin-del-deals-dash.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminNewsComponent } from './admin-news/admin-news.component';
import { AdminProdDashComponent } from './admin-prod-dash/admin-prod-dash.component';
import { AdminProdComponent } from './admin-prod/admin-prod.component';
import { AfterAdminLoginComponent } from './after-admin-login/after-admin-login.component';
import { AfterLoginComponent } from './after-login/after-login.component';
import { CouponsComponent } from './coupons/coupons.component';
import { HomeWithoutNavbarComponent } from './home-without-navbar/home-without-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { RegistrationComponent } from './registration/registration.component';
import { SingupComponent } from './singup/singup.component';
import { TopheadingComponent } from './topheading/topheading.component';

const routes: Routes = [
  {
    path:'', redirectTo:'home', pathMatch:'full'
  },
  {
    path:'registration', component:RegistrationComponent
  },
  {
    path:'signup' , component:SingupComponent
  },
  
  {
    path:'aboutus', component:AboutUsComponent
  },
  {
    path:'coupons', component:CouponsComponent
  },
  {
    path:'products', component:ProductsComponent
  },
  {
    path:'admin-login', component:AdminLoginComponent
  },
  {
    path:'home', component:HomeComponent
  },
  {
    path:'addNews', component:AdminNewsComponent
  },
  {
    path:'addDeals', component:AdminProdComponent
  },
  {
    path:'deleteDeals', component:AdminDelDealsDashComponent
  },
  {
    path:'admin/Deals', component:AdminProdDashComponent
  },
  {
    path:'admin/Coupons', component:AdminCouponDashComponent
  },
  {
    path:'addCoupons', component:AdminCouponAddComponent
  },
  {
    path:'deleteCoupons', component:AdminCouponDelComponent
  },
  {
    path:'after-admin-login', component:AfterAdminLoginComponent
  },
  {
    path:'after-login', component:AfterLoginComponent
  },
  {
    path:'topheading' , component:TopheadingComponent
  },
  {
    path:'homeWithoutNav' , component:HomeWithoutNavbarComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
