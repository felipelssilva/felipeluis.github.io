import { Component, OnInit } from '@angular/core';
import { ConstantsService } from 'src/app/common/services/constants.service';
import { Projects } from 'src/app/common/interfaces/projects';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.less']
})
export class MyProjectsComponentPage implements OnInit {
  projects: Projects[];

  constructor(private _constant: ConstantsService) {
    this.projects = this._constant.projects;
   }

  ngOnInit(): void {
  }

}
