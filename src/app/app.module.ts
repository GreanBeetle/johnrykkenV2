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
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { WelcomeFooterComponent } from './welcome-footer/welcome-footer.component';
import { WelcomeWritingComponent } from './welcome-writing/welcome-writing.component';


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
    WelcomeWritingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot([
      {
        path: '',
        component: WelcomeComponent
      },
      {
        path: 'crux',
        component: CruxComponent
      },
      {
        path: 'code',
        component: CodeComponent
      },
      {
        path: 'portfolio',
        component: PortfolioComponent
      },
      {
        path: 'admin',
        component: AdminComponent
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
