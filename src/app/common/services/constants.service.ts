import { Injectable } from '@angular/core';
import { Projects } from '../interfaces/projects';
import { Certificates } from '../interfaces/certificates';
import { Graduations } from '../interfaces/graduations';


@Injectable()
export class ConstantsService {
  readonly author: string = 'Felipe Luis'
  readonly title: string = 'Felipe Luis - SAP C/4HANA Front-end Developer';
  readonly description: string = 'I\'m working on with development for SAP C/4HANA Front-end';
  readonly keywords: string = 'job, dev, developer, freelancer, freela, web, desenvolvimento, front-end, frontend, sap, hybris, c4hana, hana, c4, c4 hana, jQuery, JavaScript, Vanilla, ES6, ES5, React, Angular, Grunt, Gulp, SASS, Less, CSS3';
  readonly urlBase: string = window.location.pathname;
  readonly actualUrl: string = window.location.href;
  readonly year: number = new Date().getFullYear();
  readonly projects: Projects[] = [
    {
      'title': 'In my old website I used some these frameworks, languages and preprocessors:',
      'released': true,
      'image': 'my-old-website.jpg',
      'description': '<ul><li>PHP</li><li>JavaScript</li><li>jQuery</li><li>LESS</li><li>Gulp</li><li>Bootstrap 4</li></ul>',
      'url': 'https://felipeluis-last-version.herokuapp.com/'
    },
    {
      'title': 'In Uberaba TI I use some these frameworks, languages:',
      'released': true,
      'image': 'uberaba-ti.jpg',
      'description': '<ul><li>PHP - Laravel 5.7</li><li>React</li><li>jQuery</li><li>Font Awesome</li><li>Bootstrap 4</li></ul>',
      'url': 'https://uberabati.com.br/'
    },
    {
      'title': 'The Rentatec website was fully developed by me, using:',
      'released': true,
      'image': 'rebranding-rentatec.jpg',
      'description': '<ul><li>PHP - Wordpress</li><li>JavaScript</li><li>jQuery</li><li>CSS3</li><li>Bootstrap 3</li></ul>',
      'url': 'https://www.rentatec.com.br/'
    },
    {
      'title': 'The Verbal website had some internal/layout bugs fixed, using:',
      'released': false,
      'image': 'agencia-verbal-comunicacoes.jpg',
      'description': '<ul><li>PHP</li><li>JavaScript</li><li>jQuery</li><li>CSS</li><li>Bootstrap 3</li><li>Fixed some layout bug\'s</li></ul>',
      'url': 'http://verbal.com.br/'
    }
  ];
  readonly certificates: Certificates[] = [
    {
      'title': 'Routing in Spartacus',
      'description': '<ul><li>HTML & CSS (SASS)</li><li>TypeScript</li><li>Angular 9 +</li><li>RxJS</li><li>Yarn</li></ul>',
      'image': 'sparta1_open_badge.png',
      'company': 'open SAP',
      'url': 'https://open.sap.com/verify/xibih-tinod-bocyn-hatat-tydil'
    },
    {
      'title': 'JavaScript',
      'description': '<ul><li>Sprite</li><li>ES6</li></ul>',
      'image': 'projeto-carreira-javascript.png',
      'company': 'Alura',
      'url': 'https://cursos.alura.com.br/certificate/2c987640-9fb7-4a17-8c4f-5f7e6784ed66'
    },
    {
      'title': 'JavaScript',
      'description': '<ul><li>Variables</li><li>Ajax</li><li>Loops</li><li>Arrays</li><li>Events</li><li>Good Practices</li></ul>',
      'image': 'javascript-programando-na-linguagem-web.png',
      'company': 'Alura',
      'url': 'https://cursos.alura.com.br/certificate/03f38a85-1fab-4d6e-9620-5da016b5d376'
    },
    {
      'title': 'jQuery: part one',
      'description': '<ul><li>Element manipulation</li><li>Events</li></ul>',
      'image': 'jquery-a-biblioteca-do-mercado.png',
      'company': 'Alura',
      'url': 'https://cursos.alura.com.br/certificate/13b7f824-04f5-4b6e-8a64-ee4ef6ea8283'
    },
    {
      'title': 'jQuery: part two',
      'description': '<ul><li>Animations</li><li>Ajax</li><li>Error handling</li><li>Same Origin Policy and Cors</li></ul>',
      'image': 'jquery-a-biblioteca-do-mercado-parte-2.png',
      'company': 'Alura',
      'url': 'https://cursos.alura.com.br/certificate/f42bc7a1-d716-4fc0-85e0-d8ad8250bb46'
    }
  ];
  readonly graduations: Graduations[] = [
    {
      'title': 'Analysis and Systems Development (in progress)',
      'image': 'puc-pr.png',
      'description': 'Pontifícia Universidade Católica do Paraná - PUCPR'
    }
  ];

}
