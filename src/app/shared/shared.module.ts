import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";

import { PlayerSearchComponent } from './player-search/player-search.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { KDABarComponent } from './kda-bar.component';
import { TimeFromNowPipe } from './time-from-now.pipe';
import { HeroNamePipe } from './hero-name.pipe';
import { HeroImagePipe } from './hero-image.pipe';
import { GameModePipe } from './game-mode.pipe';
import { SkillPipe } from './skill.pipe';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule
  ],
  exports: [
    PlayerSearchComponent,
    TimeFromNowPipe,
    UserProfileComponent,
    KDABarComponent,
    HeroNamePipe,
    HeroImagePipe,
    GameModePipe,
    SkillPipe
  ],
  providers: [],
  declarations: [
    PlayerSearchComponent,
    TimeFromNowPipe,
    UserProfileComponent,
    KDABarComponent,
    HeroNamePipe,
    HeroImagePipe,
    GameModePipe,
    SkillPipe
  ]
})
export class SharedModule { }
