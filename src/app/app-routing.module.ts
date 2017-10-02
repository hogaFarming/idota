import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import {PageNotFoundComponent} from "./not-found.component";

const routes: Route[] = [
  {
    path: '',
    redirectTo: '/matches',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
