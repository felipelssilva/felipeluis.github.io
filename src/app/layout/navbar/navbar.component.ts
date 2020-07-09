import { Component, OnInit } from '@angular/core';
import { ConstantsService } from '../../common/services/constants.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
author : string;
  // title = ConstantsService.title;
  // description = ConstantsService.description;
  // keywords = ConstantsService.keywords;
  // urlBase = ConstantsService.urlBase;
  // actualUrl = ConstantsService.actualUrl;

  constructor(private _constant: ConstantsService) {
    this.author = this._constant.author;
  }

  ngOnInit(): void {
  }

}
