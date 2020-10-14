import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IniciComponent } from './inici/inici.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { ContacteComponent } from './contacte/contacte.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "inici"},
  {path: "inici", component: IniciComponent},
  {path: "galeria", component: GaleriaComponent},
  {path: "contacte", component: ContacteComponent},
  {path: "login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
