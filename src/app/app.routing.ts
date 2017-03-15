
import { AboutUserComponent } from './about/about-user.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'about/:username', component: AboutUserComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: NotFoundComponent }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);