import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ApiService } from '../../api.service';
import {Router}  from '@angular/router';
import {MedicamentsPageModule} from './medicaments.module';
import {MedicamentsPageModule2} from './medicaments.module';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-medicaments',
  templateUrl: './medicaments.page.html',
  styleUrls: ['./medicaments.page.scss'],
})
export class MedicamentsPage implements OnInit {
nom_med:any;
id_ph:any;
h=new Date();
hr='';
o:string;
status:string;
  medicament:MedicamentsPageModule[]=[];
  pharmacy:MedicamentsPageModule2[]=[];
  public medicaments: string;
  constructor(private activatedRoute: ActivatedRoute,
    public _apiService:ApiService, public router:Router,
    public navCtrl:NavController) {
      const hr=this.h.getTime();
console.log(hr); 
 this.hr=formatDate(this.h,'HH ','en-GMT', '+24');
if((hr>=8)&&(hr<=23)){
   this.o='Overt';
    this.status='Fermer 00:00';
}
else {
  this.o='Fermer';
    this.status='Overt 08:00'; 
    
     }
  
     }

  ngOnInit() {
   
   
  }
  sch(){ 
   
        
    if(this.nom_med!=''&&this.nom_med.length>=4){
      this.medicament=[
        {"id_med":"1","nom_med":"ABACAVIR SANDOZ 300 mg","id_ph":"1","nom_ph":"PHRMACIE PARIS" ,"type":"Comprimé","image":"/../../assets/img/sandoz.jpg"},
        {"id_med":"2","nom_med":"ABACAVIR MYLAN 300 mg","id_ph":"1","nom_ph":"PHRMACIE PARIS","type":"Comprimé","image":"/../../assets/img/sandoz.jpg"},
        {"id_med":"3","nom_med":"ABACAVIR\/LAMIVUDINE ARROW 600 mg\/300 mg","id_ph":"1","nom_ph":"PHRMACIE PARIS","type":"Comprimé","image":"/../../assets/img/lamivudine.jpeg"},
        {"id_med":"4","nom_med":"ABASAGLAR 100 unites\/ml","id_ph":"1","nom_ph":"PHRMACIE PARIS","type":"Comprimé","image":"/../../assets/img/sandoz.jpg"},
        {"id_med":"5","nom_med":"ABELCET 5 mg\/ml","id_ph":"1","nom_ph":"PHRMACIE PARIS","type":"Comprimé","image":"/../../assets/img/sandoz.jpg"},
        {"id_med":"6","nom_med":"ABELMOSCHUS BOIRON","id_ph":7, "nom_ph":'pharmacie De La République',"type":"Comprimé","image":"/../../assets/img/sandoz.jpg"},
        {"id_med":"7","nom_med":"ABIES CANADENSIS BOIRON","id_ph":"1","nom_ph":"PHRMACIE PARIS","type":"Comprimé","image":"/../../assets/img/sandoz.jpg"},
        {"id_med":"8","nom_med":"ABIES NIGRA BOIRON","id_ph":"1","nom_ph":"PHRMACIE PARIS","type":"Comprimé","image":"/../../assets/img/sandoz.jpg"},
        {"id_med":"9","nom_med":"ACIDE ALENDRONIQUE\/VITAMINE D3 MYLAN PHARMA 70 mg\/5 600 UI","id_ph":3, "nom_ph":'PHARMACIE Canadian',"type":"Comprimé","image":"/../../assets/img/sandoz.jpg"},
        {"id_med":"10","nom_med":"AMOXICILLINE\/ACIDE CLAVULANIQUE PANPHARMA 2 g\/200 mg ADULTES","id_ph":3, "nom_ph":'PHARMACIE Canadian',"type":"Comprimé","image":"/../../assets/img/sandoz.jpg"},
        {"id_med":"11","nom_med":"AMOXICILLINE\/ACIDE CLAVULANIQUE PANPHARMA 1 g\/100 mg, enfants","id_ph":3, "nom_ph":'PHARMACIE Canadian',"type":"Comprimé","image":"/../../assets/img/sandoz.jpg"},
        {"id_med":"12","nom_med":"AUGMENTIN 1 g\/125 mg","id_ph":3, "nom_ph":'PHARMACIE Canadian',"type":"Comprimé","image":"/../../assets/img/sandoz.jpg"},
        {"id_med":"13","nom_med":"BETAXOLOL EG 20 mg","id_ph":"1","nom_ph":"PHRMACIE PARIS","type":"Comprimé","image":"/../../assets/img/sandoz.jpg"},
        {"id_med":"14","nom_med":"ABACAVIR SANDOZ 300 mg","id_ph":"1","nom_ph":"PHRMACIE PARIS","type":"Comprimé","image":"/../../assets/img/sandoz.jpg"},
        {"id_med":"15","nom_med":"ABACAVIR MYLAN 300 mg","id_ph":"1","nom_ph":"PHRMACIE PARIS","type":"Comprimé","image":"/../../assets/img/sandoz.jpg"},
        {"id_med":"16","nom_med":"BISACODYL BIOGARAN CONSEIL 5 mg","id_ph":"1","nom_ph":"PHRMACIE PARIS","type":"Comprimé","image":"/../../assets/img/sandoz.jpg"},
        {"id_med":"17","nom_med":"BISACODYL CRISTERS 5 mg","id_ph":4, "nom_ph":'pharmacie elighatha',"type":"Comprimé","image":"/../../assets/img/sandoz.jpg"},
        {"id_med":"18","nom_med":"BISACODYL EG LABO CONSEIL 5 mg","id_ph":8, "nom_ph":'pharmacie De La Guérison',"type":"Comprimé","image":"/../../assets/img/sandoz.jpg"},
        {"id_med":"19","nom_med":"BISACODYL MYLAN CONSEIL 5 mg","id_ph":4, "nom_ph":'pharmacie elighatha',"type":"Comprimé","image":"/../../assets/img/sandoz.jpg"},
        {"id_med":"20","nom_med":"BISACODYL SANDOZ CONSEIL 5 mg","id_ph":4, "nom_ph":'pharmacie elighatha',"type":"Comprimé","image":"/../../assets/img/sandoz.jpg"},
        {"id_med":"1","nom_med":"ABACAVIR SANDOZ 300 mg","id_ph":2, "nom_ph":'PHARMACIE RAHMA',"type":"Comprimé","image":"/../../assets/img/sandoz.jpg"},
        {"id_med":"2","nom_med":"ABACAVIR MYLAN 300 mg","id_ph":2, "nom_ph":'PHARMACIE RAHMA',"type":"Comprimé","image":"/../../assets/img/sandoz.jpg"},
        {"id_med":"3","nom_med":"ABACAVIR\/LAMIVUDINE ARROW 600 mg\/300 mg","id_ph":2, "nom_ph":'PHARMACIE RAHMA',"type":"Comprimé","image":"/../../assets/img/sandoz.jpg"},
        {"id_med":"4","nom_med":"ABASAGLAR 100 unites\/ml","id_ph":2, "nom_ph":'PHARMACIE RAHMA',"type":"Comprimé","image":"/../../assets/img/sandoz.jpg"},
        {"id_med":"5","nom_med":"ABELCET 5 mg\/ml","id_ph":2, "nom_ph":'PHARMACIE RAHMA',"type":"Comprimé","image":"/../../assets/img/sandoz.jpg"},
        {"id_med":"6","nom_med":"ABELMOSCHUS BOIRON","id_ph":8, "nom_ph":'pharmacie De La Guérison',"type":"Comprimé","image":"/../../assets/img/sandoz.jpg"},
        {"id_med":"7","nom_med":"ABIES CANADENSIS BOIRON","id_ph":8, "nom_ph":'pharmacie De La Guérison',"type":"Comprimé","image":"/../../assets/img/sandoz.jpg"},
        {"id_med":"8","nom_med":"ABIES NIGRA BOIRON","id_ph":6, "nom_ph":'pharmacie Hopital National',"type":"Comprimé","image":"/../../assets/img/sandoz.jpg"},
        {"id_med":"9","nom_med":"ACIDE ALENDRONIQUE\/VITAMINE D3 MYLAN PHARMA 70 mg\/5 600 UI","id_ph":6, "nom_ph":'pharmacie Hopital National',"type":"Comprimé","image":"/../../assets/img/sandoz.jpg"},
        {"id_med":"10","nom_med":"AMOXICILLINE\/ACIDE CLAVULANIQUE PANPHARMA 2 g\/200 mg ADULTES","id_ph":6, "nom_ph":'pharmacie Hopital National',"type":"Comprimé","image":"/../../assets/img/sandoz.jpg"},
        {"id_med":"11","nom_med":"AMOXICILLINE\/ACIDE CLAVULANIQUE PANPHARMA 1 g\/100 mg, enfants","id_ph":8, "nom_ph":'pharmacie De La Guérison',"type":"Comprimé","image":"/../../assets/img/sandoz.jpg"},
        
        
            ];
      this.medicament=this.medicament.filter(res=>{
      return res.nom_med.toLocaleLowerCase().match(this.nom_med.toLocaleLowerCase());})
      this.medicament=this.medicament.filter(res=>{
      return res.id_ph.toLocaleLowerCase().match(this.id_ph.toLocaleLowerCase());

    })}
    else
    if(this.nom_med==""||this.nom_med.length==0){
      this.router.navigate(['/medicaments']); this.ngOnInit();
    }}
   

}
