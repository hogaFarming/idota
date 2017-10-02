import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

export interface SearchResult {
  account_id: number;
  avatarfull: string;
  last_match_time: string;
  personaname: string;
  similarity: 0|1;
}

@Injectable()
export class PlayerSearchService {

  constructor(private http: HttpClient) { }

  search(keyword: string): Observable<SearchResult[]> {
    return this.http.get(`https://api.opendota.com/api/search?q=${keyword}&similarity=1`)
      .map(result => {
        console.log(result);
        return result as SearchResult[];
      });
  }
}
