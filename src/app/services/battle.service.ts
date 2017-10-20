import {Injectable} from '@angular/core';
import {IHero} from "../../shared/ihero";
import {IEnemy} from "../../shared/ienemy";
import {CombatLogService} from "./combat-log.service";
import {TurnTypes} from "../../shared/turn-types";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/timer';
import {Subscription} from "rxjs/Subscription";
import {Subject} from "rxjs/Subject";
import {CalculateDpsPipe} from "../pipes/calculate-dps.pipe";

@Injectable()
export class BattleService {

    public enemy: IEnemy;
    public $battleSubscription: Subscription = new Subscription();
    public enemy$ubject: Subject<IEnemy> = new Subject<IEnemy>();

    constructor(private clService: CombatLogService) {}

    findOpponent() {

        this.enemy = {
            name: "Guszti",
            level: 2,
            inventory: [],
            equippedItems: {
                weapon: null
            },
            intelligence: 5,
            strength: 5,
            agility: 5,
            health: 100,
            currentHealth: 100,
            mana: 30,
            currentMana: 30,
            defense: 10
        };

        this.clService.sendMessage("Enemy found!");
        this.enemy$ubject.next(this.enemy);

    }

    onEnemyFind(): Observable<IEnemy>{
        return this.enemy$ubject;
    }

    stopBattle(){
        this.$battleSubscription.unsubscribe();
        this.enemy$ubject.next(null);
    }

    startBattle(hero: IHero, heroEngaged: boolean) {

        let whosTurn: TurnTypes = heroEngaged ? TurnTypes.HERO : TurnTypes.ENEMY;

        const MAX_TURN: number = 10;
        let turns: number = 0;

        let heroDps = new CalculateDpsPipe().transform(hero, "melee");

        this.$battleSubscription = Observable.timer(0, 1000).subscribe( data => {

            if(heroDps > this.enemy.currentHealth){
                heroDps = this.enemy.currentHealth;
            }
            this.enemy.currentHealth -= heroDps;

            this.clService.sendMessage("Enemy got hit! ("+ heroDps +")");

            if(this.enemy.currentHealth <= 0){
                this.$battleSubscription.unsubscribe();
            }
        });
    }
}
