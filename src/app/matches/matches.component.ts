import { Component, OnInit } from '@angular/core';

import {MatchService, Match} from '../core/match.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  matches: Array<Match> = [];

  constructor(private matchService: MatchService) { }

  ngOnInit() {
    this.getRecentMatches();
  }

  getRecentMatches() {
    this.matchService.getRecentMatches().subscribe(matches => {
      this.matches = matches;
    });
  }

}
