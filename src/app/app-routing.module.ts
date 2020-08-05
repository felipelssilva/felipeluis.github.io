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
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponentPage},
  {path: 'my-projects', component: MyProjectsComponentPage},
  {path: 'blog', component: BlogComponent},
  {path: 'blog/:permalink', component: BlogDetailsComponent},
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
