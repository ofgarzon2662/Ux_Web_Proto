import {Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";
import {ListComponent} from "./list/list.component";
import {CreateComponent} from "./create/create.component";
import {UpdateComponent} from "./update/update.component";
import {CancelComponent} from "./cancel/cancel.component";
import {PasswordResetComponent} from "./password-reset/password-reset.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'list',
    component: ListComponent,
    children: [
      {
        path: 'cancel',
        component: CancelComponent
      }
    ]
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'update',
    component: UpdateComponent
  },
  {
    path: 'password-reset',
    component: PasswordResetComponent
  }
];
