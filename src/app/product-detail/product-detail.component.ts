import { Component, OnInit } from '@angular/core';
import { GiftCartService } from '../gift-cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  public SelectedProduct;
  public userDetails;
  public addCart = { email:'', productId:'' };
  public cartAdded = false;
  public session;
  public productId;
  constructor(private giftCartService: GiftCartService, private router: ActivatedRoute) {
    
   }

  ngOnInit() {
    this.productId = this.router.snapshot.params['id'];
    this.userDetails = JSON.parse(sessionStorage.getItem('loginUserDetails'));
    this.giftCartService.getSelectedProduct(this.productId).subscribe(data => {
      this.SelectedProduct = data[0];
    });
    this.verifyCartAdded();
  }

  ngDoCheck() {
    this.session = sessionStorage.getItem('loginUserDetails');
  }

  public verifyCartAdded() {
    this.giftCartService.getCart(this.userDetails[0].email).subscribe((data:any) => {
      let tempList = data.filter(x=>x.productId == this.productId);
      if(tempList.length>0) {
        this.cartAdded = true;
      }
      else{
        this.cartAdded = false;
      }
    });
  }

  public addToCart(event,SelectedProduct) {
    event.preventDefault();
    event.stopPropagation();
    debugger;
    this.userDetails = JSON.parse(sessionStorage.getItem('loginUserDetails'));
    this.addCart.email = this.userDetails[0].email;
    this.addCart.productId = SelectedProduct.id;
    this.giftCartService.addCart(this.addCart).subscribe(data => {
      this.cartAdded = true;
    });
  }

}
