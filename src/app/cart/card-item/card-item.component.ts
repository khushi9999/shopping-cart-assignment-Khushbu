import { Component, Input, OnInit, Output } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {
  assetsPath: any;

  constructor(private commonService:CommonService) { }
  
  @Input() item: any
  ngOnInit(): void {
    this.assetsPath = this.commonService.assetsFolderPath;
  }
  addItem(item:any){
  let index = this.commonService.cartItems.map((x: { id: any; }) => x.id).indexOf(item.id)
  this.commonService.cartItems[index].count = this.commonService.cartItems[index].count + 1;
  this.commonService.updateTotalPrice();
  this.commonService.updateTotelitemInCart();
  }


  removeItem(item:any){
    let index = this.commonService.cartItems.map((x: { id: any; }) => x.id).indexOf(item.id)
    if (this.commonService.cartItems[index].count ==1) {
      this.commonService.cartItems.splice(index, 1);
      // this.commonService.cartItems[index].count = this.commonService.cartItems[index].count - 1;
    } else {
      this.commonService.cartItems[index].count = this.commonService.cartItems[index].count - 1;
      
    }
   
    this.commonService.updateTotalPrice();
    this.commonService.updateTotelitemInCart();
    }

}
