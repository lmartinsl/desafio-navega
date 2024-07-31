import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  showPassword: boolean = false;

  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _appService: AppService
  ) {
    this._appService.setLogin(false);
  }

  ngOnInit(): void {
    this.initForm();
  }

  validateEmailOrCpf(control: AbstractControl) {
    const value = control.value;
    if (!value) return null;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const cpfPattern = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

    if (emailPattern.test(value) || cpfPattern.test(value)) {
      return null;
    } else {
      return { invalidEmailOrCpf: true };
    }
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this._appService.setLogin(true);
      this._router.navigateByUrl('dashboard');
    }
  }

  private initForm(): void {
    const { required, minLength } = Validators;

    this.loginForm = this._fb.group({
      emailOrCpf: ['123.456.789-01', [required, this.validateEmailOrCpf]],
      password: ['123456', [required, minLength(6)]],
    });
  }
}
