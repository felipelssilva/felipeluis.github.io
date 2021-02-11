import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { ConstantsService } from 'src/app/common/services/constants.service';
import { Site } from './common/interfaces/site';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  site: Site[];
  window: any;

  public constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta,
    private _constant: ConstantsService,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.site = this._constant.site;
    this.window = this.document.defaultView;
  }

  ngOnInit() {
    //const appTitle = this.titleService.getTitle();

    this.router
      .events.pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          let child = this.activatedRoute.firstChild;
          while (child.firstChild) {
            child = child.firstChild;
          }

          if (child.snapshot.data['title']) {
            return child.snapshot.data['title'];
          }

          return '';
        })
      ).subscribe((ttl: string) => {
        this.titleService.setTitle(`${ttl.length > 0 ? ttl + ' - ' : ''}${this.site[0].author} - ${this.site[0].title}`);

        this.metaService.updateTag({ name: 'author', content: this.site[0].author });
        this.metaService.updateTag({ name: 'title', content: this.site[0].title });
        this.metaService.updateTag({ name: 'description', content: this.site[0].description });
        this.metaService.updateTag({ name: 'keywords', content: this.site[0].keywords });

        this.metaService.updateTag({ property: 'og:site_name', content: this.site[0].author });
        this.metaService.updateTag({ property: 'og:title', content: this.site[0].title });
        this.metaService.updateTag({ property: 'og:description', content: this.site[0].description });

      });
  }

  public onActivate(evt: any) {
    let scrollToTop = this.window.setInterval(() => {
      let pos = this.window.pageYOffset;
      if (pos > 0) {
        this.window.scrollTo(0, pos - 20);
      } else {
        this.window.clearInterval(scrollToTop);
      }
    }, 16);
  }
}
