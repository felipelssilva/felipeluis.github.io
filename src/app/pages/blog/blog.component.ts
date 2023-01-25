import { Component, Inject, OnInit } from '@angular/core';
import { Blogs } from '../../common/interfaces/blogs';
import { BlogsService } from '../../common/services/blogs.service';
import { faExclamation, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.less']
})
export class BlogComponent implements OnInit {
  loading: Boolean;
  blogs: any;
  faExclamation = faExclamation;
  faAngleDown = faAngleDown;
  window: any;

  constructor(
    private blogsService: BlogsService,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.window = this.document.defaultView;
  }

  ngOnInit(): void {
    this.loading = true;

    this.blogsService
      .listBlog()
      .subscribe(blogs => {
        this.loading = false;
        this.blogs = blogs;
      });
  }

  scrollToPosts(evt) {
    evt.preventDefault();

    // let scrollToTop = this.window.setInterval(() => {
    //   let pos = this.document.querySelector('.cards-components').getBoundingClientRect().top;
    //   if (pos > this.window.pageYOffset) {
        this.window.scrollTo(0, 0);
    //   } else {
    //     this.window.clearInterval(scrollToTop);
    //   }
    // }, 1);
  }

}
