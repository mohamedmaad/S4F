import { Injectable } from '@angular/core'

import { Coach } from '@app/_models/coach'
import { COACHES } from '@app/mock/mock-coaches'
import { Observable, of } from 'rxjs'

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
  constructor() {}
}
