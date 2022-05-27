import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  assetsFolderPath = '../../../assets';
  assetsFolderProductPath = '../../assets';
  // assetsFolderPath = 'http://localhost:6006';
  categoriesApi = 'http://localhost:6002/categories';
  bannerApi = 'http://localhost:6001/banner';
  productsApi = 'http://localhost:6004/products';
  cartApi = 'http://localhost:6003/cart';
  userApi = 'http://localhost:6005/users';
  modelopen = new Subject();
  cartItems: any = [];
  totelItemSiseInCart = new Subject();
  totelItemSiseCartPrice = new Subject();
  constructor() { }

  openModel() {
    this.modelopen.next(true)
  }
  totelItemSiseInCartCount(total: any) {
    this.totelItemSiseInCart.next(total);
  }

  totelItemSiseInCartPrice(totalprice: any) {
    this.totelItemSiseCartPrice.next(totalprice);
  }

  ckeckItemIncart(product: any) {
    if (this.cartItems.length > 0) {
      let flg = this.cartItems.some(function (el: any) {
        return el.id === product.id;
      });
      if (flg) {
        product.count = product.count + 1;
      } else {
        product.count = 1;
        this.cartItems.push(product);
      }
    } else {
      product.count = 1;
      this.cartItems.push(product);
    }

    this.updateTotelitemInCart();
    this.updateTotalPrice();
  }

  updateTotelitemInCart() {
    let total = this.cartItems.reduce((ele: any, cur: any) => {
      return ele + cur.count
    }, 0)
    this.totelItemSiseInCartCount(total);
  }

  updateTotalPrice() {
    let totalprice = this.cartItems.reduce((ele: any, cur: any) => {
      return ele + (cur.count * cur.price)
    }, 0)
    this.totelItemSiseInCartPrice(totalprice);
  }

}
