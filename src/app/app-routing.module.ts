import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TelephonesComponent } from './telephones/telephones.component';
import { AddTelephoneComponent } from './add-telephone/add-telephone.component';
import { UpdateTelephoneComponent } from './update-telephone/update-telephone.component';
import { RechercheParMarqueComponent} from './recherche-par-marque/recherche-par-marque.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { TelephoneGuard } from './telephone.guard';
import { RechercheParNomComponent} from './recherche-par-nom/recherche-par-nom.component';




const routes: Routes = [
  {path: "telephones", component : TelephonesComponent},
  {path: "add-telephone", component : AddTelephoneComponent,canActivate:[TelephoneGuard]},
  {path: "", redirectTo: "telephones", pathMatch: "full"},
  {path: "updateTelephone/:id", component: UpdateTelephoneComponent},
  {path: "rechercheParMarque", component : RechercheParMarqueComponent},
  {path: 'login', component: LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},
  {path: "rechercheParNom", component : RechercheParNomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
