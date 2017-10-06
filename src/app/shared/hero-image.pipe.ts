import { Pipe, PipeTransform } from '@angular/core';

import { HeroService } from '../core/hero.service';

@Pipe({
  name: 'heroImage',
  pure: false
})
export class HeroImagePipe implements PipeTransform {
  _latestValue: string;
  _init: boolean;
  constructor(private heroService: HeroService) {}
  transform(heroId: number, ...args: any[]): string {
    // return this.heroService.getHeroImage(heroId);
    if (!this._init) {
      this.heroService.heroes.subscribe(() => {
        this._latestValue = this.heroService.getHeroImage(heroId);
      });
      this._init = true;
    }
    return this._latestValue || '';
  }
}
