import { Component, OnInit } from '@angular/core'
import { NgForm } from '@angular/forms'
import { AuthenticationService } from '@app/_services'

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
  constructor(private authService: AuthenticationService) {}

  onSubmit(f: NgForm) {
    //console.log(f.value.email)
  }

  ngOnInit() {}
}
