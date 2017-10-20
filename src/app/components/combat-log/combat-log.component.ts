import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {CombatLogService} from "../../services/combat-log.service";
import {Subscription} from "rxjs/Subscription";
import {animate, state, style, transition, trigger} from "@angular/animations";

export interface IMessage {
    msg: string;
    interval: Function;
    id: number;
}

@Component({
    selector: 'hof-combat-log',
    templateUrl: './combat-log.component.html',
    styleUrls: ['./combat-log.component.css'],
    animations: [
        trigger('fadeIn', [
            state('in', style({
                opacity: 0,
                'border-bottom': 'none'
            })),
            transition('void => *', [
                style({
                    opacity: 0
                }),
                animate(500)
            ]),
            transition('* => void', [
                animate(500, style({
                    opacity: 1,
                    'border-bottom': '1px solid #99aebf'
                }))
            ])
        ])
    ]
})
export class CombatLogComponent implements OnInit, OnDestroy {

    public messages: Array<string> = [];
    private $onMessageSubscription: Subscription = new Subscription();

    constructor(private clService: CombatLogService) {
        this.$onMessageSubscription = this.clService.onMessage().subscribe( msg => this.messages.push(msg));
    }

    createMessage(msg: string){
        let _msg: IMessage = {
            id: 1,
            interval : function(){},
            msg: msg
        };
    }

    ngOnInit():void {
    }

    ngOnDestroy(): void {
        this.$onMessageSubscription.unsubscribe();
    }

}
