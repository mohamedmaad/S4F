import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common'
import { SessionService } from '@app/_services/session.service'

@Component({
  selector: 'app-session-detail',
  templateUrl: './session-detail.component.html',
  styleUrls: ['./session-detail.component.css'],
})
export class SessionDetailComponent implements OnInit {
  sessions: any
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private sessionService: SessionService
  ) {}

  ngOnInit() {
    this.getSession()
  }

  getSession() {
    const id = this.route.snapshot.paramMap.get('id')
    //console.log(id)
    return this.sessionService
      .getSession(id)
      .subscribe(session => (this.sessions = session))
  }

  goBack(): void {
    this.location.back()
  }
}
