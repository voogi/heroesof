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
import {ActionTypes} from "../../shared/action-types";

@Injectable()
export class BattleService {

    public enemy: IEnemy;
    public $battleSubscription: Subscription = new Subscription();
    public action$ubject: Subject<any> = new Subject<any>();

    constructor(private clService: CombatLogService) {}

    nextAction(action: any){
        switch (action.action) {
            case ActionTypes.HERO_RETREAT :
                this.clService.sendMessage("Hero retreated...");
                this.heroRetreat();
                break;
            case ActionTypes.START_BATTLE :
                break;
            case ActionTypes.FIND_OPPONENT :
                this.clService.sendMessage("Finding opponent...");
                this.findOpponent();
                action.enemy = this.enemy;
                break;
        }

        this.actionHappened(action);

    }

    actionHappened(action: any){
        this.action$ubject.next(action);
    }

    onAction(): Observable<any> {
        return this.action$ubject;
    }

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
    }

    heroRetreat(){
        this.$battleSubscription.unsubscribe();
    }

    startBattle(hero: IHero, heroEngaged: boolean) {
        let whosTurn: TurnTypes = heroEngaged ? TurnTypes.HERO : TurnTypes.ENEMY;
    }
}
