import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormGroupDirective, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { Auth } from '../../../services/auth';

/* export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
} */

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, MatCardModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  userNameFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required, Validators.required]);

  constructor(private router: Router, private authService: Auth) {

  }

  handleLogin() {
    //TODOD. dejar vacios los campos
    // const loginCorrect = this.authService.login(this.userNameFormControl.value ?? '', this.passwordFormControl.value ?? '');
    const loginCorrect = this.authService.login('master@lemoncode.net', '12345678');
    if (loginCorrect) this.router.navigate(['/dashboard'])
  }


  handleCancel() {
    this.router.navigate(['/home']);
  }
}
