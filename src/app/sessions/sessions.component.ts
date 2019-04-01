import { Component, OnInit } from '@angular/core'
import { Session } from '@app/_models/session'

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css'],
})
export class SessionsComponent implements OnInit {
  session: Session = {
    company: 'Renault',
    coach: 'Mohamed',
    date: '15/05/2019',
    hour: '12H30',
    duration: '1h30',
    maxParticipants: 30,
    minParticipants: 20,
  }

  constructor() {}

  ngOnInit() {}
}
