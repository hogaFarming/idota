import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export interface Hero {
  attack_type: string;
  id: number;
  legs: number;
  localized_name: string;
  name: string;
  primary_attr: 'agi'|'int'|'str';
  roles: Array<string>;
}

const HERO_NAME_PERFIX = 'npc_dota_hero_';

@Injectable()
export class HeroService {
  heroes = new BehaviorSubject<Hero[]>([]);

  constructor(private httpClient: HttpClient) {
    this.getHeroesData();
  }

  getHeroesData(): void {
    this.httpClient.get('https://api.opendota.com/api/heroes')
      .subscribe((result: Hero[]) => this.heroes.next(result));
  }

  getHero(heroId): Hero {
    return _.find(this.heroes.value, ['id', heroId]);
  }

  getHeroLocalizedName(heroId): string {
    let hero = this.getHero(heroId);
    return hero ? hero.localized_name : '';
  }

  getHeroName(heroId): string {
    let hero = this.getHero(heroId);
    return hero ? hero.name.replace(HERO_NAME_PERFIX, '') : '';
  }

  getHeroImage(heroId): string {
    let heroName = this.getHeroName(heroId);
    return `https://api.opendota.com/apps/dota2/images/heroes/${heroName}_full.png`;
  }
}
