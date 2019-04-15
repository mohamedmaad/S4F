import { Injectable } from '@angular/core'

import { Coach } from '@app/_models/coach'
import { COACHES } from '@app/mock/mock-coaches'
import { Observable, of } from 'rxjs'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class CoachService {
  constructor(private http: HttpClient) {}

  // url de test en local
  URI_TEST = 'http://localhost:4000'
  // url de test a distance dans un reseau type lan
  URI_DEV = 'http://10.38.164.208:4000'

  getCoach(id: string) {
    return this.http.get(`${this.URI_TEST}/coaches/detail/${id}`)
    // return of(COACHES.find(coach => coach.id === id))
  }

  // coaches.component ca return tous les coaches de la base de donnees
  getCoaches() {
    return this.http.get(`${this.URI_TEST}/coaches`)
  }

  addCoach(
    firstname,
    lastname,
    birthday,
    civility,
    speciality,
    company,
    email,
    tel,
    pictures,
    password
  ) {
    const obj = {
      firstname: firstname,
      lastname: lastname,
      birthday: birthday,
      civility: civility,
      speciality: speciality,
      company: company,
      email: email,
      tel: tel,
      pictures: pictures,
      password: password,
    }
    console.log(obj)
    this.http
      .post(`${this.URI_TEST}/add`, { obj: obj })
      .subscribe(res => console.log('Done'))
  }
}
