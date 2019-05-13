import { Component, OnInit } from '@angular/core'
import { SessionService } from '../_services/session.service'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css'],
})
export class SessionsComponent implements OnInit {
  sessions: any
  response

  constructor(
    private sessionService: SessionService,
    private _router: Router,
    private route: ActivatedRoute
  ) {}

  getSessions() {
    return this.sessionService.getSessions().subscribe(sessions => {
      this.sessions = sessions
    })
  }

  // suppression d'une seance
  deleteOne(id: string) {
    this.sessionService.deleteOne(id).subscribe(res => {
      console.log(res)
      this.response = res as string[]
      //console.log(this.response)
      //recharge de la page automatiquement à la suppression d'une seance
      if ((this.response.status = 'session deleted')) {
        location.reload()
      }
    })
  }

  ngOnInit() {
    this.getSessions()
  }
}
