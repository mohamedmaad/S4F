import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { AlertService, AuthenticationService } from '@app/_services'
import { User } from '@app/_models'
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable'
import { Location } from '@angular/common'
import { HttpClient } from '@angular/common/http'

@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  loading = false
  submitted = false
  returnUrl: string
  loginInfo

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private location: Location,
    private http: HttpClient
  ) {}

  ngOnInit() {
    if (this.connected()) {
      this.location.go('')
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
        if (this.loginInfo.status == 'logged') {
          localStorage.setItem('user', this.loginInfo.data)
          this.location.go('/home')
        }
      })
  }
}
