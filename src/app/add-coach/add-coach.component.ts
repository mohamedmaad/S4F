import { Component, OnInit } from '@angular/core'
import { CoachService } from '@app/_services/coach.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-add-coach',
  templateUrl: './add-coach.component.html',
  styleUrls: ['./add-coach.component.css'],
})
export class AddCoachComponent implements OnInit {
  active = true
  response

  constructor(private cs: CoachService, private router: Router) {}

  ngOnInit() {}

  submitCoach(f) {
    console.log(f.value)

    this.addCoach(f.value)
  }

  addCoach(data) {
    this.cs.addCoach(data).subscribe(res => {
      this.response = res as string[]
      if (this.response.status == 'coach saved') {
        this.router.navigate(['coaches'])
      }
    })
  }
}
