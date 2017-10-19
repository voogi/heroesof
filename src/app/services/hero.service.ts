import { Injectable } from '@angular/core';
import {AngularFirestore} from "angularfire2/firestore";
import {Observable} from "rxjs/Observable";
import {IHero} from "../../shared/ihero";

@Injectable()
export class HeroService {

  constructor(private afs: AngularFirestore) {}

  getHero(name: string): Observable<IHero>{
    return this.afs.doc("/heroes/" + name).valueChanges();
  }

  updateHero(name: string, hero: IHero): void {
    this.afs.doc("/heroes/" + name).update(hero).catch(data => console.log(data));
  }


}
