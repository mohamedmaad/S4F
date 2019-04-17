import { Component, OnInit } from '@angular/core'
import { CompanyService } from '@app/_services/company.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css'],
})
export class AddCompanyComponent implements OnInit {
  active = true
  response

  constructor(private cs: CompanyService, private router: Router) {}

  ngOnInit() {}

  submitCompany(f) {
    console.log(f.value)
    this.addCompany(f.value)
  }

  addCompany(data) {
    this.cs.addCompany(data).subscribe(res => {
      this.response = res as string[]
      if (this.response.status == 'company saved') {
        this.router.navigate(['entreprises'])
      }
    })
  }
}
