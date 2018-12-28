import { Component, OnInit } from '@angular/core';
import { GiftCartService } from '../gift-cart.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.sass']
})
export class LogoutComponent implements OnInit {

  constructor(private giftCartService: GiftCartService) { }

  ngOnInit() {
    sessionStorage.removeItem('loginUserDetails');
  }

}
