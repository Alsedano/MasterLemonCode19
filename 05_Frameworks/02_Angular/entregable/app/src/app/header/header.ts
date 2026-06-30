import { Component } from '@angular/core';
import { MenuPublic } from '../menu/public/menu-public/menu-public';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { Auth } from '../services/auth';
import { MenuPrivate } from '../menu/private/menu-private/menu-private';
import { UserLogged } from '../menu/private/user-logged/user-logged';
import { ExitLogin } from '../menu/private/exit-login/exit-login';

@Component({
  selector: 'app-header',
  imports: [MenuPublic, MenuPrivate, MatIconModule, UserLogged, ExitLogin],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  constructor(private authService: Auth) { }

  userLogged(): boolean {
    return this.authService.isLogged();
  }
}
