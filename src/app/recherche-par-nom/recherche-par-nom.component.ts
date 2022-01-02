import { Component, OnInit } from '@angular/core';
import { Marque } from '../model/marque.model';
import { Telephone } from '../model/telephone.model';
import { TelephoneService } from '../services/telephone.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styles: [
  ]
})
export class RechercheParNomComponent implements OnInit {

  telephones : Telephone[];
  marques : Marque[];
idMar : number;
Nom :string ;
  

  constructor(private telephoneService: TelephoneService) { }

  ngOnInit(): void {// this.marques = this.telephoneService.listeMarques();
    //this.telephones = this.telephoneService.listeTelephones();
    this.telephoneService.listeTelephone().subscribe(prods => {
      console.log(prods);
      this.telephones = prods;
    });
  }
  onChange2() {
   
    this.telephoneService.rechercherParNom(this.Nom).subscribe(prods => {
      console.log(prods);
      this.telephones = prods;
    });
    }

}
