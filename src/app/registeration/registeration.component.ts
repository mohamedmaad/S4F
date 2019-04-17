import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AuthenticationService } from '@app/_services'
import { Router } from '@angular/router'

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css'],
})
export class RegisterationComponent implements OnInit {
  registerForm: FormGroup
  loading = false
  submitted = false
  response
  notSame = true

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  checkPasswords(f: FormGroup) {
    // here we have the 'passwords' group
    let pass = f.controls.password
    let confirmPass = f.controls.confirmPassword

    return pass === confirmPass ? null : { notSame: true }
  }

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
      { validator: this.checkPasswords }
    )
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls
  }

  get c() {
    return this.registerForm
  }

  onSubmit() {
    this.submitted = true
    this.notSame = this.registerForm.errors.notSame
    // stop here if form is invalid
    // if (this.registerForm.invalid) {
    //   if (this.f.password.value !== this.f.confirmPassword.value) {
    //     this.mustmatch = true
    //   }
    //   return
    // }
    // console.log('after')
    // function qui va communiquer avec le service

    if (this.registerForm.invalid) {
      console.log(this.registerForm.errors)
      console.log(this.registerForm.errors.notSame)
      return
    }
    this.authRequest(this.registerForm.value)
  }

  authRequest(data) {
    // fournir les donnes au service pour enregistrer l'user
    this.authenticationService.register(data).subscribe(res => {
      console.log(res)
      this.response = res as string[]
      if (this.response.status == 'saved') {
        localStorage.setItem('user', this.response.data)
        this.router.navigate(['home'])
      }
    })
  }
}
