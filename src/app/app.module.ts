import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/layouts/menu/menu.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { WelcomeComponent } from './components/views/welcome/welcome.component';
import { AboutMeComponent } from './components/views/about-me/about-me.component';
import { CurriculumVitaeComponent } from './components/views/curriculum-vitae/curriculum-vitae.component';
import { BlogComponent } from './components/views/blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    WelcomeComponent,
    AboutMeComponent,
    CurriculumVitaeComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
