import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { CargaDatosComponent } from './carga-datos/carga-datos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    CargaDatosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'login-page', component: LoginPageComponent },
      { path: 'register-page', component: RegisterPageComponent },
      { path: 'carga-datos', component: CargaDatosComponent },

    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
