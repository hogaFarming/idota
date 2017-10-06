import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

export interface PlayerInSearch {
  account_id: number;
  avatarfull: string;
  last_match_time: string;
  personaname: string;
  similarity: 0|1;
}

@Injectable()
export class PlayerService {

  constructor(private http: HttpClient) { }

  search(searchTerm: string): Observable<PlayerInSearch[]> {
    return this.http.get(`https://api.opendota.com/api/search?q=${searchTerm}&similarity=1`)
      .map(result => result as PlayerInSearch[]);
  }

  getPlayerData(accountID: number): Observable<any> {
    return this.http.get(`https://api.opendota.com/api/players/${accountID}`);
  }
}
