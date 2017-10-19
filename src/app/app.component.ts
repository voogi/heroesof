import {Component} from '@angular/core';
import {IHero} from '../shared/ihero';
import {AngularFirestore} from "angularfire2/firestore";
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/observable/combineLatest';

@Component({
    selector: 'hof-root',
    templateUrl: './app.component.html'
})
export class AppComponent {

    public hero: IHero = null;

    constructor(private afs: AngularFirestore) {

        // this.hero = {
        //     agility: 5,
        //     strength: 5,
        //     intelligence: 5,
        //     health: 100,
        //     mana: 50,
        //     meleeDamage: 10,
        //     spellDamage: 10,
        //     defense: 10,
        //     name: 'Brocket',
        //     level: 1,
        //     experience: 0,
        //     equippedItems: {
        //         weapon: {
        //             id: 1,
        //             name: 'Knight\'s Sword',
        //             baseWeaponType: WeaponTypes.ONE_HANDED_SWORD,
        //             baseType: ItemType.WEAPON,
        //             minDmg: 2,
        //             maxDmg: 4,
        //             strength: 2,
        //             critChance: 10,
        //             critMultiplier: 20,
        //             speed: 2,
        //             rarity: RarityTypes.COMMON,
        //             equipped: true
        //         },
        //     },
        //     inventory: [
        //         {
        //             id: 2,
        //             name: 'Knight\'s Dagger',
        //             baseWeaponType: WeaponTypes.ONE_HANDED_SWORD,
        //             baseType: ItemType.WEAPON,
        //             minDmg: 2,
        //             maxDmg: 4,
        //             strength: 4,
        //             critChance: 10,
        //             critMultiplier: 20,
        //             speed: 2,
        //             rarity: RarityTypes.LEGENDARY,
        //             equipped: false
        //         }
        //     ]
        // };

        this.afs.doc("/heroes/dani").valueChanges().subscribe( (data: IHero) =>{
            this.hero = data;
        });

    }

    onUpdateHero(hero: IHero){
        this.afs.doc("/heroes/dani").update(hero).catch( data => console.log(data));
    }
}
