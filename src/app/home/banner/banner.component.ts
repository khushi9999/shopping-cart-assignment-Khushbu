import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel | any;
  
   bannerList = [
    {
      "bannerImageUrl": "/static/images/offers/offer1.jpg",
      "bannerImageAlt": "Independence Day Deal - 25% off on shampoo",
      "isActive": true,
      "order": 1,
      "id": "5b6c38156cb7d770b7010ccc"
    },
    {
      "bannerImageUrl": "/static/images/offers/offer2.jpg",
      "bannerImageAlt": "Independence Day Deal - Rs120 off on surf",
      "isActive": true,
      "order": 2,
      "id": "5b6c38336cb7d770b7010ccd"
    },
    {
      "bannerImageUrl": "/static/images/offers/offer3.jpg",
      "bannerImageAlt": "Independence Day Deal - Rs99 off on domex",
      "isActive": true,
      "order": 3,
      "id": "5b6c38456cb7d770b7010cce"
    },
    {
      "bannerImageUrl": "/static/images/offers/offer4.jpg",
      "bannerImageAlt": "Independence Day Deal - Rs99 off on bodywash",
      "isActive": true,
      "order": 4,
      "id": "5b6c38576cb7d770b7010ccf"
    },
    {
      "bannerImageUrl": "/static/images/offers/offer5.jpg",
      "bannerImageAlt": "Independence Day Deal - Rs70 off on tea",
      "isActive": true,
      "order": 5,
      "id": "5b6c386b6cb7d770b7010cd0"
    }
  ];
  assetsPath: any;

  constructor(private commonService :CommonService) { }


  ngOnInit(): void {
    this.assetsPath = this.commonService.assetsFolderPath;
  }
  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }
}

