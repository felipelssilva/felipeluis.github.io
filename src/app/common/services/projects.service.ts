import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Projects } from "../interfaces/projects";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient) {
  }

  listProjects() {
      return this.http.get<Projects>('/api/projects');
  }

}