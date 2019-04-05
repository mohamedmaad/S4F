import { Component, OnInit } from '@angular/core'

import { Company } from '@app/_models/company.ts'

import { CompanyService } from '@app/_services/company.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
})
export class CompanyComponent implements OnInit {
  // company: Company = {
  //   id: 1,
  //   name: 'Renault',
  //   activity: 'Automobile',
  //   employeesNumber: 10000,
  //   adress: '100 rue de la paix',
  //   mail: 'info@renault.fr',
  //   tel: '0798989898',
  // }

  companies: Company[]

  constructor(private companyService: CompanyService, private router: Router) {}

  ngOnInit() {
    this.getCompanies()
  }

  getCompanies(): void {
    this.companyService
      .getCompanies()
      .subscribe(companies => (this.companies = companies))
  }

  addCompanyToList(event: any) {
    console.log(event)

    const theCompany: Company = event.theCompany

    let id: number = this.companies.length
    theCompany.id = id += 1

    this.companies.push(theCompany)
  }
}
