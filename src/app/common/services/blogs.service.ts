import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Blogs } from '../interfaces/blogs';

@Injectable()
export class BlogsService {

    constructor(private http: HttpClient) {
    }

    loadBlog(permalink: String) {
        return this.http.get<Blogs>(`/api/blogs/${permalink}`);
    }

    listBlog() {
        return this.http.get<Blogs>('/api/blogs');
    }

    lastsPosts() {
        return this.http.get<Blogs>('/api/blogs/lasts-posts');
    }
}