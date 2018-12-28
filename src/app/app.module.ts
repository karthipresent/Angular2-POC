import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { GiftCartService } from './gift-cart.service';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginInComponent } from './login-in/login-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { HeaderComponent } from './header/header.component';
import { RegisterSucessComponent } from './register-sucess/register-sucess.component';
import { LogoutComponent } from './logout/logout.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { BuyNowComponent } from './buy-now/buy-now.component';
import { OrderCompleteComponent } from './order-complete/order-complete.component';
import { CategoryPipe } from './category.pipe';
import { SearchPipe } from './search.pipe';
import { OrderByPipe } from './order-by.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginInComponent,
    SignUpComponent,
    DashboardComponent,
    CartListComponent,
    HeaderComponent,
    RegisterSucessComponent,
    LogoutComponent,
    ProductsComponent,
    ProductDetailComponent,
    BuyNowComponent,
    OrderCompleteComponent,
    CategoryPipe,
    SearchPipe,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ScrollingModule
  ],
  providers: [GiftCartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
