import { Component, OnInit, Input } from '@angular/core';
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

  constructor(
    private aboutMeService: AboutMeService
  ) {
  }

  ngOnInit(): void {
    this.loadAboutMe();
  }

  refreshPosts(evt): void {
    evt.preventDefault();
    evt.stopPropagation();

    window.location.reload()
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
