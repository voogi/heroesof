import {Pipe, PipeTransform} from '@angular/core';
import {IHero} from "../../shared/ihero";
import {IItem} from "../../shared/iitem";
import {unescapeIdentifier} from "@angular/compiler";
import {isUndefined} from "util";

@Pipe({
    name: 'calculateDps'
})
export class CalculateDpsPipe implements PipeTransform {

    private attributes: { str: number, agi: number, int: number };

    transform(hero: IHero, type: string): any {

        if(isUndefined(hero.equippedItems)) return 0;

        this.attributes = CalculateDpsPipe.collectAllAttributes(hero);

        switch (type) {
            case 'melee':
                let str = this.attributes.str + hero.strength;
                const allAPSOnCharacter = 1;
                const baseDps = ((hero.equippedItems.weapon.minDmg + hero.equippedItems.weapon.maxDmg) / 2) * allAPSOnCharacter *  hero.equippedItems.weapon.speed;
                const dps = baseDps * ( ( 1 + (hero.equippedItems.weapon.critChance * hero.equippedItems.weapon.critMultiplier) / 100 ) );
                return (dps*(dps*(str/100))).toFixed(2);
            case 'spell':
                break;
        }
    }

    static collectAllAttributes(hero: IHero): { str: number, agi: number, int: number } {

        let itemKeys: Array<string> = Object.keys(hero.equippedItems);
        let strength: number = 0;
        let agility: number = 0;
        let intelligence: number = 0;

        for( let i = 0; i < itemKeys.length; i++ ) {

            let item: IItem = hero.equippedItems[itemKeys[i]] as IItem;

            if(item === null) continue;

            if(item.strength){
                strength += item.strength;
            }

            if(item.agility){
                agility += item.agility;
            }

            if(item.intelligence){
                intelligence += item.intelligence;
            }

        }

        return {
            str : strength,
            agi : agility,
            int : intelligence
        }
    }


}
