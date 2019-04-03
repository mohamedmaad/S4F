import { Component, OnInit } from '@angular/core'

import { Coach } from '@app/_models/coach'
//import { COACHES } from '@app/mock/mock-coaches'
import { CoachService } from '@app/_services/coach.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-coaches',
  templateUrl: './coaches.component.html',
  styleUrls: ['./coaches.component.css'],
})
export class CoachesComponent implements OnInit {
  /*coach: Coach = {
    id: 1,
    firstName: 'Mohamed',
    lastName: 'Maadnous',
    dateOfBirth: '17-07-1994',
    civility: 'Homme',
    company: 'Street4Fit',
    speciality: 'JJB',
    email: 'moh@hotmail.fr',
    tel: '06989898983',
    password: 'momo',
  }
  coaches = COACHES
  selectedCoach: Coach*/

  coaches: Coach[]

  constructor(private coachService: CoachService, private router: Router) {}

  ngOnInit() {
    this.getCoaches()
  }

  getCoaches(): void {
    this.coachService
      .getCoaches()
      .subscribe(coaches => (this.coaches = coaches))
  }

  /*onSelect(coach: Coach): void {
    this.selectedCoach = coach
  }*/

  addCoachToList(event: any) {
    console.log(event)

    const theCoach: Coach = event.theCoach

    let id: number = this.coaches.length
    theCoach.id = id += 1

    this.coaches.push(theCoach)
  }
}
