import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpModule} from "@angular/http";

import { PlayerSearchComponent } from './player-search/player-search.component';
import {PlayerSearchService} from "./player-search/player-search.service";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule
  ],
  exports: [PlayerSearchComponent],
  providers: [PlayerSearchService],
  declarations: [PlayerSearchComponent]
})
export class SharedModule { }
