import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { Coach } from '@app/_models/coach'
import { CoachService } from '@app/_services/coach.service'

@Component({
  selector: 'app-add-coach',
  templateUrl: './add-coach.component.html',
  styleUrls: ['./add-coach.component.css'],
})
export class AddCoachComponent implements OnInit {
  @Output() coachIsCreate = new EventEmitter()
  newCoach: Coach = new Coach()
  active = true

  constructor(private cs: CoachService) {}

  ngOnInit() {}

  submitCoach() {
    this.coachIsCreate.emit({ theCoach: this.newCoach })

    this.newCoach = new Coach()

    this.active = false
    setTimeout(() => (this.active = true), 0)
  }

  addCoach(
    firstname,
    lastname,
    birthday,
    civility,
    speciality,
    company,
    email,
    tel,
    pictures,
    password
  ) {
    this.cs.addCoach(
      firstname,
      lastname,
      birthday,
      civility,
      speciality,
      company,
      email,
      tel,
      pictures,
      password
    )
  }
}
