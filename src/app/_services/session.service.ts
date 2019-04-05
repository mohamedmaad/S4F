import { Injectable } from '@angular/core';
import { Session } from '@app/_models/session';
import { SESSIONS } from '@app/mock/mock-sessions';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  
  getSessions(): Observable<Session[]> {
    return of(SESSIONS)
  }
  
  getSession(id: number): Observable<Session> {
    return of(SESSIONS.find(session => session.id === id))
  }

  constructor() { }
}