import { Routes, RouterModule } from '@angular/router'

import { HomeComponent } from './home'
import { LoginComponent } from './login'
import { RegisterComponent } from './register'
import { AuthGuard } from './_guards'
import { CoachesComponent } from '@app/coaches/coaches.component'
import { CoachDetailComponent } from './coach-detail/coach-detail.component'

const appRoutes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'coaches', component: CoachesComponent },
  { path: 'detail/:id', component: CoachDetailComponent },
  { path: 'coaches/add', component: CoachesComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' },
]

export const routing = RouterModule.forRoot(appRoutes)
