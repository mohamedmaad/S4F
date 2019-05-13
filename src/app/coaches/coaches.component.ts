import { Component, OnInit } from '@angular/core'
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

  // récupération de la liste des coaches
  getCoaches() {
    return this.coachService.getCoaches().subscribe(coaches => {
      // console.log(coaches)
      this.coaches = coaches
    })
  }

  // suppression d'un coach
  deleteOne(id: string) {
    this.coachService.deleteOne(id).subscribe(res => {
      console.log(res)
      this.response = res as string[]
      console.log(this.response)
      //recharge de la page automatiquement à la suppression d'un coach
      if (this.response.status == 'coach deleted') {
        location.reload()
      }
    })
  }

  ngOnInit() {
    this.getCoaches()
  }
}
