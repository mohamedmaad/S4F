import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SessionService } from '@app/_services/session.service';
import { Session } from '@app/_models/session';

@Component({
  selector: 'app-session-detail',
  templateUrl: './session-detail.component.html',
  styleUrls: ['./session-detail.component.css']
})
export class SessionDetailComponent implements OnInit {
  
  constructor(private route: ActivatedRoute, private location: Location, private sessionService: SessionService) { }
  session: Session

  ngOnInit() {
    this.getSessionDetail()
  }

  getSessionDetail(): void {
    const id = +this.route.snapshot.paramMap.get("id")
    console.log(id)
    this.sessionService.getSession(id).subscribe(session => (this.session = session))
  }

  goBack(): void {
    this.location.back()
  }

}
