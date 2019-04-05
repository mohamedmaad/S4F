import { Injectable } from '@angular/core'

import { Coach } from '@app/_models/coach'
import { COACHES } from '@app/mock/mock-coaches'
import { Observable, of } from 'rxjs'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class CoachService {
  getCoaches(): Observable<Coach[]> {
    return of(COACHES)
  }

  getCoach(id: number): Observable<Coach> {
    return of(COACHES.find(coach => coach.id === id))
  }

  uri = 'http://localhost:4000/coaches'

  constructor(private http: HttpClient) {}

  addCoach(firstname, lastname, speciality) {
    const obj = {
      firstname: firstname,
      lastname: lastname,
      speciality: speciality,
    }
    console.log(obj)
    this.http.post(`${this.uri}/add`, obj).subscribe(res => console.log('Done'))
  }
}
