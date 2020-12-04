import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FrontPageComponent } from './front-page/front-page.component';

const routes: Routes = [
  {path:'movies', component: FrontPageComponent},
  {path:'about', component: AboutComponent},
  {path: '**', redirectTo: 'movies', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }