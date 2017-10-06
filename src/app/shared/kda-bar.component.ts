import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-kda-bar',
  template: `
    <div class="kda-bar">
      <div class="columns">
        <div class="column">{{k}}</div>
        <div class="column">{{d}}</div>
        <div class="column">{{a}}</div>
      </div>
      <div class="kda-bar__bar" style="height: 4px;">
        <div class="kda-bar__kill" [ngStyle]="{'width.%': k/(k+d+a)*100}"></div>
        <div class="kda-bar__death" [ngStyle]="{'width.%': d/(k+d+a)*100}"></div>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; }
    .columns { margin-bottom: 0; }
    .kda-bar__bar { display: flex; height: 4px; background: #727272; }
    .kda-bar__kill { height: 100%; background: rgb(102, 187, 106); }
    .kda-bar__death { height: 100%; background: rgb(255, 76, 76); }
  `]
})
export class KDABarComponent implements OnInit {
  @Input() k: number;
  @Input() d: number;
  @Input() a: number;

  constructor() { }

  ngOnInit() { }
}
