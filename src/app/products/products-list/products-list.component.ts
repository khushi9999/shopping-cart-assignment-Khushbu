import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { ToastrService } from 'ngx-toastr';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  assetsPath: any;
  products: any = [];

  constructor(private commonService: CommonService, private toastr: ToastrService, private dataServices: DataService) { }

  ngOnInit(): void {
    this.assetsPath = this.commonService.assetsFolderPath;
    this.getData();
  }

  getData() {
    this.dataServices.getData(this.commonService.productsApi).subscribe((res) => {
      this.products = res;
    });
  }

  showSuccess(product: any) {
    this.commonService.ckeckItemIncart(product)
    this.toastr.success("added to cart");
  }

}
