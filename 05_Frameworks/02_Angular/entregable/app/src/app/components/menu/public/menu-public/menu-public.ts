import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-public',
  imports: [MatButtonModule, MatMenuModule, MatIconModule],
  templateUrl: './menu-public.html',
  styleUrl: './menu-public.scss',
})
export class MenuPublic {
  /**
   *
   */
  constructor(private router: Router) {

  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  navigateToAbout() {
    this.router.navigate(['/about']);
  }
}
