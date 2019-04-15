import { Routes, RouterModule } from '@angular/router'

import { LoginComponent } from './login'
import { ProfilComponent } from './profil/profil.component'
import { CoachesComponent } from '@app/coaches/coaches.component'
import { CoachDetailComponent } from './coach-detail/coach-detail.component'
import { SessionsComponent } from './sessions/sessions.component'
import { SessionDetailComponent } from './session-detail/session-detail.component'
import { CompanyComponent } from './company/company.component'
import { CompanyDetailComponent } from './company-detail/company-detail.component'
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component'
import { HomeComponent } from './home/home.component';
import { RegisterationComponent } from './registeration/registeration.component';

const appRoutes: Routes = [
  // { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'register', component: RegisterationComponent },
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
