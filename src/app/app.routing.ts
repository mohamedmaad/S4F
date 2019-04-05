import { Routes, RouterModule } from '@angular/router'

import { HomeComponent } from './home'
import { LoginComponent } from './login'
import { ProfilComponent } from './profil/profil.component'
import { RegisterComponent } from './register'
import { AuthGuard } from './_guards'
import { CoachesComponent } from '@app/coaches/coaches.component'
import { CoachDetailComponent } from './coach-detail/coach-detail.component'
import { SessionsComponent } from './sessions/sessions.component'
import { SessionDetailComponent } from './session-detail/session-detail.component'
import { CompanyComponent } from './company/company.component'
import { CompanyDetailComponent } from './company-detail/company-detail.component'

const appRoutes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'coaches', component: CoachesComponent },
  { path: 'detail/:id', component: CoachDetailComponent },
  { path: 'coaches/add', component: CoachesComponent },
  { path: 'coach/detail/:id', component: CoachDetailComponent },
  { path: 'coach/add', component: CoachesComponent },
  { path: 'seances', component: SessionsComponent },
  { path: 'seances/ajouter', component: SessionsComponent },
  { path: 'seance/detail/:id', component: SessionDetailComponent },
  { path: 'seances/remove/:id', component: SessionsComponent },
  { path: 'entreprises', component: CompanyComponent },
  { path: 'entreprise/ajouter', component: CompanyComponent },
  { path: 'entreprise/detail-c/:id', component: CompanyDetailComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' },
]

export const routing = RouterModule.forRoot(appRoutes)
