import { Component, OnInit } from '@angular/core';
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

  constructor(
    private projectsService: ProjectsService
  ) { }

  ngOnInit(): void {
    this.loadProjects();
  }

  refresh(evt): void {
    evt.preventDefault();
    evt.stopPropagation();

    window.location.reload()
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
