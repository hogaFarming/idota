import { NgModule } from '@angular/core';
import {Route, RouterModule} from "@angular/router";
import { MatchesComponent } from './matches.component';
import {Sub1Component} from "./sub1/sub1.component";
import {Sub2Component} from "./sub2/sub2.component";
import {AuthGuard} from "../core/auth-guard.service";

const matchesRoutes: Route[] = [
  {
    path: 'matches',
    component: MatchesComponent,
    canActivate: [AuthGuard]
    // ,
    // children: [
    //   { path: '', redirectTo: 'sub1', pathMatch: 'prefix' },
    //   { path: 'sub1', component: Sub1Component },
    //   { path: 'sub2', component: Sub2Component }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(matchesRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class MatchesRoutingModule { }
