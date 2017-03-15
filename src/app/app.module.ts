import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { AUTH_PROVIDERS, AuthHttp, provideAuth } from 'angular2-jwt';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { appRouting } from './app.routing';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutUserComponent } from './about/about-user.component';
import { Auth } from './auth.service';
import { UserService } from './shared/services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NotFoundComponent,
    AboutUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRouting
  ],
  providers: [UserService,
    Http, Auth,
    AuthHttp,
    provideAuth({
      headerName: 'Authorization',
      headerPrefix: 'bearer',
      tokenName: 'token',
      tokenGetter: (() => localStorage.getItem(this.tokenName)),
      globalHeaders: [{ 'Content-Type': 'application/json' }],
      noJwtError: true
    })],
  bootstrap: [AppComponent]
})
export class AppModule { }
