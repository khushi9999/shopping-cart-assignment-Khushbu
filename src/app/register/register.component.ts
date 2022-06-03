import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { DataService } from '../services/data.service';
// import { RegisterationData } from './registerationData';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  RegistrationForm: any = FormGroup;
  passwordConfirmPass: any = [];
  registrationData = {
    'fname': '',
    'lname': '',
    'email': '',
    'password': '',
    'conpassword': ''
  }
  constructor(private fb: FormBuilder, private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.RegistrationForm = this.fb.group({
      fname: new FormControl(null, Validators.required),
      lname: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.email),
      password: new FormControl(null, [Validators.required]),
      conpassword: new FormControl(null, [Validators.required]),
    },
      {
        validators: this.mustMatch('password', 'conpassword')
      });
  }

  passwordValidation() {
    if (this.RegistrationForm.controls.password.value == (this.RegistrationForm.controls.conpassword.value)) {
      return true;
    }
    return true;
  }

  get f() {
    return this.RegistrationForm.controls;
  }

  mustMatch(password: any, confirmpassword: any) {
    return (formGroup: FormGroup) => {
      const passwordcontrol = formGroup.controls[password];
      const confirmpasswordcontrol = formGroup.controls[confirmpassword];

      if (confirmpasswordcontrol.errors && !confirmpasswordcontrol.errors['mustMatch']) {
        return;
      }
      if (passwordcontrol.value !== confirmpasswordcontrol.value) {
        confirmpasswordcontrol.setErrors({ mustMatch: true })
      } else {
        confirmpasswordcontrol.setErrors(null)
      }
    }
  }
  onSubmit(form: FormGroup) {
    this.registrationData.fname = form.value.fname;
    this.registrationData.lname = form.value.lname;
    this.registrationData.email = form.value.email;
    this.registrationData.password = form.value.password;
    this.registrationData.conpassword = form.value.conpassword;


    this.dataService.postData(this.registrationData).subscribe(res => {
      if (res != "") {
        this.router.navigate(['auth/login']);
      }
    })
  }

}