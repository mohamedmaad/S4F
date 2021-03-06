﻿import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { AuthenticationService } from '@app/_services'

@Component({
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  loading = false
  submitted = false
  returnUrl: string
  loginInfo
  connectionError: boolean = false

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    if (this.connected()) {
      this.router.navigate(['home'])
      return
    }

    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls
  }

  onSubmit() {
    this.submitted = true
    this.login()
    // console.log(this.loginInfo.status)
  }

  connected() {
    if (localStorage.getItem('user')) {
      return true
    } else {
      return false
    }
  }

  login() {
    return this.authenticationService
      .login(this.f.email.value, this.f.password.value)
      .subscribe(res => {
        // console.log(res)
        this.loginInfo = res as String[]
        console.log(this.loginInfo.data)
        // console.log(this.loginInfo.status)
        if (this.loginInfo.status == 'loged') {
          localStorage.setItem('user', this.loginInfo.data)
          this.router.navigate(['home'])
        } else {
          console.log('error de connexion')
          this.connectionError = true
        }
      })
  }
}
