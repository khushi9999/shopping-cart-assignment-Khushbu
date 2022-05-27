import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,HttpClientModule,RouterTestingModule
      ],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('email field validity', () => {
    let email = component.LoginForm.controls['email']; 
    expect(email.valid).toBeFalsy();
  });
  it('password field validity', () => {
    let email = component.LoginForm.controls['password']; 
    expect(email.valid).toBeFalsy();
  });
  it('form invalid when empty', () => {
    expect(component.LoginForm.valid).toBeFalsy();
  });
});
