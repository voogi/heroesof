import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MatButtonModule, MatCardModule, MatExpansionModule, MatListModule,
    MatProgressBarModule
} from '@angular/material';
import { CalculateDpsPipe } from './pipes/calculate-dps.pipe';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import {AngularFireModule} from "angularfire2";
import {AngularFirestoreModule} from "angularfire2/firestore";
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import {environment} from "../environments/environment";
import {HeroService} from "./services/hero.service";
import { CombatLogComponent } from './components/combat-log/combat-log.component';
import {CombatLogService} from "./services/combat-log.service";
import { EnemyDetailComponent } from './components/enemy-detail/enemy-detail.component';
import {BattleService} from "./services/battle.service";

@NgModule({
    declarations: [
        AppComponent,
        CalculateDpsPipe,
        HeroDetailComponent,
        ProgressBarComponent,
        CombatLogComponent,
        EnemyDetailComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatExpansionModule,
        MatListModule,
        MatButtonModule,
        MatProgressBarModule,
        AngularFireModule.initializeApp(environment.fireBaseConfig),
        AngularFirestoreModule.enablePersistence()
    ],
    providers: [HeroService, CombatLogService, BattleService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
