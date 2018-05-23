import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { ServicesComponent } from './services/services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TeamComponent } from './team/team.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: 'team', component: TeamComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contactUs', component: ContactUsComponent },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Heroes List' }
  },
 
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    ContactUsComponent,
    AboutUsComponent,
    PageNotFoundComponent,
    TeamComponent,
    HomeComponent
  ],
  imports: [ RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
