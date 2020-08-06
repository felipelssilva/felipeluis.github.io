import { Component, OnInit } from '@angular/core';
import { Blogs } from '../../common/interfaces/blogs';
import { BlogsService } from '../../common/services/blogs.service';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.less']
})
export class BlogComponent implements OnInit {
  loading: Boolean;
  blogs: any;
  faExclamation = faExclamation;

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
