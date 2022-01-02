import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Telephone } from '../model/telephone.model';
import { AuthService } from '../services/auth.service';
import { TelephoneService } from '../services/telephone.service';
@Component({
  selector: 'app-telephones',
  templateUrl: './telephones.component.html',
  styleUrls: ['./telephones.component.css']
})
export class TelephonesComponent implements OnInit {
  private router :Router;

  constructor(private telephoneService: TelephoneService, public authService: AuthService, router :Router) {
    //this.telephones = telephoneService.listeTelephones();


  }
  telephones: Telephone[]; //un tableau de chînes de ca ractères
  ngOnInit(): void {
    this.telephoneService.listeTelephone().subscribe(prods => {
      console.log(prods);
      this.telephones = prods;
    });


  }
  supprimerTelephone(t: Telephone) {
    
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.telephoneService.supprimerTelephone(t.idTelephone).subscribe(() => {
        console.log("produit supprimé");
        this.SuprimerProduitDuTableau(t);

      });
      this.router.navigate(['produits']).then(() => {
      window.location.reload();
    });
    

  }
  SuprimerProduitDuTableau(prod : Telephone) {
    this.telephones.forEach((cur, index) => {
    if(prod.idTelephone=== cur.idTelephone) {
    this.telephones.splice(index, 1);
    }
    });
    }



}
