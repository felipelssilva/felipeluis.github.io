import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Site } from 'src/app/common/interfaces/site';
import { ConstantsService } from '../../common/services/constants.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {
  site: Site[];
  year: number;
  window: any;

  constructor(private _constant: ConstantsService, @Inject(DOCUMENT) private document: Document) {
    this.year = this._constant.year;
    this.site = this._constant.site;
    this.window = this.document.defaultView;
  }

  ngOnInit(): void {
  }

  scrollToTop(evt) {
    evt.preventDefault();

    let scrollToTop = this.window.setInterval(() => {
      let pos = this.window.pageYOffset;
      if (pos > 0) {
        this.window.scrollTo(0, pos - 20);
      } else {
        this.window.clearInterval(scrollToTop);
      }
    }, 1);
  }

}
