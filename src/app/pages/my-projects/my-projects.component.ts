import { Component, OnInit } from '@angular/core';
import { ConstantsService } from 'src/app/common/services/constants.service';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.less']
})
export class MyProjectsComponentPage implements OnInit {
  projects: any;

  constructor(private _constant: ConstantsService) {
    this.projects = this._constant.projects;
   }

  ngOnInit(): void {
  }

}
