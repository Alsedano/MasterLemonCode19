import { Injectable } from '@angular/core';
import { User } from './auth.vm';
import { delay, map, Observable, of, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {

  private loggedUser: User = { userName: '', password: '' };

  constructor() { }

  login(username: string, password: string): Observable<boolean> {
    if (username === 'master@lemoncode.net' && password === '12345678') {

      this.loggedUser = { userName: username, password };
      localStorage.setItem('loggedUser', JSON.stringify(this.loggedUser));
      return of(true).pipe(delay(2000));
    }
    return of(false).pipe(delay(2000));
  }

  logout(): void {
    this.loggedUser = { userName: '', password: '' }
    localStorage.setItem('loggedUser', JSON.stringify(this.loggedUser));
  }

  isLogged(): boolean {
    return this.loggedUser.userName != "" && this.loggedUser.password != "";
  }

  getUsername(): string {
    return this.loggedUser.userName;
  }
}
