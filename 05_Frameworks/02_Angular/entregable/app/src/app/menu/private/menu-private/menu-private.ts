import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-private',
  imports: [MatButtonModule, MatMenuModule, MatIconModule],
  templateUrl: './menu-private.html',
  styleUrl: './menu-private.scss',
})
export class MenuPrivate {
  /**
   *
   */
  constructor(private router: Router) {

  }

  navigateToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  navigateToGallery() {
    this.router.navigate(['/gallery']);
  }

  navigateToCRUD() {
    this.router.navigate(['/crud']);
  }

  navigateToProfile() {
    this.router.navigate(['/profile']);
  }
}
