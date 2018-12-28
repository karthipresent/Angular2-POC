import { Component, OnInit } from '@angular/core';
import { GiftCartService } from '../gift-cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  public userDetails;
  public displayCartProducts = [];
  constructor(private giftCartService: GiftCartService) { }

  ngOnInit() {
    this.getCartList();
  }

  public getCartList(){
    this.userDetails = JSON.parse(sessionStorage.getItem('loginUserDetails'));
    this.giftCartService.getCart(this.userDetails[0].email).subscribe(data => {
      this.getProductList(data);
    });
  }

  public getProductList(cartList) {
    this.displayCartProducts = [];
    cartList.forEach(cart => {
      console.log('cartList: ',cart);
      this.giftCartService.getSelectedProduct(cart.productId).subscribe(data => {
        //let Result = data;
        data[0].cartId=cart.id;
        //console.log('selectedProduct: ', Result);
        this.displayCartProducts.push(data[0]);
      });
    });
  }

  public removeItem(prod) {
    let cartId = prod.cartId;
    this.giftCartService.deleteCart(cartId).subscribe(data =>{
      this.getCartList(); 
    });
  }

}
