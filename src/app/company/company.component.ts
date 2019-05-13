import { Component, OnInit } from '@angular/core'
import { CompanyService } from '@app/_services/company.service'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
})
export class CompanyComponent implements OnInit {
  companies: any
  response

  constructor(
    private companyService: CompanyService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  getCompanies() {
    return this.companyService.getCompanies().subscribe(companies => {
      this.companies = companies
    })
  }

  // suppression d'une entreprise
  deleteOne(id: string) {
    this.companyService.deleteOne(id).subscribe(res => {
      console.log(res)
      this.response = res as string[]
      console.log(this.response)
      //recharge de la page automatiquement à la suppression d'une entreprise
      if (this.response.status == 'company deleted') {
        location.reload()
      }
    })
  }
  ngOnInit() {
    this.getCompanies()
  }
}
