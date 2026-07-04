import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-user-logged',
  imports: [MatIconModule],
  templateUrl: './user-logged.html',
  styleUrl: './user-logged.scss',
})
export class UserLogged {
  @Input() userName: string = "";
}
