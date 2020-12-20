import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-load-image',
  templateUrl: './lazy-load-image.component.html',
  styleUrls: ['./lazy-load-image.component.less']
})
export class LazyLoadImageComponent implements OnInit {
  @Input() image: String;
  @Input() title: String;
  @Input() style: String;

  constructor() { }

  ngOnInit(): void {
  }

}
