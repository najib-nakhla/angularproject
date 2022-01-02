import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { TelephoneService } from '../services/telephone.service';
import { Telephone } from '../model/telephone.model';
import { Marque } from '../model/marque.model';


@Component({
  selector: 'app-update-telephone',
  templateUrl: './update-telephone.component.html',
  styles: [
  ]
})
export class UpdateTelephoneComponent implements OnInit {
  currentTelephone = new Telephone();
  marques : Marque[];
  updatedMarque : Marque;

  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private telephoneService: TelephoneService) { }

  ngOnInit(): void {
  //  this.marques = this.telephoneService.listeMarques();
    this.telephoneService.consulterTelephone(this.activatedRoute.snapshot.params.id).
 subscribe( prod =>{ this.currentTelephone = prod; } ) ;


  }

  updateTelephone()
{ //console.log(this.currentProduit);
//this.telephoneService.updateTelephone(this.currentTelephone);
//this.router.navigate(['telephones']);
//this.updatedMarque =this.telephoneService.consulterMarque(this.currentTelephone.marque.idMar);
//this.currentTelephone.marque = this.updatedMarque; 
this.telephoneService.updateProduit(this.currentTelephone).subscribe(prod => {
  this.router.navigate(['/telephones']);
  },(error) => { alert("Problème lors de la modification !"); }
  );
}

}
