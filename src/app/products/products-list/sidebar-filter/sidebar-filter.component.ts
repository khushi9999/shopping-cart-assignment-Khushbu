import { Component, OnInit } from '@angular/core';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-sidebar-filter',
  templateUrl: './sidebar-filter.component.html',
  styleUrls: ['./sidebar-filter.component.scss'],
  providers: [NgbAccordionConfig]
})
export class SidebarFilterComponent implements OnInit {

  constructor(config: NgbAccordionConfig) {
    config.closeOthers = false;
    config.type = 'info';
  }
  ngOnInit(): void {
  }

}
