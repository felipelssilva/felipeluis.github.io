import { DOCUMENT } from '@angular/common';
import { Component, OnInit, Input, Inject } from '@angular/core';
import { AboutMe } from '../interfaces/aboutme';
import { AboutMeService } from '../services/aboutme.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.less']
})
export class AboutMeComponent implements OnInit {
  @Input() isForPage: boolean;
  loading: Boolean;
  error: Boolean;
  aboutMe: AboutMe;
  window: any;

  constructor(
    private aboutMeService: AboutMeService,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.window = this.document.defaultView;
  }

  ngOnInit(): void {
    this.loadAboutMe();
  }

  refreshPosts(evt): void {
    evt.preventDefault();
    evt.stopPropagation();

    this.window.location.reload();
  }

  loadAboutMe(): void {
    this.loading = true;
    this.error = false;

    this.aboutMeService
      .listAboutMe()
      .subscribe(aboutMe => {
        this.loading = false;
        this.aboutMe = aboutMe;
      },
        e => {
          this.loading = false;
          this.error = true;
        }
      );
  }
}
