import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/views/welcome/welcome.component';
import { CurriculumVitaeComponent } from './components/views/curriculum-vitae/curriculum-vitae.component';
import { AboutMeComponent } from './components/views/about-me/about-me.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'cv', component: CurriculumVitaeComponent },
  { path: 'sobre/mi', component: AboutMeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
