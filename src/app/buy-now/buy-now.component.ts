import { Component, OnInit } from '@angular/core';
import { GiftCartService } from '../gift-cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buy-now',
  templateUrl: './buy-now.component.html',
  styleUrls: ['./buy-now.component.scss']
})
export class BuyNowComponent implements OnInit {
  public products;
  public qty = 1;
  constructor(private giftCartService: GiftCartService, private router: ActivatedRoute) { }

  ngOnInit() {
    let productId = this.router.snapshot.params['id'];
    this.giftCartService.getSelectedProduct(productId).subscribe(data => {
      this.products = data[0];
    });
  }

}
