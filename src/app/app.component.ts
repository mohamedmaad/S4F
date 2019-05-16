import { Component, OnInit, Input, Output, DoCheck } from '@angular/core'
import { Router, NavigationEnd } from '@angular/router'

import { User } from './_models'
import { EventEmitter } from 'protractor';

@Component({ selector: 'app', templateUrl: 'app.component.html' })

export class AppComponent implements OnInit {
  currentUser: User
  logged = false

  // @Input() logged = false

  constructor(
    private router: Router,
  ) {
    this.router.events.subscribe(e => {
      if(e instanceof NavigationEnd) {
        if(localStorage.getItem('user')) {
          this.logged = true
          console.log("changed")
        }
      }
    })
  }

  ngOnInit() {
    
  }
  
}
