import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Company } from '@app/_models/company';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {
  @Output() companyIsCreate = new EventEmitter()
  newCompany: Company = new Company()
  active = true

  constructor() {}

  ngOnInit() {}

  submitCompany(){
    this.companyIsCreate.emit({ theCompany: this.newCompany })

    this.newCompany = new Company()

    this.active = false
    setTimeout(() => (this.active = true), 0)
  }
}