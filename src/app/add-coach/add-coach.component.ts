import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { Coach } from '@app/_models/coach'

@Component({
  selector: 'app-add-coach',
  templateUrl: './add-coach.component.html',
  styleUrls: ['./add-coach.component.css'],
})
export class AddCoachComponent implements OnInit {
  @Output() coachIsCreate = new EventEmitter()
  newCoach: Coach = new Coach()
  active = true

  constructor() {}

  ngOnInit() {}

  submitCoach() {
    this.coachIsCreate.emit({ theCoach: this.newCoach })

    this.newCoach = new Coach()

    this.active = false
    setTimeout(() => (this.active = true), 0)
  }
}
