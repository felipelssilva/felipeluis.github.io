import { Component, OnInit } from '@angular/core';
import { ConstantsService } from 'src/app/common/services/constants.service';
import { Certificates } from 'src/app/common/interfaces/certificates';

@Component({
  selector: 'app-about-me-page',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.less']
})
export class AboutMeComponentPage implements OnInit {
  certificates: Certificates[];

  constructor(private _constant: ConstantsService) {
    this.certificates = this._constant.certificates;
  }

  ngOnInit(): void {
  }

}
