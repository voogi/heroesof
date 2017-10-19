import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'hof-progress-bar',
    styleUrls: ['./progress-bar.component.css'],
    template: `
        <div class="pBar">
            <div class="prog" [ngStyle]="{ width: (percent < 100 ? percent : 100) + '%', backgroundColor: color }">
                <span>{{actual}} / {{mx}}</span>    
            </div>
        </div>
    `
})
export class ProgressBarComponent implements OnInit {

    @Input()
    public get actual(): number {
        return this._actual;
    }

    public set actual(v:number) {
        if(!v && v !== 0){
            return;
        }
        this._actual = v;
        this.recalculatePercentage();
    }

    private _actual: number;

    @Input()
    public mx: number = 0;

    @Input()
    public color: string;

    public percent: number = 0;

    constructor() {
    }

    ngOnInit() {
        this.recalculatePercentage();
    }

    private recalculatePercentage() {
        this.percent = +(100 * this.actual / this.mx).toFixed(2);
    }

}
