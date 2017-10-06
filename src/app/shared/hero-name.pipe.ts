import { Pipe, PipeTransform } from '@angular/core';

import { HeroService } from '../core/hero.service';

@Pipe({
  name: 'heroName',
  pure: false
})
export class HeroNamePipe implements PipeTransform {
  _latestValue: string;
  _latestReturnedValue: string;
  _init: boolean;
  constructor(private heroService: HeroService) {}
  transform(heroId: number, ...args: any[]): string {
    if (!this._init) {
      this.heroService.heroes.subscribe(() => {
        this._latestValue = this.heroService.getHeroLocalizedName(heroId);
      });
      this._init = true;
    }
    return this._latestValue || '';
  }
}
