import {Component, Input, OnInit} from '@angular/core';
import {IEnemy} from "../../../shared/ienemy";
import {BattleService} from "../../services/battle.service";

@Component({
  selector: 'hof-enemy-detail',
  templateUrl: './enemy-detail.component.html',
  styleUrls: ['./enemy-detail.component.css']
})
export class EnemyDetailComponent implements OnInit {

  public enemy: IEnemy;

  constructor(private battleService: BattleService) { }

  ngOnInit() {

    this.battleService.onEnemyFind().subscribe( (enemy:IEnemy) => {
      this.enemy = enemy;
    });

  }

}
