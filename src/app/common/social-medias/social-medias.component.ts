import { Component, OnInit } from '@angular/core';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookSquare,
  faInstagram,
  faTwitterSquare,
  faLinkedin,
  faGithubSquare
} from '@fortawesome/free-brands-svg-icons';

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

  constructor() { }

  ngOnInit(): void {
    this.isSocialMediasPage = this.getCurrentPage();
  }

  getCurrentPage() {
    return window.location.pathname === '/social-medias';
  }


}
