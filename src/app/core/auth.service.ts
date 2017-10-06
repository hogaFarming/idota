import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

import { PlayerInSearch, PlayerService } from './player.service';
import { UserDataService } from './user-data.service';

const STORAGE_ACCOUNT = 'idota_current_account';

@Injectable()
export class AuthService {
  isLoggedIn = false;

  redirectUrl: string;

  constructor(private playerService: PlayerService,
              private userDataService: UserDataService) {
    let accountID = this.getStorageAccount();
    if (accountID) {
      this.isLoggedIn = true;
      userDataService.accountID = accountID;
      userDataService.setCurrentUser(accountID).subscribe();
    }
  }

  getStorageAccount(): number {
    let accountID = localStorage.getItem(STORAGE_ACCOUNT);
    if (accountID) { return +accountID; }
    return null;
  }

  login(accountID: number): Observable<boolean> {
    return this.userDataService.setCurrentUser(accountID)
      .do(isSuccess => {
        if (isSuccess) {
          localStorage.setItem(STORAGE_ACCOUNT, accountID + '');
          this.isLoggedIn = true;
        }
      });
  }

  logout(): void {
    this.isLoggedIn = false;
    localStorage.removeItem(STORAGE_ACCOUNT);
    this.userDataService.setCurrentUser(null);
  }
}
