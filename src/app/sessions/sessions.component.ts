import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';
import { Session } from '@app/_models/session';
import { SessionService } from '../_services/session.service';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css'],
})
export class SessionsComponent implements OnInit {
  // session: Session = {
  //   company: 'Renault',
  //   coach: 'Mohamed',
  //   date: '15/05/2019',
  //   hour: '12H30',
  //   duration: '1h30',
  //   maxParticipants: 30,
  //   minParticipants: 20,
  // }

  session: Session[];

  getSession(): void{
    this.sessionService.getSessions().subscribe(session => this.session = session);
  }

  constructor(private _router: Router, private sessionService: SessionService) {}
  
  ngOnInit() {
    this.getSession();
  }
}
