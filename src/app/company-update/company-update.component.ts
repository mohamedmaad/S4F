import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { CompanyService } from '@app/_services/company.service'

@Component({
  selector: 'app-company-update',
  templateUrl: './company-update.component.html',
  styleUrls: ['./company-update.component.css'],
})
export class CompanyUpdateComponent implements OnInit {
  company: any
  active = true
  response

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private companyService: CompanyService
  ) {}

  ngOnInit() {
    this.getEdit()
  }

  submitUpdate(form) {
    console.log(form.value)
    this.updateCompany(form.value)
  }

  getEdit() {
    let id = this.route.snapshot.paramMap.get('id')
    return this.companyService.getCompany(id).subscribe(company => {
      this.company = company
    })
  }

  updateCompany(data) {
    let id = this.route.snapshot.paramMap.get('id')
    return this.companyService.updateCompany(id, data).subscribe(company => {
      this.company = company
      this.router.navigate(['entreprises'])
    })
  }
}
