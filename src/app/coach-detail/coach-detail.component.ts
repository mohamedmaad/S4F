import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common'

import { Coach } from '@app/_models/coach'
import { CoachService } from '@app/_services/coach.service'

@Component({
  selector: 'app-coach-detail',
  templateUrl: './coach-detail.component.html',
  styleUrls: ['./coach-detail.component.css'],
})
export class CoachDetailComponent implements OnInit {
  coach: Coach

  constructor(
    private route: ActivatedRoute,
    private coachService: CoachService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getCoach()
  }

  getCoach(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.coachService.getCoach(id).subscribe(coach => (this.coach = coach))
  }

  goBack(): void {
    this.location.back()
  }
}
