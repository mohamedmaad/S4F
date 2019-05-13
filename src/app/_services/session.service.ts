import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor(private http: HttpClient) {}

  // url de test en local
  URI_TEST = 'http://localhost:4000'
  // url de test a distance dans un reseau type lan
  URI_DEV = 'http://10.38.164.208:4000'

  getSession(id: string) {
    return this.http.get(`${this.URI_TEST}/session/detail/${id}`)
    //return of(SESSIONS.find(session => session.id === id))
  }

  getSessions() {
    return this.http.get(`${this.URI_TEST}/session`)
    //return of(SESSIONS)
  }

  addSession(data) {
    //console.log(data)
    return this.http.post(`${this.URI_TEST}/session/add`, data)
  }

  deleteOne(id: string) {
    return this.http.post(`${this.URI_TEST}/session/delete`, { id })
  }
}
