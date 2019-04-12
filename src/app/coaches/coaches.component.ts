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
  coaches: any

  constructor(private coachService: CoachService, private router: Router) {}

  getCoaches() {
    return this.coachService.getCoaches().subscribe(coaches => {
      // console.log(coaches)
      this.coaches = coaches
    })
  }

  ngOnInit() {
    this.getCoaches()
  }

  addCoachToList(event: any) {
    //console.log(event)

    const theCoach: Coach = event.theCoach

    let id: number = this.coaches.length
    theCoach.id = id += 1

    this.coaches.push(theCoach)
  }
}
