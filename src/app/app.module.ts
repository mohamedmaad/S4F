﻿import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

// used to create fake backend
import { fakeBackendProvider } from './_helpers'

import { AppComponent } from './app.component'
import { routing } from './app.routing'

import { CommonModule } from '@angular/common'
import { AlertComponent } from './_components'
import { HomeComponent } from './home'
import { LoginComponent } from './login'
import { RegisterComponent } from './register'
import { CompanyComponent } from './company/company.component'
import { EmployeesComponent } from './employees/employees.component'
import { CoachesComponent } from './coaches/coaches.component'
import { SessionsComponent } from './sessions/sessions.component'
import { CoachDetailComponent } from './coach-detail/coach-detail.component'
import { AddCoachComponent } from './add-coach/add-coach.component'
import { AddSessionComponent } from './add-session/add-session.component'
import { SessionDetailComponent } from './session-detail/session-detail.component'
import { CompanyDetailComponent } from './company-detail/company-detail.component'
import { ProfilComponent } from './profil/profil.component'
import { NavbarComponent } from './navbar/navbar.component'
import { AddCompanyComponent } from './add-company/add-company.component'
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component'
import { CoachService } from './_services/coach.service'

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing,
    FormsModule,
    CommonModule,
  ],
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    ForgotPasswordComponent,
    NavbarComponent,
    ProfilComponent,
    RegisterComponent,
    CompanyComponent,
    CompanyDetailComponent,
    AddCompanyComponent,
    EmployeesComponent,
    CoachesComponent,
    CoachDetailComponent,
    AddCoachComponent,
    SessionsComponent,
    AddSessionComponent,
    SessionDetailComponent,
  ],
  providers: [
    // provider used to create fake backend
    fakeBackendProvider,
    CoachService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
