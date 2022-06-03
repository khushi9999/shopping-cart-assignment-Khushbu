import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonService } from 'src/app/services/common.service';
@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .dark-modal .modal-content {
      background-color: #292b2c;
      color: white;
    }
    .dark-modal .close {
      color: white;
    }
    .light-blue-backdrop {
      background-color: #5cb3fd;
    }
  `]
})
export class CartListComponent implements OnInit {
  closeResult: string | undefined;
  @ViewChild('longContent') longContent: any;
  totalCartItem: any = 0;
cartItem = [];
  totalprice: any = 0 ;

  constructor(private modalService: NgbModal, private commonService: CommonService) { }

  ngOnInit(): void {
    if (this.cartItem.length == 0) {
    this.cartItem = this.commonService.cartItems;
    this.totalprice = this.cartItem.reduce((ele: any, cur: any) => {
      return ele + (cur.count * cur.price)
    }, 0)
    this.totalCartItem = this.cartItem.reduce((ele: any, cur: any) => {
      return ele + cur.count
    }, 0)
    }
    this.commonService.modelopen.subscribe((res) => {
      this.openScrollableContent(this.longContent)
    })

    this.commonService.totelItemSiseInCart.subscribe((res: any) => {
      this.totalCartItem = res;
      this.cartItem = this.commonService.cartItems;
    })

    this.commonService.totelItemSiseCartPrice.subscribe((res: any) => {
      this.totalprice = res;
    })

    
  }



  openBackDropCustomClass(content: any) {
    this.modalService.open(content, { backdropClass: 'light-blue-backdrop' });
  }

  openWindowCustomClass(content: any) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

  openSm(content: any) {
    this.modalService.open(content, { size: 'sm' });
  }

  openLg(content: any) {
    this.modalService.open(content, { size: 'lg' });
  }

  openXl(content: any) {
    this.modalService.open(content, { size: 'xl' });
  }

  openFullscreen(content: any) {
    this.modalService.open(content, { fullscreen: true });
  }

  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }

  openScrollableContent(longContent: any) {
    this.modalService.open(longContent, { scrollable: true });
  }

  openModalDialogCustomClass(content: any) {
    this.modalService.open(content, { modalDialogClass: 'dark-modal' });
  }
}