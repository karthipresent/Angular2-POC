import { Component, OnInit } from '@angular/core';
import { GiftCartService } from '../gift-cart.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-login-in',
  templateUrl: './login-in.component.html'
})
export class LoginInComponent implements OnInit {
  constructor(private giftCartService: GiftCartService, private router: Router) { }
  private errorMsg: string;

  ngOnInit() {
    //this.giftCartService.getUser().subscribe(res => this.LoginDetails = res);
  }

  private onSubmit(form) {
    let emailId = form.value.email;
    let pwd = form.value.password;
    this.giftCartService.loginUser(emailId).subscribe((res) => { this.validateUser(res, emailId, pwd) });
  }

  private validateUser(data, emailId, pwd) {
    let user = data.filter((key) => {
      return (key.email == emailId && key.password == pwd);
    });
    if(user.length) {
      sessionStorage.setItem('loginUserDetails', JSON.stringify(user));
      this.giftCartService.setUserName(user[0].name);
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMsg = 'Incorrect Email id or Password';
    }
  }

}
