import { Component, Inject, OnInit } from '@angular/core';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookSquare,
  faInstagram,
  faTwitterSquare,
  faLinkedin,
  faGithubSquare
} from '@fortawesome/free-brands-svg-icons';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-social-medias',
  templateUrl: './social-medias.component.html',
  styleUrls: ['./social-medias.component.less']
})
export class SocialMediasComponent implements OnInit {
  faFacebookSquare = faFacebookSquare;
  faInstagram = faInstagram;
  faTwitterSquare = faTwitterSquare;
  faLinkedin = faLinkedin;
  faGithubSquare = faGithubSquare;
  isSocialMediasPage: boolean;
  window: any;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.window = this.document.defaultView;
  }

  ngOnInit(): void {
    this.isSocialMediasPage = this.getCurrentPage();
  }

  getCurrentPage() {
    return this.window.location.href.indexOf('/social-medias') > 0;
  }

}
