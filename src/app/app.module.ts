import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'bulma/css/bulma.css';

import { AppComponent } from './app.component';
import {CoreModule} from "./core/core.module";
import {SharedModule} from "./shared/shared.module";
import {MatchesModule} from "./matches/matches.module";
import {AppRoutingModule} from "./app-routing.module";
import {LoginModule} from "./login/login.module";
import {PageNotFoundComponent} from "./not-found.component";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    LoginModule,
    MatchesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
