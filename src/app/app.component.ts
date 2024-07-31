import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isLogin = this._appService.getLogin();

  constructor(private router: Router, private _appService: AppService) {}

  isLoginRoute(): boolean {
    return this.router.url === '/login';
  }
}
