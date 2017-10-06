import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import {AuthService} from "./auth.service";
import {AuthGuard} from "./auth-guard.service";
import {UserDataService} from './user-data.service';
import {PlayerService} from './player.service';
import {MatchService} from './match.service';
import {HeroService} from './hero.service';
import { SiderComponent } from './sider/sider.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

@NgModule({
  imports: [
    HttpClientModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    HttpClientModule,
    SiderComponent,
    NavMenuComponent
  ],
  declarations: [
    SiderComponent,
    NavMenuComponent
  ],
  providers: [
    AuthService,
    AuthGuard,
    UserDataService,
    PlayerService,
    MatchService,
    HeroService
  ],
})
export class CoreModule {
}
