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
  id: String;
  blogs: Blogs;
  //faCircleNotch = faCircleNotch;

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
      });

  }

}
