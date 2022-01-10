import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Suite } from "./robot-model";
import { suite } from "./mock-robot";

@Injectable({
  providedIn: 'root',
})
export class TestExecutionLogService {

  constructor() { }

  getSuite(): Observable<Suite> {
    return new Observable(function (subscriber) {
        subscriber.next(suite);
    });
  }
}