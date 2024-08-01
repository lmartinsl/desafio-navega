import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isLogin: Observable<boolean>;

  constructor(private _appService: AppService) {
    this.isLogin = this._appService.getLogin();
  }
}
