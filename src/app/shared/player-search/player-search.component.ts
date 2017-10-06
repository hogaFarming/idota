import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {PlayerService, PlayerInSearch} from "../../core/player.service";

@Component({
  selector: 'app-player-search',
  templateUrl: './player-search.component.html',
  styleUrls: ['./player-search.component.css']
})
export class PlayerSearchComponent implements OnInit {
  searchTerm = '韩寒会画画后悔画韩红';
  searchResult: Observable<PlayerInSearch[]>;

  @Output() onSelect = new EventEmitter<PlayerInSearch>();

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

  search(): void {
    this.searchResult = this.playerService.search(this.searchTerm);
  }

  select(player: PlayerInSearch): void {
    this.onSelect.emit(player);
  }

}
