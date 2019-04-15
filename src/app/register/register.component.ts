import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import {
  AuthenticationService,
} from '@app/_services'

@Component({ templateUrl: 'register.component.html' })
export class RegisterComponent implements OnInit {
  registerForm: FormGroup
  loading = false
  submitted = false

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        username: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]],

        /** confirm Password here */
        confirmPassword: ['', Validators.required],
      },
    )
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls
  }

  onSubmit() {
    this.submitted = true

    // stop here if form is invalid
    if (this.registerForm.invalid || this.registerForm.controls.password !== this.registerForm.controls.confirmPassword) {
      return
    }
    // function qui va communiquer avec le service
    // this.authRequest(this.registerForm.value)

  }

  // authRequest(data) {
  //   // fournir les donnes au service pour enregistrer l'user
  //   this.authenticationService.register(data).subscribe(res => {
  //     console.log(res)
  //   })
  // }
}
