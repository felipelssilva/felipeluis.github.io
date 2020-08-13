import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from '@angular/core';
import { Blogs } from '../../common/interfaces/blogs';
import { BlogsService } from '../../common/services/blogs.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.less'],
})
export class BlogDetailsComponent implements OnInit {
  loading: Boolean;
  error: String;
  id: String;
  blogs: Blogs;
  blogsId: String;
  blogsTitle: String;

  constructor(
    private route: ActivatedRoute,
    private blogsService: BlogsService
  ) { }

  ngOnInit(): void {
    this.loading = true;
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
          this.error = 'error message';
        }
      );
  }

  getUrl(): string {
    return window.location.href;
  }

}
