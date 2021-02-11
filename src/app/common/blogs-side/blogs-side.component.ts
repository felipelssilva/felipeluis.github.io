import { Component, Inject, OnInit } from '@angular/core';
import { BlogsService } from '../services/blogs.service';
import { ActivatedRoute } from '@angular/router';
import { Blogs } from '../interfaces/blogs';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-blogs-side',
  templateUrl: './blogs-side.component.html',
  styleUrls: ['./blogs-side.component.less']
})
export class BlogsSideComponent implements OnInit {
  loading: Boolean;
  error: Boolean;
  blogs: Blogs;
  blogsId: String;
  blogsTitle: String;
  window: any;

  constructor(
    private route: ActivatedRoute,
    private blogsService: BlogsService,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.window = this.document.defaultView;
  }


  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    this.loading = true;
    this.error = false;

    this.blogsService
      .lastsPosts()
      .subscribe(blogs => {
        this.loading = false;
        this.blogs = blogs;
        this.blogsId = blogs.id
        this.blogsTitle = blogs.title
      },
        e => {
          this.loading = false;
          this.error = true;
        }
      );
  }

  refreshPosts(evt): void {
    evt.preventDefault();
    evt.stopPropagation();

    this.window.location.reload()
  }
}
