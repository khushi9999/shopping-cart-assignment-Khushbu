import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  totalCartItem = 0;
  islogin = '0' as any;
  constructor(public commonService: CommonService) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('isLogin')) {
      this.islogin = '1';
    }

    this.commonService.totelItemSiseInCart.subscribe((res: any) => {
      this.totalCartItem = res;
    })

    this.commonService.isLogin.subscribe((res) => {
      this.islogin = res;
    })

    let cartItem = localStorage.getItem('cartItem')
    if (cartItem) {
      this.commonService.cartItems = JSON.parse(cartItem);
      this.commonService.updateTotelitemInCart();
      this.commonService.updateTotalPrice();
    }
  }

  open() {
    this.commonService.openModel();
  }

}
