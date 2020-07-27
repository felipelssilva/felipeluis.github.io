import { Injectable } from '@angular/core';

@Injectable()
export class ConstantsService {
  readonly author: string = 'Felipe Luis'
  readonly title: string = 'Felipe Luis - SAP C/4HANA Front-end Developer';
  readonly description: string = 'I\'m working on with development for SAP C/4HANA Front-end';
  readonly keywords: string = 'job, dev, developer, freelancer, freela, web, desenvolvimento, front-end, frontend, sap, hybris, c4hana, hana, c4, c4 hana, jQuery, JavaScript, Vanilla, ES6, ES5, React, Angular, Grunt, Gulp, SASS, Less, CSS3';
  readonly urlBase: string = window.location.pathname;
  readonly actualUrl: string = window.location.href;
  readonly year: number = new Date().getFullYear();
  readonly projects: any = [
    {
      "title": "In my old website I used some these frameworks, languages and preprocessors:",
      "released": true,
      "image": "my-old-website.jpg",
      "description": "<ul><li>PHP</li><li>JavaScript</li><li>jQuery</li><li>LESS</li><li>Gulp</li><li>Bootstrap 4</li></ul>",
      "url": "https://felipeluis-last-version.herokuapp.com/"
    },
    {
      "title": "In Uberaba TI I use some these frameworks, languages:",
      "released": true,
      "image": "uberaba-ti.jpg",
      "description": "<ul><li>PHP - Laravel 5.7</li><li>React</li><li>jQuery</li><li>Font Awesome</li><li>Bootstrap 4</li></ul>",
      "url": "https://uberabati.com.br/"
    },
    {
      "title": "The Rentatec website was fully developed by me, using:",
      "released": true,
      "image": "rebranding-rentatec.jpg",
      "description": "<ul><li>PHP - Wordpress</li><li>JavaScript</li><li>jQuery</li><li>CSS3</li><li>Bootstrap 3</li></ul>",
      "url": "https://www.rentatec.com.br/"
    },
    {
      "title": "The Verbal website had some internal/layout bugs fixed, using:",
      "released": false,
      "image": "agencia-verbal-comunicacoes.jpg",
      "description": "<ul><li>PHP</li><li>JavaScript</li><li>jQuery</li><li>CSS</li><li>Bootstrap 3</li><li>Fixed some layout bug's</li></ul>",
      "url": "http://verbal.com.br/"
    }
  ];
}
