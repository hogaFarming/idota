import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { UserDataService } from './user-data.service';

export interface Match {
  match_id: number;
  player_slot: number;
  radiant_win: boolean;
  duration: number;
  game_mode: number;
  lobby_type: number;
  hero_id: number;
  start_time: number;
  version: number;
  kills: number;
  deaths: number;
  assists: number;
  skill: number;
  lane: number;
  lane_role: number;
  is_roaming: boolean;
  cluster: number;
  leaver_status: number;
  party_size: number;
}

@Injectable()
export class MatchService {
  constructor(private http: HttpClient, private userDataService: UserDataService) { }

  getRecentMatches(): Observable<Array<Match>> {
    let url = `https://api.opendota.com/api/players/${this.userDataService.accountID}/recentMatches`;
    return this.http.get(url).map(result => result as Array<Match>);
  }
}
