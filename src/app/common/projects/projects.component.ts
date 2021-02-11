import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Projects } from '../interfaces/projects';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.less']
})
export class ProjectsComponent implements OnInit {
  loading: Boolean;
  error: Boolean;
  projects: Projects;
  window: any;

  constructor(
    private projectsService: ProjectsService,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.window = this.document.defaultView;
   }

  ngOnInit(): void {
    this.loadProjects();
  }

  refresh(evt): void {
    evt.preventDefault();
    evt.stopPropagation();

    this.window.location.reload()
  }

  doNothing(evt): void {
    evt.preventDefault();
    evt.stopPropagation();
  }

  loadProjects(): void {
    this.loading = true;
    this.error = false;

    this.projectsService
      .listProjects()
      .subscribe(projects => {
        this.loading = false;
        this.projects = projects;
      },
        e => {
          this.loading = false;
          this.error = true;
        }
      );
  }

}
