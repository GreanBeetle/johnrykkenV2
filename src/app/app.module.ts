import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule } from '@angular/router';
import { CruxComponent } from './crux/crux.component';
import { CodeComponent } from './code/code.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AdminComponent } from './admin/admin.component';
import { WelcomeAboutmeComponent } from './welcome-aboutme/welcome-aboutme.component';
import { WelcomeSkillsComponent } from './welcome-skills/welcome-skills.component';
import { WelcomeCruxComponent } from './welcome-crux/welcome-crux.component';
import { masterFirebaseConfig } from './api-keys';
import { WelcomeFooterComponent } from './welcome-footer/welcome-footer.component';
import { WelcomeWritingComponent } from './welcome-writing/welcome-writing.component';
import { NasaApiComponent } from './nasa-api/nasa-api.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserLoginComponent } from './user-login/user-login.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomeComponent,
    CruxComponent,
    CodeComponent,
    PortfolioComponent,
    AdminComponent,
    WelcomeAboutmeComponent,
    WelcomeSkillsComponent,
    WelcomeCruxComponent,
    WelcomeFooterComponent,
    WelcomeWritingComponent,
    NasaApiComponent,
    UserSignupComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
