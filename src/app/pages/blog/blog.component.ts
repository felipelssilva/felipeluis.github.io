import { Component, OnInit } from '@angular/core';
import { Blogs } from '../../common/interfaces/blogs';
import { BlogsService } from '../../common/services/blogs.service';
import { faExclamation, faAngleDown } from '@fortawesome/free-solid-svg-icons';

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
  // <i class="fas fa-angle-down"></i>

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

  scrollToPosts(evt) {
    evt.preventDefault();

    let scrollToTop = window.setInterval(() => {
      let pos = document.querySelector('.cards-components').getBoundingClientRect().top;
      if (pos > window.pageYOffset) {
        window.scrollTo(0, pos - 20);
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 1);
  }

}
