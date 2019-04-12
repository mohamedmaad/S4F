import { Injectable } from '@angular/core'
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router'

import { AuthenticationService } from '@app/_services'

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | import('rxjs').Observable<boolean> | Promise<boolean> {
    throw new Error('Method not implemented.')
  }
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}
}
