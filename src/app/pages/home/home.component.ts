import { Component, OnInit } from '@angular/core';
import { Graduations } from 'src/app/common/interfaces/graduations';
import { ConstantsService } from 'src/app/common/services/constants.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})

export class HomeComponentPage implements OnInit {
  graduations: Graduations[];

  constructor(
    private _constant: ConstantsService,
  ) {
    this.graduations = this._constant.graduations;
  }

  ngOnInit(): void {
  }

}
