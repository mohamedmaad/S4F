import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  // on stock la reponse des functions
  response: object

  // url de test en local
  URI_TEST = 'http://localhost:4000'
  // url de test a distance dans un reseau type lan
  URI_DEV = 'http://10.38.164.208:4000'

  // function qui check si user exist dans la bdd grace a api node
  // reponse avec status et 2 parametres:
  // -- status :: logged soit error
  // -- data   :: email envoyer avec la requete
  login(email: string, pwd: string) {
    return this.http.post(`${this.URI_TEST}/users/login`, {
      email: email,
      password: pwd,
    })
  }

  register(data) {
    // console.log()
    return this.http.post(`${this.URI_TEST}/users/register`, data)
  }
}
