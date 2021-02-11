import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponentPage } from './pages/home/home.component';
import { ContactComponentPage } from './pages/contact/contact.component';
import { NotFoundComponentPage } from './pages/not-found/not-found.component';
import { AboutMeComponentPage } from './pages/about-me/about-me.component';
import { SocialMediasComponentPage } from './pages/social-medias/social-medias.component';
import { MyProjectsComponentPage } from './pages/my-projects/my-projects.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogDetailsComponent } from './pages/blog-details/blog-details.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponentPage, data: { title: 'Home' } },
  { path: 'my-projects', component: MyProjectsComponentPage, data: { title: 'My Projects' } },
  { path: 'blog', component: BlogComponent, data: { title: 'Blog' } },
  { path: 'blog/:id', component: BlogDetailsComponent, data: { title: 'Blog' } },
  { path: 'blog/:id/:permalink', component: BlogDetailsComponent, data: { title: 'Blog' } },
  { path: 'about-me', component: AboutMeComponentPage, data: { title: 'About Me' } },
  { path: 'social-medias', component: SocialMediasComponentPage, data: { title: 'My Social Medias' } },
  { path: 'contact', component: ContactComponentPage, data: { title: 'Contact Me' } },
  { path: '**', component: NotFoundComponentPage, data: { title: '' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
