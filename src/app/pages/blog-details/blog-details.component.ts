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
  permalink: String;
  blog: Blogs;
  //faCircleNotch = faCircleNotch;

  constructor(
    private route: ActivatedRoute,
    private blogsService: BlogsService
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.permalink = this.route.snapshot.params.permalink;

    this.blogsService
      .loadBlog(this.permalink)
      .subscribe(blog => {
        this.loading = false;
        this.blog = blog[0];
      });

  }

}
