import { Component } from '@angular/core';
import {AuthService} from "../core/auth.service";
import {Router} from "@angular/router";

import { PlayerInSearch } from '../core/player.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  message: string;

  constructor(private authService: AuthService, private router: Router) { }

  login(player: PlayerInSearch) {
    this.message = 'trying to log in...';
    this.authService.login(player.account_id).subscribe(() => {
      if (this.authService.isLoggedIn) {
        this.message = 'log in success.';
        let redirectUrl = this.authService.redirectUrl || '';
        this.router.navigate([redirectUrl]);
      } else {
        this.message = 'log in failed';
      }
    });
  }
}
