import { Component, OnInit } from '@angular/core';
import { Telephone } from '../model/telephone.model';
import { TelephoneService } from '../services/telephone.service';
import { Marque } from '../model/marque.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-telephone',
  templateUrl: './add-telephone.component.html',
  styleUrls: ['./add-telephone.component.css']
})
export class AddTelephoneComponent implements OnInit {
newTelephone :Telephone = new Telephone();
  
  
  message: string;
  marques: Marque[];
  newIdMar: number;
  newMarque: Marque;
  router :Router;
  idMar :number ;
 


  constructor(private telephoneService: TelephoneService ,router :Router ) { }

  ngOnInit(): void {
    this.marques = this.telephoneService.listeMarques();
  }
  addTelephone() {
    //console.log(this.newTelephone);
    // this.newMarque = this.telephoneService.consulterMarque(this.newIdMar);
    //this.newTelephone.marque = this.newMarque;
    // this.telephoneService.ajouterTelephone(this.newTelephone);
    this.telephoneService.ajouterTelephone(this.newTelephone)
      .subscribe(prod => {
        this.router.navigate(['/telephones']);
      });
      

  }

}
