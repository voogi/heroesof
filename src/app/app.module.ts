import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material';
import { CalculateDpsPipe } from './pipes/calculate-dps.pipe';

@NgModule({
    declarations: [
        AppComponent,
        CalculateDpsPipe
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatCardModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
