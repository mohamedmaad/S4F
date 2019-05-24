import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { CoachService } from '@app/_services/coach.service'

@Component({
  selector: 'app-coach-update',
  templateUrl: './coach-update.component.html',
  styleUrls: ['./coach-update.component.css'],
})
export class CoachUpdateComponent implements OnInit {
  coach: any
  active = true
  response

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private coachService: CoachService
  ) {}

  ngOnInit() {
    this.getEdit()
  }

  submitUpdate(form) {
    console.log(form.value)
    this.updateCoach(form.value)
  }

  getEdit() {
    let id = this.route.snapshot.paramMap.get('id')
    return this.coachService.getCoach(id).subscribe(coach => {
      this.coach = coach
    })
  }

  updateCoach(data) {
    this.route.params.subscribe(params => {
      this.coachService.updateCoach(data, params['id'])
      this.response = params as string[]
      //this.router.navigate(['coaches'])
    })
  }
}

// addCoach(data) {
//   this.cs.addCoach(data).subscribe(res => {
//     this.response = res as string[]
//     if (this.response.status == 'coach saved') {
//       this.router.navigate(['coaches'])
//     }
//   })
// }
