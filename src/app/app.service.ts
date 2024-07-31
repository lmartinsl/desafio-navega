import { Inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Inject({
  providedIn: 'root',
})
export class AppService {
  private isLogin: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {}

  setLogin(status: boolean): void {
    this.isLogin.next(status);
  }

  getLogin(): Observable<boolean> {
    return this.isLogin.asObservable();
  }
}
