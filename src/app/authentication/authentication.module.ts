import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HelpComponent } from './help/help.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { routing } from './authentication-routing.module';



@NgModule({
  declarations: [LoginComponent, RegisterComponent, HelpComponent, AuthenticationComponent],
  imports: [
    CommonModule,   
    routing
  ],
  exports:[LoginComponent, RegisterComponent, HelpComponent]
})
export class AuthenticationModule { }
