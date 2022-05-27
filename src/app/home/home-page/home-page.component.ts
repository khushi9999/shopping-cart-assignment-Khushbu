import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  assetsPath: any;
  categories: any = [];

  constructor(private commonService: CommonService, private dataService: DataService) { }

  ngOnInit(): void {
    this.assetsPath = this.commonService.assetsFolderPath;
    this.getData();
  }

  getData() {
    this.dataService.getData(this.commonService.categoriesApi).subscribe((res) => {
      this.categories = res;
      this.categories = this.categories.filter((a: any) => {
        return a.order > 0
      })
      this.sortProduct();
    });
  }

  sortProduct() {
    this.categories = this.categories.sort(function (a: any, b: any) {
      return a.order - b.order;
    });
  }

}
