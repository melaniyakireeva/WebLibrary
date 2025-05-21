import { Routes } from '@angular/router';
import { ElectronicTableComponent } from './components/electronic-table/electronic-table.component';
import { ManufacturerPageComponent } from './components/manufacturer-page/manufacturer-page.component';
import { FavouriteEkbPageComponent } from './components/favourite-ekb-page/favourite-ekb-page.component';
import { ParametersPageComponent } from './components/parameters-page/parameters-page.component';
import { ChatPageComponent } from './components/chat-page/chat-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AuthPageComponent } from './components/auth-page/auth-page.component';
import { NavigationPageComponent } from './components/navigation-page/navigation-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ReferencesComponent } from './components/references/references.component';
import { HelpPageComponent } from './components/help-page/help-page.component';
import { AccountProfileComponent } from './components/account-profile/account-profile.component';
import { AnalyticsPageComponent } from './components/analytics-page/analytics-page.component';
import { FilePageComponent } from './components/file-page/file-page.component';
import { AccountsPageComponent } from './components/accounts-page/accounts-page.component';
import { adminGuardGuard } from './guard/admin/admin-guard.guard';
import { LogsTableComponent } from './components/logs-table/logs-table.component';
import { ElectronicsPageComponent } from './components/electronics-page/electronics-page.component';
import { ChangePasswordPageComponent } from './components/change-password-page/change-password-page.component';
import { userGuard } from './guard/user/user.guard';
import { BookPageComponent } from './components/book-page/book-page.component';

export const routes: Routes = [
  {
    path: 'auth',
    component: AuthPageComponent,
  },
  {
    path: 'register',
    component: RegisterPageComponent,
  },
  {
    path: 'changepassword',
    component: ChangePasswordPageComponent,
  },
  {
    path: '',
    component: NavigationPageComponent,
    canActivate: [userGuard],
    children: [
      { path: '', component: HomePageComponent },
      { path: 'books', component: BookPageComponent },
      { path: 'authors', component: ManufacturerPageComponent },
      { path: 'genres', component: ParametersPageComponent },
      { path: 'login', component: AuthPageComponent },
      { path: 'help', component: HelpPageComponent },
      { path: 'account', component: AccountProfileComponent },
      {
        path: 'accounts',
        component: AccountsPageComponent,
        canActivate: [adminGuardGuard],
      },
    ],
  },
  { path: 'notFound', component: NotFoundComponent },
  { path: '**', redirectTo: '/notFound' },
];
