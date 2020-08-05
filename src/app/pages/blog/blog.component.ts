import { Component, OnInit } from '@angular/core';
import { Blogs } from '../../common/interfaces/blogs';
import { BlogsService } from '../../common/services/blogs.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.less']
})
export class BlogComponent implements OnInit {
  loading: Boolean;
  blogs: Blogs;

  constructor(
    private blogsService: BlogsService
  ) { }

  ngOnInit(): void {
    this.loading = true;

    this.blogsService
      .listBlog()
      .subscribe(blogs => {
        this.loading = false;
        this.blogs = blogs;
      });
  }

}
