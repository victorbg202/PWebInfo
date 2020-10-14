import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IniciComponent } from './inici/inici.component';
import { HeaderPrincipalComponent } from './header-principal/header-principal.component';
import { LoginComponent } from './login/login.component';
import { ContacteComponent } from './contacte/contacte.component';
import { FooterComponent } from './footer/footer.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { NavBarPrincipalComponent } from './nav-bar-principal/nav-bar-principal.component';

@NgModule({
  declarations: [
    AppComponent,
    IniciComponent,
    HeaderPrincipalComponent,
    LoginComponent,
    ContacteComponent,
    FooterComponent,
    GaleriaComponent,
    NavBarPrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
