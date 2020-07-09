import { Injectable } from '@angular/core';

@Injectable()
export class ConstantsService {
  readonly author: string = 'Felipe Luis'
  readonly title: string = 'Felipe Luis - SAP C/4HANA Front-end Developer';
  readonly description: string = 'I\'m working on with development for SAP C/4HANA Front-end';
  readonly keywords: string = 'job, dev, developer, freelancer, freela, web, desenvolvimento, front-end, frontend, sap, hybris, c4hana, hana, c4, c4 hana, jQuery, JavaScript, Vanilla, ES6, ES5, React, Angular, Grunt, Gulp, SASS, Less, CSS3';
  readonly urlBase: string = window.location.pathname;
  readonly actualUrl: string = window.location.href;
}
