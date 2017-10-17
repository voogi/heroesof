import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculateDps'
})
export class CalculateDpsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const allAPSOnCharacter = 1;
    const baseDps = ((value.minDmg + value.maxDmg) / 2) * allAPSOnCharacter *  value.speed;
    const dps = baseDps * ( ( 1 + (value.critChance * value.critMultiplier) / 100 ) );
    return dps.toFixed(2);
  }

}
