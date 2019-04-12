import { Component, OnInit } from '@angular/core'
// import { Router, ActivatedRoute } from '@angular/router';
import { Coach } from '@app/_models/coach'
import { CoachService } from '@app/_services/coach.service'

import { COACHES } from '../mock/mock-coaches'
import { Router } from '@angular/router'

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css'],
})
export class ProfilComponent implements OnInit {
  id = 0
  firstName = 'Street4Fit'
  lastName = 'Startup'
  speciality = 'Athlétisme'

  coaches: any

  constructor(private coachService: CoachService, private router: Router) {}

  ngOnInit() {
    this.getCoaches()
  }

  getCoaches(): void {
    this.coachService
      .getCoaches()
      .subscribe(coaches => (this.coaches = coaches))
  }
}
