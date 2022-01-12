import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Suite } from "./robot-model";
import logs from './logs.json';

@Injectable({
  providedIn: 'root',
})
export class TestExecutionLogService {

  constructor() { }

  getSuite(): Observable<Suite> {
    return new Observable((subscriber) => {
        subscriber.next(new Suite(logs));
    });
  }

}