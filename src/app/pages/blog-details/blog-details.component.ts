import { ActivatedRoute } from "@angular/router";
import { Component, Inject, OnInit } from '@angular/core';
import { Blogs } from '../../common/interfaces/blogs';
import { BlogsService } from '../../common/services/blogs.service';
import { DOCUMENT } from "@angular/common";

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.less'],
})
export class BlogDetailsComponent implements OnInit {
  loading: Boolean;
  error: Boolean;
  id: String;
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
    this.loading = true;
    this.error = false;
    this.id = this.route.snapshot.params.id;

    this.blogsService
      .loadBlog(this.id)
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

  getUrl(): string {
    return this.window.location.href;
  }

}
