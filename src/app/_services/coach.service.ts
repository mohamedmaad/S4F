import { Injectable } from '@angular/core'

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
  }

  // coaches.component ca return tous les coaches de la base de donnees
  getCoaches() {
    return this.http.get(`${this.URI_TEST}/coaches`)
  }

  // ajout d'un coach dans ma bdd
  addCoach(data) {
    console.log(data)
    return this.http.post(`${this.URI_TEST}/coaches/add`, data)
  }

  getEdit(id: string) {
    return this.http.get(`${this.URI_TEST}/coaches/edit/${id}`)
  }

  updateCoach(id: string, data) {
    console.log(data)
    this.http.post(`${this.URI_TEST}/coaches/update/${id}`, data)
  }

  // suppression d'un coach dans ma bdd
  deleteOne(id: string) {
    return this.http.post(`${this.URI_TEST}/coaches/delete`, { id })
  }

  // Upload Image


}
