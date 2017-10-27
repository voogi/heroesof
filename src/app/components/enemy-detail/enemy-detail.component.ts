import {Component, OnInit} from '@angular/core';
import {IEnemy} from "../../../shared/ienemy";
import {BattleService} from "../../services/battle.service";
import {ActionTypes} from "../../../shared/action-types";

@Component({
    selector: 'hof-enemy-detail',
    templateUrl: './enemy-detail.component.html',
    styleUrls: ['./enemy-detail.component.css']
})
export class EnemyDetailComponent implements OnInit {

    public enemy: IEnemy;

    constructor(private battleService: BattleService) {
    }

    ngOnInit() {

        this.battleService.onAction().subscribe((action: any) => {
            switch (action.action) {
                case ActionTypes.FIND_OPPONENT:
                    this.enemy = action.enemy;
                    break;
                case ActionTypes.HERO_RETREAT:
                    this.enemy = null;
                    break;
            }
        });

    }

}
