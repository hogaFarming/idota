import { Pipe, PipeTransform } from '@angular/core';

import { GameMode } from '../constants';

@Pipe({
  name: 'gameMode'
})

export class GameModePipe implements PipeTransform {
  transform(gameMode: number, ...args: any[]): any {
    return GameMode[gameMode] || 'Unkown Game Mode';
  }
}
