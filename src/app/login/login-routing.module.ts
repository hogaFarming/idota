import {NgModule} from '@angular/core';

import {LoginComponent} from './login.component';
import {Route, RouterModule} from "@angular/router";

const loginRoutes: Route[] = [
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(loginRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [],
  providers: [],
})
export class LoginRoutingModule {
}
