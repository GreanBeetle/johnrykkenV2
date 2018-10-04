import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { CruxComponent } from './crux/crux.component';
import { CodeComponent } from './code/code.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AdminComponent } from './admin/admin.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';
import { AuthGuardService as AuthGuard } from './auth-guard.service';

const appRoutes: Routes = [
  {
    path: '', component: WelcomeComponent
  },
  {
    path: 'crux', component: CruxComponent
  },
  // removed until code component is complete
  // {
  //   path: 'code', component: CodeComponent
  // },
  {
    path: 'portfolio', component: PortfolioComponent
  },
  {
    path: 'admin', component: AdminComponent
  },
  {
    path: 'signup', component: UserSignupComponent
  },
  {
    path: 'login', component: UserLoginComponent
  },
  {
    path: 'article/:id',
    component: ArticleDetailComponent
  },
  {
    path: 'article-edit/:id',
    component: ArticleEditComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
