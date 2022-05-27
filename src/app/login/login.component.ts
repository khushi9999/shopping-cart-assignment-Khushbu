import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';
import { CommonService } from '../services/common.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  LoginForm: any = FormGroup;
  passwordConfirmPass: any = [];
  userArray: any;
  enableBtn: boolean = true;
  wrongCredintialsMessage: boolean = false;

  constructor(private fb: FormBuilder, private dataService: DataService,
    private commonService: CommonService, private router: Router) { }

  ngOnInit(): void {
    this.LoginForm = this.fb.group({
      email: new FormControl(null, Validators.email),
      password: new FormControl(null, [Validators.required]),
    });

    this.getData();

    // this.LoginForm.controls['password'].valueChanges.subscribe((v: any) => {      
    //   this.wrongCredintialsMessage =false;
    //   console.log("value: ", v);
    //  });
  }

  get f() {
    return this.LoginForm.controls;
  }

  getData() {
    this.dataService.getData(this.commonService.userApi).subscribe((res: any) => {
      this.userArray = res;
    });
  }

  isUserExist(obj: any, username: string, password: string) {
    for (let key in obj) {
      if (obj[key].email === username && obj[key].password === password) {
        return true;
      }
    }
    return false
  }

  onSubmit(form: FormGroup) {
    let email = form.value.email;
    let password = form.value.password;

    let exists = this.isUserExist(this.userArray, email, password);
    if (exists) {
      this.router.navigate(['/home']);
    } else {
      this.wrongCredintialsMessage = true
      this.LoginForm.reset();
    }

  }

}