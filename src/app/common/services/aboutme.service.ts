import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { AboutMe } from "../interfaces/aboutme";

@Injectable()
export class AboutMeService {

    constructor(private http: HttpClient) {
    }

    loadAboutMe(id: String) {
        return this.http.get<AboutMe>(`/api/about/${id}`);
    }

    listAboutMe() {
        return this.http.get<AboutMe>('/api/about');
    }

}