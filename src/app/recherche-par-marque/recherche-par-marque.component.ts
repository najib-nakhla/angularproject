import { Component, OnInit } from '@angular/core';
import { Marque } from '../model/marque.model';
import { Telephone } from '../model/telephone.model';
import { TelephoneService } from '../services/telephone.service';

@Component({
  selector: 'app-recherche-par-marque',
  templateUrl: './recherche-par-marque.component.html',
  styles: [
  ]
})
export class RechercheParMarqueComponent implements OnInit {
  telephones : Telephone[];
  marques : Marque[];
idMar : number;
  

  constructor(private telephoneService: TelephoneService) { }

  ngOnInit(): void {// this.marques = this.telephoneService.listeMarques();
    //this.telephones = this.telephoneService.listeTelephones();
    this.telephoneService.listeTelephone().subscribe(prods => {
      console.log(prods);
      this.telephones = prods;
    });
  }
  onChange() {
   
    this.telephoneService.rechercherParMarque(this.idMar).subscribe(prods => {
      console.log(prods);
      this.telephones = prods;
    });
    }

}
