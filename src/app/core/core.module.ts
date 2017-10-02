import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";

import {AuthService} from "./auth.service";
import {AuthGuard} from "./auth-guard.service";

@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    AuthService,
    AuthGuard
  ],
})
export class CoreModule {
}
