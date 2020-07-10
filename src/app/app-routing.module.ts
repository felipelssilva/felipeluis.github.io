import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponentPage } from './pages/home/home.component';
import { ContactComponentPage } from './pages/contact/contact.component';
import { NotFoundComponentPage } from './pages/not-found/not-found.component';
import { AboutMeComponentPage } from './pages/about-me/about-me.component';
import { SocialMediasComponentPage } from './pages/social-medias/social-medias.component';


const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponentPage},
  {path: 'about-me', component: AboutMeComponentPage},
  {path: 'social-medias', component: SocialMediasComponentPage},
  {path: 'contact', component: ContactComponentPage},
  {path: '**', component: NotFoundComponentPage},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
