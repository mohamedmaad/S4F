import { Component, OnInit } from '@angular/core'

import { Coach } from '@app/_models/coach'
import { CoachService } from '@app/_services/coach.service'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-coaches',
  templateUrl: './coaches.component.html',
  styleUrls: ['./coaches.component.css'],
})
export class CoachesComponent implements OnInit {
  coaches: any
  response

  constructor(
    private coachService: CoachService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  getCoaches() {
    return this.coachService.getCoaches().subscribe(coaches => {
      // console.log(coaches)
      this.coaches = coaches
    })
  }

  deleteOne(id: string) {
    this.coachService.deleteOne(id).subscribe(res => {
      console.log(res)
      this.response = res as string[]
      console.log(this.response)
      if (this.response.status == 'coach deleted') {
        location.reload()
      }
    })
  }

  ngOnInit() {
    this.getCoaches()
  }
}
