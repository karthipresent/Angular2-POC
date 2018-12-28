import { Component, OnInit } from '@angular/core';
import { GiftCartService } from '../gift-cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  constructor(private giftCartService: GiftCartService, private router: ActivatedRoute) {
      this.router.params.subscribe(
        x=>{
          this.productCategory = this.router.snapshot.params['category'];
          this.giftCartService.getProducts(this.productCategory).subscribe(data => {this.displayProducts = data});
        }
      )
   }
  public productCategory: string;
  public displayProducts:any = [];

  ngOnInit() {
    this.productCategory = this.router.snapshot.params['category'];
    this.giftCartService.getProducts(this.productCategory).subscribe(data => {this.displayProducts = data});
  }
}
