import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelephonesComponent } from './telephones/telephones.component';
import { AddTelephoneComponent } from './add-telephone/add-telephone.component';
import { FormsModule } from '@angular/forms';
import { UpdateTelephoneComponent } from './update-telephone/update-telephone.component';
import { RechercheParMarqueComponent } from './recherche-par-marque/recherche-par-marque.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HttpClientModule } from '@angular/common/http';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
@NgModule({
  declarations: [
    AppComponent,
    TelephonesComponent,
    AddTelephoneComponent,
    UpdateTelephoneComponent,
    RechercheParMarqueComponent,
    LoginComponent,
    ForbiddenComponent,
    RechercheParNomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
