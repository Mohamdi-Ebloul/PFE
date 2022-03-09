import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ApiService } from '../api.service';
import {Router}  from '@angular/router';
import {CliniquesPageModule} from './cliniques.module';


@Component({
  selector: 'app-cliniques',
  templateUrl: './cliniques.page.html',
  styleUrls: ['./cliniques.page.scss'],
})
export class CliniquesPage implements OnInit {

  sliderConfig ={
    spaceBetween: 10,
    centerSlides:true,
    slidesPerview: 1.6
   
  }
  clinique:CliniquesPageModule[]=[];
 nom:any;
  public cliniques: string;
  constructor(public activatedRoute: ActivatedRoute,public router:Router,public _apiService:ApiService,
 public navCtrl:NavController) {
    
     }


  ngOnInit() {
    this.cliniques = this.activatedRoute.snapshot.paramMap.get('id');

    this.clinique=[
      {"id_cl":"1","nom_cl":"CLINIQUE ETTOWFIGH","tel_cl":"26046835","heure_ov_cl":"00:00:00","heure_f_cl":"23:59:00","type":"general","url":"https://www.google.fr/maps/place/Clinique+ETTOWFIGH+%D9%85%D8%B5%D8%AD%D8%A9+%D8%A7%D9%84%D8%AA%D9%88%D9%81%D9%8A%D9%82%E2%80%AD/@18.0888577,-15.9981239,17z/data=!3m1!4b1!4m5!3m4!1s0xe964dc7e0974255:0x90ab383e5578ffee!8m2!3d18.0888601!4d-15.9959293",image:"/../../assets/img/tewvi.jpg"},
    {"id_cl":"3","nom_cl":"CLINIQUE IBN KHALDOUNE","tel_cl":"45250200","heure_ov_cl":"00:00:00","heure_f_cl":"00:00:00","type":"general","url":"https://www.google.fr/maps/place/CLINIQUE+IBN+KHALDOUN+%D9%85%D8%B5%D8%AD%D8%A9+%D8%A5%D8%A8%D9%86+%D8%AE%D9%84%D8%AF%D9%88%D9%86%E2%80%AD/@18.0746922,-15.9523818,17z/data=!3m1!4b1!4m5!3m4!1s0xe9652662f6d2bb5:0x7ede844dfcdcf064!8m2!3d18.0746922!4d-15.9501931",image:"/../../assets/img/khaldoun.jpg"},
    {"id_cl":"4","nom_cl":"CLINIQUE IBN SINA","tel_cl":"45250888","heure_ov_cl":"00:00:00","heure_f_cl":"00:00:00","type":"general","url":"https://www.google.fr/maps/place/Ibn+Sina+clinic/@18.0735046,-15.960433,17z/data=!3m1!4b1!4m5!3m4!1s0xe96526555555555:0x5e71fc155f125f2!8m2!3d18.0735046!4d-15.9582443",image:"/../../assets/img/sina.png"},
    {"id_cl":"5","nom_cl":"CLINIQUE CHIVAA","tel_cl":"45258080","heure_ov_cl":"00:00:00","heure_f_cl":"00:00:00","type":"generale","url":"https://www.google.fr/maps/place/Clinique+Chiva+%D9%85%D8%B5%D8%AD%D8%A9+%D8%A7%D9%84%D8%B4%D9%81%D8%A7%D8%A1%E2%80%AD/@18.100536,-15.9868033,17z/data=!3m1!4b1!4m5!3m4!1s0xe964d68d6044017:0xdc962793b946e88a!8m2!3d18.1005309!4d-15.9846146",image:"/../../assets/img/chiv.jpg"},
     {"id_cl":"2","nom_cl":"CLINIQUE KHALIL","tel_cl":"25069191","heure_ov_cl":"00:00:00","heure_f_cl":"23:58:14","type":"general","url":"https://www.google.fr/maps/place/Clinique+Chiva+%D9%85%D8%B5%D8%AD%D8%A9+%D8%A7%D9%84%D8%B4%D9%81%D8%A7%D8%A1%E2%80%AD/@18.100536,-15.9868033,17z/data=!3m1!4b1!4m5!3m4!1s0xe964d68d6044017:0xdc962793b946e88a!8m2!3d18.1005309!4d-15.9846146",image:"/../../assets/img/hop.png"},
    {"id_cl":"6","nom_cl":"CLINIQUE ENJAH","tel_cl":"25000906","heure_ov_cl":"00:00:00","heure_f_cl":"00:00:00","type":"generale","url":"https://www.google.fr/maps/place/%D9%85%D8%B5%D8%AD%D8%A9+%D8%A7%D9%84%D9%86%D8%AC%D8%A7%D8%AD%E2%80%AD/@18.0752395,-15.9869866,13z/data=!4m9!1m2!2m1!1sclinique+nejah!3m5!1s0xe96536dda6138e7:0x9a46359b1f7a76a7!8m2!3d18.0752395!4d-15.9519677!15sCg5jbGluaXF1ZSBuZWphaJIBDm1lZGljYWxfY2xpbmlj",image:"/../../assets/img/nejj.jpg"},
    {"id_cl":"8","nom_cl":"CLINIQUE ELMENAR","tel_cl":"25663312","heure_ov_cl":"00:00:00","heure_f_cl":"00:00:00","type":"generale","url":"https://www.google.fr/maps/place/Clinique+El+Manar/@18.1003219,-15.9641584,17z/data=!3m1!4b1!4m5!3m4!1s0xe9653103a47c171:0xd88f35e028b7653b!8m2!3d18.1003219!4d-15.9619697",image:"/../../assets/img/lmenar.jpg"},
    {"id_cl":"7","nom_cl":"Clinique Elihsane","tel_cl":"45250505","heure_ov_cl":"00:00:00","heure_f_cl":"00:00:00","type":"general","url":"https://www.google.fr/maps/place/Clinique+ELIHSANE+%D9%85%D8%B5%D8%AD%D8%A9+%D8%A7%D9%84%D8%A5%D8%AD%D8%B3%D8%A7%D9%86%E2%80%AD/@18.1065701,-15.975597,17z/data=!3m1!4b1!4m5!3m4!1s0xe964d6083b7302b:0xa8fba70e0a8e8b84!8m2!3d18.106565!4d-15.9734083",image:"/../../assets/img/elihsan.jfif"},
    {"id_cl":"9","nom_cl":"CLINIQUE DAR ESSIHA","tel_cl":"45292727","heure_ov_cl":"00:00:00","heure_f_cl":"00:00:00","type":"general","url":"https://www.google.fr/maps/place/Clinique+Chiva+%D9%85%D8%B5%D8%AD%D8%A9+%D8%A7%D9%84%D8%B4%D9%81%D8%A7%D8%A1%E2%80%AD/@18.100536,-15.9868033,17z/data=!3m1!4b1!4m5!3m4!1s0xe964d68d6044017:0xdc962793b946e88a!8m2!3d18.1005309!4d-15.9846146",image:"/../../assets/img/hop.png"},
    {"id_cl":"10","nom_cl":"Clinique Elharameyn","tel_cl":"45250505","heure_ov_cl":"00:00:00","heure_f_cl":"00:00:00","type":"detist","url":"https://www.google.fr/maps/place/%D8%B9%D9%8A%D8%A7%D8%AF%D8%A9+%D8%A7%D9%84%D8%AD%D8%B1%D9%85%D9%8A%D9%86+%D9%84%D9%84%D8%A3%D8%B3%D9%86%D8%A7%D9%86%E2%80%AD/@18.0776609,-15.9636987,17z/data=!3m1!4b1!4m5!3m4!1s0xe96527b9f36283d:0xc8a88d07697fb71d!8m2!3d18.0776609!4d-15.96151",image:"/../../assets/img/hop.png"},
    {"id_cl":"11","nom_cl":"Clinique El MEDINA","tel_cl":"45258261","heure_ov_cl":"00:00:00","heure_f_cl":"00:00:00","type":"generale","url":"https://www.google.fr/maps/place/CLINIQUE+EL+MEDINA+%D9%85%D8%B5%D8%AD%D8%A9+%D8%A7%D9%84%D9%85%D8%AF%D9%8A%D9%86%D8%A9%E2%80%AD/@18.0983107,-15.9797174,17z/data=!3m1!4b1!4m5!3m4!1s0xe964d571671ff19:0x544b52737a842dc7!8m2!3d18.0983107!4d-15.9775287",image:"/../../assets/img/medinaa.jpg"},
    {"id_cl":"12","nom_cl":"Clinique El KHEIR","tel_cl":"45250246","heure_ov_cl":"00:00:00","heure_f_cl":"00:00:00","type":"general","url":"https://www.google.fr/maps/place/%D8%B9%D9%8A%D8%A7%D8%AF%D8%A9+%D8%A7%D9%84%D8%AE%D9%8A%D8%B1%E2%80%AD/@18.0755869,-15.9536005,17z/data=!4m12!1m6!3m5!1s0xe9653c8fa48cf89:0x380ae1b8ac7a7b57!2z2LnZitin2K_YqSDYp9mE2K7Zitix!8m2!3d18.0755869!4d-15.9514118!3m4!1s0xe9653c8fa48cf89:0x380ae1b8ac7a7b57!8m2!3d18.0755869!4d-15.9514118",image:"/../../assets/img/lkher.JPG"},
    {"id_cl":"13","nom_cl":"Clinique EERRIDHA","tel_cl":"45682531","heure_ov_cl":"00:00:00","heure_f_cl":"00:00:00","type":"generale","url":"https://www.google.fr/maps/place/Clinique+Erridha/@18.0748911,-15.9527774,17z/data=!3m1!4b1!4m5!3m4!1s0xe965266234cc64b:0xd62752c0be01efd5!8m2!3d18.0748911!4d-15.9505887",image:"/../../assets/img/ridaa.JPG"}
  ];
      
  }

  sch(){
    if(this.nom!=""){
      this.clinique=this.clinique.filter(res=>{
      return res.nom_cl.toLocaleLowerCase().match(this.nom.toLocaleLowerCase());
    })}
    else
    if(this.nom==""||this.nom.length==0){
     
      this.router.navigate(['/cliniques']); this.ngOnInit();
    }  
    }
    
getview(idcl:any,nom:any,tel:any,ho:any,hf:any,url:any,image:any){
  
  this.router.navigate(['/cliniques/view'],{queryParams:{idcl:idcl,nom:nom,tel:tel,ho:ho,hf:hf,url:url,image:image}});
    }

}