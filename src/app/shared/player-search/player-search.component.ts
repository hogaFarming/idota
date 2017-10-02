import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {PlayerSearchService, SearchResult} from "./player-search.service";

@Component({
  selector: 'app-player-search',
  templateUrl: './player-search.component.html',
  styleUrls: ['./player-search.component.css']
})
export class PlayerSearchComponent implements OnInit {
  searchTerm = '韩寒会画画后悔画韩红';
  searchResult: Observable<SearchResult[]>;

  constructor(private playerSearchService: PlayerSearchService) { }

  ngOnInit() {
  }

  search() {
    this.searchResult = this.playerSearchService.search(this.searchTerm);
  }

}
