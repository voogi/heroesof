import {
    ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output,
} from '@angular/core';
import {IHero} from '../../../shared/ihero';
import {IItem} from '../../../shared/iitem';
import {ItemType} from '../../../shared/item-types';

@Component({
    selector: 'hof-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroDetailComponent implements OnInit {

    @Input()
    public hero: IHero;

    @Output()
    public updateHero: EventEmitter<IHero> = new EventEmitter<IHero>();

    constructor() {
    }

    ngOnInit(): void {
    }

    unEquipItem(item: IItem): void {
        item.equipped = false;
        this.hero.inventory.push(item);
        this.updateHero.emit(this.hero);
    }

    equipItem(item: IItem): void {
        switch (item.baseType) {
            case ItemType.WEAPON:

                if (this.hero.equippedItems.weapon) {
                    this.hero.equippedItems.weapon.equipped = false;
                    this.hero.inventory.push(this.hero.equippedItems.weapon);
                    this.hero.equippedItems.weapon = null;
                }
                this.hero.equippedItems.weapon = item;
                item.equipped = true;
                this.removeItemFromInventoryById(item);
                break;
        }

        this.updateHero.emit(this.hero);
    }

    removeItemFromInventoryById(item: IItem): void {
        this.hero.inventory.splice(this.hero.inventory.findIndex(el => el.id === item.id), 1);
    }

}
