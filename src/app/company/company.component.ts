import { Component, OnInit } from '@angular/core'

import { Company } from '@app/_models/company.ts'

import { CompanyService } from '@app/_services/company.service';

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

  constructor(private companyService: CompanyService) {}

  ngOnInit() {
    this.getCompanies()
  }

  getCompanies(): void {
    this.companyService
      .getCompanies()
      .subscribe(companies => (this.companies = companies))
  }
}