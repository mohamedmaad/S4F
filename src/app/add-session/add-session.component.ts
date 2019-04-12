import { Component, OnInit, EventEmitter } from '@angular/core'
import { COMPANIES } from '@app/mock/mock-companies'
import { Router } from '@angular/router'
import { Session } from '@app/_models/session'
import { SessionService } from '@app/_services/session.service'
import { CoachService } from '@app/_services/coach.service'
import { Coach } from '@app/_models/coach'
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-add-session',
  templateUrl: './add-session.component.html',
  styleUrls: ['./add-session.component.css'],
})
export class AddSessionComponent implements OnInit {
  session: Session[]
  coaches: any
  today: string
  time: string
  // companies: Company[];
  constructor(
    private _router: Router,
    private sessionService: SessionService,
    private coachService: CoachService // private companyService: CompanyService,
  ) {}

  getSession(): void {
    this.sessionService
      .getSessions()
      .subscribe(session => (this.session = session))
  }

  getCoaches(): void {
    this.coachService.getCoaches().subscribe(coach => (this.coaches = coach))
  }

  getCompany(): void {
    this.sessionService
      .getSessions()
      .subscribe(session => (this.session = session))
  }

  companies = COMPANIES
  ngOnInit() {
    this.getCoaches()
    this.getSession()
    // this.companies = COMPANIES;

    this.today = new Date().toISOString().split('T')[0]
    this.time = new Date()
      .toISOString()
      .split('T')[1]
      .split('.')[0]
      .slice(0, -3)
    console.log(this.time)
  }

  onSubmit(f: NgForm) {
    console.log(f.value)
    console.log(f.reset()) // false
  }
}
