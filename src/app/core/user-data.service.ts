import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { PlayerService } from './player.service';

const STORAGE_CURRENT_USER = 'idota_current_user';

export interface UserData {
  // profile
  account_id: number;
  personaname: string;
  name: string;
  cheese: number;
  steamid: string;
  avatar: string;
  avatarmedium: string;
  avatarfull: string;
  profileurl: string;
  last_login: string;
  loccountrycode: string;

  // mmr_estimate
  mmr_estimate: number;
  mmr_estimate_stdDev: number;
  mmr_estimate_n: number;

  // other
  tracked_until: string;
  solo_competitive_rank: string;
  competitive_rank: string;
}

@Injectable()
export class UserDataService {

  accountID: number;
  currentUserData = new BehaviorSubject<UserData>(null);

  static flattenResult(data: any): UserData {
    let { tracked_until, solo_competitive_rank, competitive_rank, mmr_estimate, profile } = data;
    let userData = {
      ...profile,
      tracked_until,
      solo_competitive_rank,
      competitive_rank,
      mmr_estimate: mmr_estimate.estimate,
      mmr_estimate_stdDev: mmr_estimate.stdDev,
      mmr_estimate_n: mmr_estimate.n
    };
    return userData as UserData;
  }

  constructor(private playerService: PlayerService) { }

  setCurrentUser(): void;
  setCurrentUser(accountID: number): Observable<boolean>;
  setCurrentUser(accountID?: number): Observable<boolean>|void {
    if (!accountID) {
      this.accountID = null;
      this.currentUserData.next(null);
      return;
    }

    return this.playerService.getPlayerData(accountID)
      .do(result => {
        let userData = UserDataService.flattenResult(result);
        this.currentUserData.next(userData);
        this.accountID = accountID;
      })
      .map(() => true)
      .catch(() => Observable.of(false));
  }
}
