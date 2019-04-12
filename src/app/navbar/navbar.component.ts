import { Component, OnInit } from '@angular/core'

import { Router } from '@angular/router'

import { AuthenticationService } from '../../app/_services'
import { User } from '../../app/_models'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  changeText: boolean

  ngOnInit() {}
  currentUser: User

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.changeText = false
  }

  logout() {
    this.router.navigate(['/login'])
  }
}
