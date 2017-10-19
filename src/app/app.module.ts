import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatExpansionModule, MatListModule} from '@angular/material';
import { CalculateDpsPipe } from './pipes/calculate-dps.pipe';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import {AngularFireModule} from "angularfire2";
import {AngularFirestore, AngularFirestoreModule} from "angularfire2/firestore";


const fireBaseConfig = {
    apiKey: 'AIzaSyCHrY0CyFLTw4JvgoZ8rt1WhQenXaN3VwU',
    authDomain: 'awsome-dacf9.firebaseapp.com',
    databaseURL: 'https://awsome-dacf9.firebaseio.com',
    projectId: 'awsome-dacf9',
    storageBucket: 'awsome-dacf9.appspot.com',
    messagingSenderId: '1031591346300'
};

@NgModule({
    declarations: [
        AppComponent,
        CalculateDpsPipe,
        HeroDetailComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatExpansionModule,
        MatListModule,
        MatButtonModule,
        AngularFireModule.initializeApp(fireBaseConfig),
        AngularFirestoreModule.enablePersistence()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
