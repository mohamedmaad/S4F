import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { SessionService } from '@app/_services/session.service'
import { CoachService } from '@app/_services/coach.service'
import { CompanyService } from '@app/_services/company.service'

@Component({
  selector: 'app-session-update',
  templateUrl: './session-update.component.html',
  styleUrls: ['./session-update.component.css'],
})
export class SessionUpdateComponent implements OnInit {
  session: any
  coaches: any
  companies: any
  active = true
  response

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sessionService: SessionService,
    private coachService: CoachService,
    private companyService: CompanyService
  ) {}

  ngOnInit() {
    this.getEdit()
  }

  submitUpdate(form) {
    //console.log(form.value)
    this.updateSession(form.value)
  }

  getEdit() {
    let id = this.route.snapshot.paramMap.get('id')
    return this.sessionService.getSession(id).subscribe(session => {
      this.session = session
    })
  }

  updateSession(data) {
    let id = this.route.snapshot.paramMap.get('id')
    return this.sessionService.updateSession(id, data).subscribe(session => {
      this.session = session
      this.router.navigate(['seances'])
    })
  }

  // récupération des coaches
  getCoaches() {
    return this.coachService.getCoaches().subscribe(coaches => {
      // console.log(coaches)
      this.coaches = coaches
    })
  }

  // récupération des entreprises
  getCompanies() {
    return this.companyService.getCompanies().subscribe(companies => {
      this.companies = companies
    })
  }
}
