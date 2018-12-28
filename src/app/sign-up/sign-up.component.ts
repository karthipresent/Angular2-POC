import { Component, OnInit } from '@angular/core';
import { GiftCartService } from '../gift-cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html'
})
export class SignUpComponent implements OnInit {
  private LoginDetails;
  constructor(private giftCartService: GiftCartService, private router: Router) { }

  ngOnInit() {
    this.giftCartService.getUser().subscribe(res => this.LoginDetails = res);
  }

 registerUser(form) {
    let payLoad = form.value;
    this.giftCartService.newUserRegister(payLoad).subscribe(
      (data) => {
        this.router.navigate(['/registerSuccess']);
      }, (error) => {
        alert('error');
      });
  }

}
