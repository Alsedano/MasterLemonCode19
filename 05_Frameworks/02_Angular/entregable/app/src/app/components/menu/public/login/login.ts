import { Component, OnDestroy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Auth } from '@/app/services/auth';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, MatCardModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login implements OnDestroy {
  userNameFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required, Validators.required]);

  loginSubscription!: Subscription;
  loading: boolean = false;

  constructor(private router: Router, private authService: Auth) { }

  handleLogin() {
    this.loading = true;
    const loginCorrect = this.authService.login(this.userNameFormControl.value ?? '', this.passwordFormControl.value ?? '');

    this.loginSubscription = loginCorrect.subscribe({
      next: (logged) => { if (logged) this.router.navigate(['/dashboard']) },
      error: (err) => console.log('Form error', err),
      complete: () => this.loading = false,
    });
  }

  handleCancel() {
    this.router.navigate(['/home']);
  }

  ngOnDestroy(): void {
    if (this.loginSubscription)
      this.loginSubscription.unsubscribe();
  }
}
