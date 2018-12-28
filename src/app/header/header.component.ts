import { Component, OnInit,DoCheck, Input, SimpleChanges, OnChanges } from "@angular/core";
import { GiftCartService } from "../gift-cart.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit, DoCheck {
  @Input() name: string;
  public userName: string;
  public userData: any = [];
  constructor(public giftCartService: GiftCartService, public router: Router) {}

  ngOnInit() {
  }

  ngDoCheck() {
    let userDetails = JSON.parse(sessionStorage.getItem('loginUserDetails'));
    console.log('userDetails',userDetails);
    if(userDetails) {
      this.userName = userDetails[0].name;
    } else {
      this.userName = '';
    }
  }

  public logout() {
    sessionStorage.removeItem('loginUserDetails');
    this.router.navigate(['/logOut']);
  }
}
