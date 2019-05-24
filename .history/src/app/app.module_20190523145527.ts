import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { routing } from './app.routing'

import { CommonModule } from '@angular/common'
import { AlertComponent } from './_components'
import { LoginComponent } from './login'
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
import { HomeComponent } from './home/home.component'
import { RegisterationComponent } from './registeration/registeration.component'
import { CompanyService } from './_services/company.service'
import { SessionService } from './_services/session.service';
import { FooterComponent } from './footer/footer.component'

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
    LoginComponent,
    ForgotPasswordComponent,
    NavbarComponent,
    ProfilComponent,
    RegisterationComponent,
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
    HomeComponent,
    RegisterationComponent,,
    FooterComponent
  ],
  providers: [CoachService, CompanyService, SessionService],
  bootstrap: [AppComponent],
})
export class AppModule {}
