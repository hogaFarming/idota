import { Component } from '@angular/core';
import {AuthService} from "../core/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  message: string;

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    this.message = 'trying to log in...';
    this.authService.login().subscribe(() => {
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
