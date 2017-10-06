import { Pipe, PipeTransform } from '@angular/core';

import { Skill } from '../constants';

@Pipe({
  name: 'skill'
})

export class SkillPipe implements PipeTransform {
  transform(skill: number, ...args: any[]): any {
    return (Skill[skill] || 'Unkown') + ' Skill';
  }
}
