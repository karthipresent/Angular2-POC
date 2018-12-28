import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginInComponent } from './login-in/login-in.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RegisterSucessComponent } from './register-sucess/register-sucess.component';
import { LogoutComponent } from './logout/logout.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { BuyNowComponent } from './buy-now/buy-now.component';
import { OrderCompleteComponent } from './order-complete/order-complete.component';

const routes: Routes = [
  {path: 'login', component: LoginInComponent},
  {path: 'register', component: SignUpComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'cart', component: CartListComponent},
  {path: 'registerSuccess', component: RegisterSucessComponent},
  {path: 'logOut', component: LogoutComponent},
  {path: 'products/:category', component: ProductsComponent},
  {path: 'productDetail/:id', component: ProductDetailComponent},
  {path: 'buyNow/:id', component: BuyNowComponent },
  {path: 'orderComplete', component: OrderCompleteComponent },
  {path: '', redirectTo:'/dashboard', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
