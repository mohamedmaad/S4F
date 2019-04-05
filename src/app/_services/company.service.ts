import { Injectable } from '@angular/core'

import { Company } from '@app/_models/company'
import { COMPANIES } from '@app/mock/mock-companies'
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  getCompanies(): Observable<Company[]> {
    return of(COMPANIES)
  }

  getCompany(id: number): Observable<Company> {
    return of(COMPANIES.find(company => company.id === id))
  }
  constructor() {}
}