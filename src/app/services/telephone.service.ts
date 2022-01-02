import { Injectable } from '@angular/core';
import { Telephone } from '../model/telephone.model';
import { Marque } from '../model/marque.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TelephoneService {
  telephones: Telephone[]; //un tableau de Telephone
  telephone: Telephone;
  marque: Marque;
  marques: Marque[];
  telephonesRecherche: Telephone[];
  apiURL: string = 'http://localhost:8080/telephones/api';
  apiURL2:string='http://localhost:8080/telephones/api/telsmar/';




  constructor(private http: HttpClient,private authService : AuthService) {



  }



  consulterTelephone(id: number): Observable<Telephone> {
    const url = `${this.apiURL}/${id}`;
let jwt = this.authService.getToken();
jwt = "Bearer "+jwt;
let httpHeaders = new HttpHeaders({"Authorization":jwt})
return this.http.get<Telephone>(url,{headers:httpHeaders});
    }
  listeTelephones(): Telephone[] {
    return this.telephones;
  }
  ajouterTelephone(tel: Telephone): Observable<Telephone> {
    let jwt = this.authService.getToken();
jwt = "Bearer "+jwt;
let httpHeaders = new HttpHeaders({"Authorization":jwt})
return this.http.post<Telephone>(this.apiURL, tel, {headers:httpHeaders});
    
  }
  supprimerTelephone(id : number) {
    const url = `${this.apiURL}/${id}`;
let jwt = this.authService.getToken();
jwt = "Bearer "+jwt;
let httpHeaders = new HttpHeaders({"Authorization":jwt})
return this.http.delete(url, {headers:httpHeaders});

  }



trierTelephones() {
  this.telephones = this.telephones.sort((n1, n2) => {
    if (n1.idTelephone > n2.idTelephone) {
      return 1;
    }
    if (n1.idTelephone < n2.idTelephone) {
      return -1;
    }
    return 0;
  });
}


updateProduit(prod :Telephone) : Observable<Telephone>
{
  let jwt = this.authService.getToken();
  jwt = "Bearer "+jwt;
  let httpHeaders = new HttpHeaders({"Authorization":jwt})
  return this.http.put<Telephone>(this.apiURL, prod, {headers:httpHeaders});
}

listeMarques(): Marque[] {
  return this.marques;
}
consulterMarque(id: number): Marque {
  this.marque = this.marques.find(cat => cat.idMar == id);
  return this.marque;
}


//rechercherParMarque(idMar: number): Telephone[] {
 // this.telephonesRecherche = [];
  //this.telephones.forEach((cur, index) => {
   // if (idMar == cur.marque.idMar) {
     // console.log("cur " + cur);
     // this.telephonesRecherche.push(cur);
   // }
 // });
 // return this.telephonesRecherche;
//}


apiURL3 :string ;

rechercherParMarque(idMar: number):Observable < Telephone[] > {
  
  //this.apiURL3=this.apiURL2.concat(this.apiURL2,idMar.toString());
  return this.http.get<Telephone[]>(this.apiURL2.concat(idMar.toString()));

}



listeTelephone(): Observable < Telephone[] > {
  let jwt = this.authService.getToken();
jwt = "Bearer "+jwt;
let httpHeaders = new HttpHeaders({"Authorization":jwt})
return this.http.get<Telephone[]>(this.apiURL,{headers:httpHeaders}
);
 
}
rechercherParNom(Nom:string):Observable < Telephone[] > {
  return this.http.get<Telephone[]>(this.apiURL.concat("/",Nom));
}


}
