import { Component, OnInit } from '@angular/core';
import { ConstantsService } from '../../common/services/constants.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {
  author : string;
  isCollapsed: boolean;
  //href="/public/pdf/curriculo.pdf"

  constructor(private _constant: ConstantsService) {
    this.isCollapsed = false;
    this.author = this._constant.author;
  }

  ngOnInit(): void {
  }
}
