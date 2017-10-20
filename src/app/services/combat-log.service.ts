import { Injectable } from '@angular/core';
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";

@Injectable()
export class CombatLogService {

  private messageSubject: Subject<string> = new Subject<string>();

  constructor() { }

  onMessage(): Observable<string>{
    return this.messageSubject;
  }

  sendMessage(msg: string){
    this.messageSubject.next(msg);
  }

}
