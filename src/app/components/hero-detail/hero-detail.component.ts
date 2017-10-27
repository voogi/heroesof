import {
    ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output,
} from '@angular/core';
import {IHero} from '../../../shared/ihero';
import {IItem} from '../../../shared/iitem';
import {ItemType} from '../../../shared/item-types';
import {CombatLogService} from "../../services/combat-log.service";
import {BattleService} from "../../services/battle.service";
import {Subscription} from "rxjs/Subscription";
import {IEnemy} from "../../../shared/ienemy";
import {isNull} from "util";
import {environment} from "../../../environments/environment.prod";

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
    private $enemySubscription: Subscription = new Subscription();
    public hasEnemy: boolean = false;

    constructor(private clService: CombatLogService, private battleService: BattleService) {
    }

    ngOnInit(): void {
        this.$enemySubscription = this.battleService.onEnemyFind().subscribe( (enemy: IEnemy) => {
            this.hasEnemy = !isNull(enemy);
        });
    }

    calculateRequiredExperience(): number {
        return this.hero.level * environment.levelRequirementMultiplier;
    }

    onFindOpponent(): void {
        this.battleService.nextAction({
            hero : this.hero,
            action : "FIND_OPPONENT"
        });
    }

    onRetreat(): void {
        this.battleService.nextAction({
            action : "STOP_BATTLE"
        });
    }

    onStartBattle(): void {
        this.battleService.nextAction({
            hero : this.hero,
            action : "START_BATTLE"
        });
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
