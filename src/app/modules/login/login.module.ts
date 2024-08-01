import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoginComponent } from './components/login/login.component';
import { LoginRoutingModule } from './login-routing.module';

import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { AppService } from 'src/app/app.service';
import { SharedModule } from 'src/app/shared/shared.module';

const PRIMENG = [InputMaskModule, InputTextModule, ButtonModule];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    ...PRIMENG,
    CommonModule,
    RouterModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [AppService, FormBuilder, Router],
})
export class LoginModule {}
