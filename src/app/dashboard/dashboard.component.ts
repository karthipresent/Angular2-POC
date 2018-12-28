import { Component, OnInit } from '@angular/core';
import { GiftCartService } from "../gift-cart.service"
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public giftCartService:GiftCartService) { }

  ngOnInit() {
    
  }

}