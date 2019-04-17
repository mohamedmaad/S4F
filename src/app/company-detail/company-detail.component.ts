import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common'
import { Company } from '@app/_models/company.ts'
import { CompanyService } from '@app/_services/company.service'

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css'],
})
export class CompanyDetailComponent implements OnInit {
  companies: any

  constructor(
    private route: ActivatedRoute,
    private companyService: CompanyService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getCompany()
  }

  getCompany() {
    const id = this.route.snapshot.paramMap.get('id')
    return this.companyService
      .getCompany(id)
      .subscribe(company => (this.companies = company))
  }

  goBack(): void {
    this.location.back()
  }
}
