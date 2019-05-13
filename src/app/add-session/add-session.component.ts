import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { SessionService } from '@app/_services/session.service'
import { CoachService } from '@app/_services/coach.service'
// import { NgForm } from '@angular/forms'
import { CompanyService } from '@app/_services/company.service'

@Component({
  selector: 'app-add-session',
  templateUrl: './add-session.component.html',
  styleUrls: ['./add-session.component.css'],
})
export class AddSessionComponent implements OnInit {
  coaches: any
  today: string
  time: string
  companies: any
  response

  constructor(
    private _router: Router,
    private router: ActivatedRoute,
    private sessionService: SessionService,
    private coachService: CoachService,
    private companyService: CompanyService
  ) {}

  // récupération de la liste des coaches
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

  ngOnInit() {
    this.getCoaches()
    this.getCompanies()
    //this.getSession()
    this.today = new Date().toISOString().split('T')[0]
    this.time = new Date()
      .toISOString()
      .split('T')[1]
      .split('')[0]
      .slice(0, -3)
    console.log(this.time)
  }

  onSubmit(f) {
    console.log(f.value)
    //console.log(f.reset()) // false
    this.addSession(f.value)
  }

  // ajout d'une séance
  addSession(data) {
    this.sessionService.addSession(data).subscribe(res => {
      this.response = res as string[]
      if (this.response.status == 'session saved') {
        this._router.navigate(['seances'])
      }
    })
  }
}
