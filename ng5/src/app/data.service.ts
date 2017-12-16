import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

@Injectable()
export class DataService {

  private _goals = new BehaviorSubject<any>(['first goal', 'second goal'])
  goal = this._goals.asObservable();

  constructor() { }

  changeGoal(goal){
    this._goals.next(goal);
  }

}
