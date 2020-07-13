import { Component, OnInit } from '@angular/core';
import { ConstantsService } from '../../common/services/constants.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {
  year: number;
  author: string;

  constructor(private _constant: ConstantsService) {
    this.year = this._constant.year;
    this.author = this._constant.author;
   }

  ngOnInit(): void {
  }

}
