import { Injectable } from '@angular/core';
import { User } from './auth.vm';

@Injectable({
  providedIn: 'root',
})
export class Auth {

  private loggedUser: User = { userName: '', password: '' };

  constructor() { }

  login(username: string, password: string): boolean {
    if (username === 'master@lemoncode.net' && password === '12345678') {

      this.loggedUser = { userName: username, password };
      localStorage.setItem('loggedUser', JSON.stringify(this.loggedUser));
      return true;
    }
    return false;
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
