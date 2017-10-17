import {Component} from '@angular/core';
import {RarityTypes} from '../shared/rarity-types';
import {IItem} from '../shared/iitem';
import {WeaponTypes} from '../shared/weapon-types';

@Component({
    selector: 'hof-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public items: Array<IItem> = [];
    public item: IItem;
    constructor() {
        this.items = [
            {
                name: 'Knight\'s Sword',
                baseType : WeaponTypes.ONE_HANDED_SWORD,
                minDmg: 2,
                maxDmg: 4,
                critChance: 10,
                critMultiplier: 20,
                speed: 2,
                rarity: RarityTypes.COMMON
            }
        ];
        this.item = this.items[0];
    }
}
