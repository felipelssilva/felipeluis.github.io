import { Component, OnInit } from '@angular/core';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-social-medias',
  templateUrl: './social-medias.component.html',
  styleUrls: ['./social-medias.component.sass']
})
export class SocialMediasComponent implements OnInit {
  faFacebookF = faFacebookF;
  faCircleNotch = faCircleNotch;

  constructor() { }

  ngOnInit(): void {
  }

}
