import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatchesRoutingModule} from "./matches-routing.module";
import {MatchesComponent} from "./matches.component";
import { Sub1Component } from './sub1/sub1.component';
import { Sub2Component } from './sub2/sub2.component';



@NgModule({
  imports: [
    CommonModule,
    MatchesRoutingModule
  ],
  declarations: [MatchesComponent, Sub1Component, Sub2Component]
})
export class MatchesModule { }
