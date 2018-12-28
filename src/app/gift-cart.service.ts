import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GiftCartService {
  public loginApi = "http://localhost:3000/users";
  public productApi = 'http://localhost:3001/products';
  public cartApi = 'http://localhost:3002/cart';

  public userName = new BehaviorSubject('');

  constructor(private http: HttpClient) { }

  public getUser(): Observable<any> {
    return this.http.get(this.loginApi);
  }

  public newUserRegister(data): Observable<any> {
    let payLoad = data;
    return this.http.post(this.loginApi, payLoad);
  }

  public loginUser(emailId): Observable<any> {
    let param = "?email="+ emailId;
    return this.http.get(this.loginApi+param);
  }

  public setUserName(data) {
    this.userName.next(data);
  }

  public getUserName() {
    return this.userName.asObservable();
  }

  public getProducts(productCategory: string) {
    return this.http.get(this.productApi +'?catogery='+ productCategory);
  }

  public getSelectedProduct(productId: string) {
    return this.http.get(this.productApi +'?id='+ productId);
  }

  public getCart(userEmail) {
    return this.http.get(this.cartApi +'?email='+ userEmail);
  }

  public getSelectedCart(productId: string) {
    return this.http.get(this.cartApi +'?productId='+ productId);
  }

  public addCart(data) {
    let payLoad = data;
    return this.http.post(this.cartApi, payLoad);
  } 

  public deleteCart(id) {
    return this.http.delete(this.cartApi +'/'+ id);
  } 

}
