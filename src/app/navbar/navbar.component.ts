import { Component, OnInit } from '@angular/core'

import { Router, NavigationEnd } from '@angular/router'

import { AuthenticationService } from '../../app/_services'
import { User } from '../../app/_models'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  changeText: boolean
  logged = false
  ngOnInit() {
    if(localStorage.getItem('user')) {
      this.logged = true
    }
  }

  currentUser: User

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.changeText = false
    this.router.events.subscribe(e => {
      if(e instanceof NavigationEnd) {
        if(localStorage.getItem('user')) {
          this.logged = true
          console.log("changed")
        }
      }
    })
  }

  logout() {
    localStorage.removeItem('user');
    this.logged = false
    this.router.navigate(['/login'])
  }
}
