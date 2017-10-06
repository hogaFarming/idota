import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatchesRoutingModule} from "./matches-routing.module";
import {MatchesComponent} from "./matches.component";
import { SharedModule } from '../shared/shared.module';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatchesRoutingModule
  ],
  declarations: [
    MatchesComponent
  ]
})
export class MatchesModule { }
