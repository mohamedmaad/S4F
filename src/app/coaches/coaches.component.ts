import { Component, OnInit } from '@angular/core'

import { Coach } from '@app/_models/coach'
//import { COACHES } from '@app/mock/mock-coaches'
import { CoachService } from '@app/_services/coach.service'

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
    mail: 'moh@hotmail.fr',
    tel: '06989898983',
    password: 'momo',
  }
  coaches = COACHES
  selectedCoach: Coach*/

  coaches: Coach[]

  constructor(private coachService: CoachService) {}

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
}
