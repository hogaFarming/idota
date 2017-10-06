import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styles: [`
    .tabs li { outline: none; }
  `]
})
export class NavMenuComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
