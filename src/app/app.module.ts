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
import { JwtInterceptor, ErrorInterceptor } from './_helpers'
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
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

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
<<<<<<< HEAD
    ForgotPasswordComponent,
=======
    NavbarComponent,
    ProfilComponent,
>>>>>>> d700efdd8974b85ca218b6c2b9f9426968246f1b
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
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
