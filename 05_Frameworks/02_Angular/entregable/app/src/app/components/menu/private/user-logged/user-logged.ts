import { Auth } from '@/app/services/auth';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-user-logged',
  imports: [MatIconModule],
  templateUrl: './user-logged.html',
  styleUrl: './user-logged.scss',
})
export class UserLogged implements OnInit {

  userName: string = "";

  constructor(private authService: Auth) { }

  ngOnInit(): void {
    this.userName = this.authService.getUsername();
  }
}
