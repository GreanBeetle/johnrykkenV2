import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
    WelcomeSkillsComponent
  ],
  imports: [
    BrowserModule,
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
