import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule, HttpClientModule, RouterTestingModule
      ],
      declarations: [RegisterComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('First Name field validity', () => {
    let email = component.RegistrationForm.controls['fname'];  
    expect(email.valid).toBeFalsy(); (2)
  }); 
  
  it('Last Name field validity', () => {
    let email = component.RegistrationForm.controls['lname'];  
    expect(email.valid).toBeFalsy(); (2)
  });
  
  it('Email field validity', () => {
    let email = component.RegistrationForm.controls['email'];  
    expect(email.valid).toBeFalsy(); (2)
  });
  
  it('Password field validity', () => {
    let email = component.RegistrationForm.controls['password'];  
    expect(email.valid).toBeFalsy(); (2)
  }); 
  
  it('Confirm Password field validity', () => {
    let email = component.RegistrationForm.controls['conpassword'];  
    expect(email.valid).toBeFalsy(); (2)
  });

  it('form invalid when empty', () => {
    expect(component.RegistrationForm.valid).toBeFalsy();
  });
});
