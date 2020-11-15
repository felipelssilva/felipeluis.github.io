import { Component, OnInit } from '@angular/core';
import { ConstantsService } from 'src/app/common/services/constants.service';
import { Graduations } from 'src/app/common/interfaces/graduations';

@Component({
  selector: 'app-about-me-page',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.less']
})
export class AboutMeComponentPage implements OnInit {
  graduations: Graduations[];

  constructor(
    private _constant: ConstantsService,
  ) {
    this.graduations = this._constant.graduations;
  }

  ngOnInit(): void {
  }


}
