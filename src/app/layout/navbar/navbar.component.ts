import { Component, OnInit } from '@angular/core';
import { Site } from 'src/app/common/interfaces/site';
import { ConstantsService } from '../../common/services/constants.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {
  isCollapsed: boolean;

  constructor(private _constant: ConstantsService) {
    this.isCollapsed = false;
  }

  ngOnInit(): void {
  }
}
