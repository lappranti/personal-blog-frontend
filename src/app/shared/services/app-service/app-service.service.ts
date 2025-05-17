import { Injectable } from '@angular/core';
import { AppContext } from '../../enum/app-context/app-context';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private context = AppContext.Default;
  contextAsync = new Subject<AppContext>();
  constructor() {}

  setContext(context: AppContext) {
    this.context = context;
    this.contextAsync.next(context);
  }

  getContext() {
    return this.context;
  }
}
