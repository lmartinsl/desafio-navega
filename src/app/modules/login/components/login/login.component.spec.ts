import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockAppService: jasmine.SpyObj<AppService>;
  let mockRouter: jasmine.SpyObj<Router>;
  let formBuilder: FormBuilder;

  beforeEach(async () => {
    mockAppService = jasmine.createSpyObj('AppService', ['setLogin']);
    mockRouter = jasmine.createSpyObj('Router', ['navigateByUrl']);

    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [LoginComponent],
      providers: [
        { provide: AppService, useValue: mockAppService },
        { provide: Router, useValue: mockRouter },
        FormBuilder,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    formBuilder = TestBed.inject(FormBuilder);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle password visibility', () => {
    expect(component.showPassword).toBeFalse();
    component.togglePasswordVisibility();
    expect(component.showPassword).toBeTrue();
    component.togglePasswordVisibility();
    expect(component.showPassword).toBeFalse();
  });

  it('should validate email or CPF correctly', () => {
    const control = component.loginForm.get('emailOrCpf')!;

    control.setValue('');
    expect(component.validateEmailOrCpf(control)).toBeNull();

    control.setValue('test@example.com');
    expect(component.validateEmailOrCpf(control)).toBeNull();

    control.setValue('123.456.789-01');
    expect(component.validateEmailOrCpf(control)).toBeNull();

    control.setValue('invalid');
    expect(component.validateEmailOrCpf(control)).toEqual({
      invalidEmailOrCpf: true,
    });
  });

  it('should call AppService.setLogin and navigate to dashboard on valid form submission', () => {
    component.loginForm.setValue({
      emailOrCpf: 'test@example.com',
      password: 'password123',
    });

    component.onSubmit();

    expect(mockAppService.setLogin).toHaveBeenCalledWith(true);
    expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('dashboard');
  });
});
