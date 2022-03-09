import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ApiService } from '../../api.service';
import {Router}  from '@angular/router';
import {ViewPageModule} from './view.module';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {
  
  sp:ViewPageModule[]=[];
  view:any=[
    
  ];
  id:any;
    public cliniques: string;
  constructor(private activatedRoute: ActivatedRoute,
    public _apiService:ApiService, public router:Router,
    public navCtrl:NavController) {

  this.activatedRoute.queryParams.subscribe((res:any)=>{
    console.log("SUCCESS===",res);
    this.view=res;
  },(error:any)=>{ 
    console.log("ERROR===",error);
    
  }
  )
  
  }

  ngOnInit() {
this.sp=[
  {"id_H":"1","nom_H":"Center Hospitalier National","id_cl":"1","nom_cl":"CLINIQUE ETTOWFIGH","tel_cl":"26046835","heure_ov_cl":"00:00:00","heure_f_cl":"23:59:00","id_sp":"32","id_dr":"20","nom_sp":"Interniste","nom_doc":"Ahmedou Ndiaye",image:"/../../assets/img/hospitalier.jpg"},
  {"id_H":"1", nom_H:'Center Hospitalier National',"id_cl":"1","nom_cl":"CLINIQUE ETTOWFIGH","tel_cl":"26046835","heure_ov_cl":"00:00:00","heure_f_cl":"23:59:00","id_sp":"31","id_dr":"54","nom_sp":"Gynecologue-Obstetricien-Infertilite","nom_doc":"Mohamed Abdelkader",image:"/../../assets/img/hospitalier.jpg"},
  {"id_H":"1", nom_H:'Center Hospitalier National',"id_cl":"1","nom_cl":"CLINIQUE ETTOWFIGH","tel_cl":"26046835","heure_ov_cl":"00:00:00","heure_f_cl":"23:59:00","id_sp":"1","id_dr":"19","nom_sp":"L'anesthesiologie et reanimation","nom_doc":"Mouhamed Bebaha",image:"/../../assets/img/hospitalier.jpg"},
  {"id_H":"3", nom_H:'Hopital Militaire de Nouakchott',"id_cl":"3","nom_cl":"CLINIQUE IBN KHALDOUNE","tel_cl":"45250200","heure_ov_cl":"00:00:00","heure_f_cl":"00:00:00","id_sp":"27","id_dr":"75","nom_sp":"Denttiste","nom_doc":"Mohamed Ghoulam",image:"/../../assets/img/militaire.jfif"},
  {"id_H":"3", nom_H:'Hopital Militaire de Nouakchott',"id_cl":"3","nom_cl":"CLINIQUE IBN KHALDOUNE","tel_cl":"45250200","heure_ov_cl":"00:00:00","heure_f_cl":"00:00:00","id_sp":"20","id_dr":"73","nom_sp":"La gynecologie","nom_doc":"Moustapha Brahim Lkhalil",image:"/../../assets/img/militaire.jfif"},
  {"id_H":"4",nom_H:'Zayed Hopital',"id_cl":"4","nom_cl":"CLINIQUE IBN SINA","tel_cl":"45250888","heure_ov_cl":"00:00:00","heure_f_cl":"00:00:00","id_sp":"5","id_dr":"7","nom_sp":"La chirurgie cardiaque","nom_doc":"Talib Khyar",image:"/../../assets/img/zayed.jpg"},
  {"id_H":"4",nom_H:'Zayed Hopital',"id_cl":"4","nom_cl":"CLINIQUE IBN SINA","tel_cl":"45250888","heure_ov_cl":"00:00:00","heure_f_cl":"00:00:00","id_sp":"2","id_dr":"15","nom_sp":"Gastro-entrelogue","nom_doc":"Ahmed feil",image:"/../../assets/img/zayed.jpg"},
  {"id_H":"5", nom_H:'Center National de Cardiologie',"id_cl":"5","nom_cl":"CLINIQUE CHIVAA","tel_cl":"45258080","heure_ov_cl":"00:00:00","heure_f_cl":"00:00:00","id_sp":"10","id_dr":"26","nom_sp":"Pediatre","nom_doc":"Abass",image:"/../../assets/img/cardio.jpg"},
  {"id_H":"5", nom_H:'Center National de Cardiologie',"id_cl":"5","nom_cl":"CLINIQUE CHIVAA","tel_cl":"45258080","heure_ov_cl":"00:00:00","heure_f_cl":"00:00:00","id_sp":"4","id_dr":"26","nom_sp":"La chirurgie","nom_doc":"Abass",image:"/../../assets/img/cardio.jpg"},
  {"id_H":"5", nom_H:'Center National de Cardiologie',"id_cl":"5","nom_cl":"CLINIQUE CHIVAA","tel_cl":"45258080","heure_ov_cl":"00:00:00","heure_f_cl":"00:00:00","id_sp":"7","id_dr":"28","nom_sp":"Gastrologue","nom_doc":"Abdallahi El hourma",image:"/../../assets/img/cardio.jpg"},
  {"id_H":"5", nom_H:'Center National de Cardiologie',"id_cl":"5","nom_cl":"CLINIQUE CHIVAA","tel_cl":"45258080","heure_ov_cl":"00:00:00","heure_f_cl":"00:00:00","id_sp":"17","id_dr":"29","nom_sp":"La dermatologie","nom_doc":"Abdellahi Dah",image:"/../../assets/img/cardio.jpg"},
  {"id_H":"6", nom_H:'Heart Disease Hospital',"id_cl":"3","nom_cl":"CLINIQUE IBN KHALDOUNE","tel_cl":"45250200","heure_ov_cl":"00:00:00","heure_f_cl":"00:00:00","id_sp":"20","id_dr":"73","nom_sp":"La gynecologie","nom_doc":"Moustapha Brahim Lkhalil",image:"/../../assets/img/militaire.jfif"},
  {"id_H":"6",nom_H:'Heart Disease Hospital',"id_cl":"4","nom_cl":"CLINIQUE IBN SINA","tel_cl":"45250888","heure_ov_cl":"00:00:00","heure_f_cl":"00:00:00","id_sp":"5","id_dr":"7","nom_sp":"La chirurgie cardiaque","nom_doc":"Talib Khyar",image:"/../../assets/img/zayed.jpg"},
  {"id_H":"7",nom_H:'hopital Sadagha',"id_cl":"4","nom_cl":"CLINIQUE IBN SINA","tel_cl":"45250888","heure_ov_cl":"00:00:00","heure_f_cl":"00:00:00","id_sp":"2","id_dr":"15","nom_sp":"Gastro-entrelogue","nom_doc":"Ahmed feil",image:"/../../assets/img/zayed.jpg"},
  {"id_H":"7", nom_H:'hopital Sadagha',"id_cl":"5","nom_cl":"CLINIQUE CHIVAA","tel_cl":"45258080","heure_ov_cl":"00:00:00","heure_f_cl":"00:00:00","id_sp":"10","id_dr":"26","nom_sp":"Pediatre","nom_doc":"Abass",image:"/../../assets/img/cardio.jpg"},
  {"id_H":"7", nom_H:'hopital Sadagha',"id_cl":"5","nom_cl":"CLINIQUE CHIVAA","tel_cl":"45258080","heure_ov_cl":"00:00:00","heure_f_cl":"00:00:00","id_sp":"4","id_dr":"26","nom_sp":"La chirurgie","nom_doc":"Abass",image:"/../../assets/img/cardio.jpg"},
  {"id_H":"8", nom_H:'hopital Teyareet',"id_cl":"5","nom_cl":"CLINIQUE CHIVAA","tel_cl":"45258080","heure_ov_cl":"00:00:00","heure_f_cl":"00:00:00","id_sp":"7","id_dr":"28","nom_sp":"Gastrologue","nom_doc":"Abdallahi El hourma",image:"/../../assets/img/cardio.jpg"},
  {"id_H":"8", nom_H:'hopital Teyareet',"id_cl":"5","nom_cl":"CLINIQUE CHIVAA","tel_cl":"45258080","heure_ov_cl":"00:00:00","heure_f_cl":"00:00:00","id_sp":"17","id_dr":"29","nom_sp":"La dermatologie","nom_doc":"Abdellahi Dah",image:"/../../assets/img/cardio.jpg"},
  {"id_H":"9","nom_H":"Hopital Ophalmologique de la Fondation Bouamatou","id_cl":"1","nom_cl":"CLINIQUE ETTOWFIGH","tel_cl":"26046835","heure_ov_cl":"00:00:00","heure_f_cl":"23:59:00","id_sp":"32","id_dr":"20","nom_sp":"Interniste","nom_doc":"Ahmedou Ndiaye",image:"/../../assets/img/hospitalier.jpg"},
  {"id_H":"9", nom_H:'Hopital Ophalmologique de la Fondation Bouamatou',"id_cl":"1","nom_cl":"CLINIQUE ETTOWFIGH","tel_cl":"26046835","heure_ov_cl":"00:00:00","heure_f_cl":"23:59:00","id_sp":"31","id_dr":"54","nom_sp":"Gynecologue-Obstetricien-Infertilite","nom_doc":"Mohamed Abdelkader",image:"/../../assets/img/hospitalier.jpg"},
  {"id_H":"9", nom_H:'Hopital Ophalmologique de la Fondation Bouamatou',"id_cl":"1","nom_cl":"CLINIQUE ETTOWFIGH","tel_cl":"26046835","heure_ov_cl":"00:00:00","heure_f_cl":"23:59:00","id_sp":"1","id_dr":"19","nom_sp":"L'anesthesiologie et reanimation","nom_doc":"Mouhamed Bebaha",image:"/../../assets/img/hospitalier.jpg"},
  {"id_H":"9", nom_H:'Hopital Ophalmologique de la Fondation Bouamatou',"id_cl":"3","nom_cl":"CLINIQUE IBN KHALDOUNE","tel_cl":"45250200","heure_ov_cl":"00:00:00","heure_f_cl":"00:00:00","id_sp":"27","id_dr":"75","nom_sp":"Denttiste","nom_doc":"Mohamed Ghoulam",image:"/../../assets/img/militaire.jfif"},
  {"id_H":"10", nom_H:'Center Hospitallier ds Specialites',"id_cl":"3","nom_cl":"CLINIQUE IBN KHALDOUNE","tel_cl":"45250200","heure_ov_cl":"00:00:00","heure_f_cl":"00:00:00","id_sp":"20","id_dr":"73","nom_sp":"La gynecologie","nom_doc":"Moustapha Brahim Lkhalil",image:"/../../assets/img/militaire.jfif"},
  {"id_H":"10",nom_H:'Center Hospitallier ds Specialites',"id_cl":"4","nom_cl":"CLINIQUE IBN SINA","tel_cl":"45250888","heure_ov_cl":"00:00:00","heure_f_cl":"00:00:00","id_sp":"5","id_dr":"7","nom_sp":"La chirurgie cardiaque","nom_doc":"Talib Khyar",image:"/../../assets/img/zayed.jpg"},
  {"id_H":"10",nom_H:'Center Hospitallier ds Specialites',"id_cl":"4","nom_cl":"CLINIQUE IBN SINA","tel_cl":"45250888","heure_ov_cl":"00:00:00","heure_f_cl":"00:00:00","id_sp":"2","id_dr":"15","nom_sp":"Gastro-entrelogue","nom_doc":"Ahmed feil",image:"/../../assets/img/zayed.jpg"},
  {"id_H":"10", nom_H:'Center Hospitallier ds Specialites',"id_cl":"5","nom_cl":"CLINIQUE CHIVAA","tel_cl":"45258080","heure_ov_cl":"00:00:00","heure_f_cl":"00:00:00","id_sp":"10","id_dr":"26","nom_sp":"Pediatre","nom_doc":"Abass",image:"/../../assets/img/cardio.jpg"},
  {"id_H":"10", nom_H:'Center Hospitallier ds Specialites',"id_cl":"5","nom_cl":"CLINIQUE CHIVAA","tel_cl":"45258080","heure_ov_cl":"00:00:00","heure_f_cl":"00:00:00","id_sp":"4","id_dr":"26","nom_sp":"La chirurgie","nom_doc":"Abass",image:"/../../assets/img/cardio.jpg"},
  {"id_H":"10", nom_H:'Center Hospitallier ds Specialites',"id_cl":"5","nom_cl":"CLINIQUE CHIVAA","tel_cl":"45258080","heure_ov_cl":"00:00:00","heure_f_cl":"00:00:00","id_sp":"7","id_dr":"28","nom_sp":"Gastrologue","nom_doc":"Abdallahi El hourma",image:"/../../assets/img/cardio.jpg"},
  {"id_H":"10", nom_H:'Center Hospitallier ds Specialites',"id_cl":"5","nom_cl":"CLINIQUE CHIVAA","tel_cl":"45258080","heure_ov_cl":"00:00:00","heure_f_cl":"00:00:00","id_sp":"17","id_dr":"29","nom_sp":"La dermatologie","nom_doc":"Abdellahi Dah",image:"/../../assets/img/cardio.jpg"},
   
];
  }
 

getdoc(id_dr:any,nomdr:any,idcl:any,nomcl:any,url:any,image:any){
  
  this.router.navigate(['../cliniques/doctor'],{queryParams:{id_dr:id_dr,nomdr:nomdr,idcl:idcl,nomcl:nomcl,url:url,image:image}});
    }

}
