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
{"id_cl":"1","nom_cl":"CLINIQUE ETTOWFIGH","tel_cl":"26046835","heure_ov_cl":"16h","heure_f_cl":"20h","type":"general","id_sp":"32","id_dr":"20","nom_sp":"Interniste","nom_doc":"Ahmedou Ndiaye",jour:"JEU",image:"/../../assets/img/tewvi.jpg"},
{"id_cl":"1","nom_cl":"CLINIQUE ETTOWFIGH","tel_cl":"26046835","heure_ov_cl":"18h","heure_f_cl":"22h","type":"general","id_sp":"31","id_dr":"54","nom_sp":"Gynecologue-Obstetricien-Infertilite","nom_doc":"Mohamed Abdelkader",jour:"LUN",image:"/../../assets/img/tewvi.jpg"},
{"id_cl":"1","nom_cl":"CLINIQUE ETTOWFIGH","tel_cl":"26046835","heure_ov_cl":"17h","heure_f_cl":"23h","type":"general","id_sp":"1","id_dr":"19","nom_sp":"L'anesthesiologie et reanimation","nom_doc":"Mouhamed Bebaha",jour:"MAR",image:"/../../assets/img/tewvi.jpg"},
{"id_cl":"1","nom_cl":"CLINIQUE ETTOWFIGH","tel_cl":"26046835","heure_ov_cl":"19h","heure_f_cl":"23h","type":"general","id_sp":"17","id_dr":"10","nom_sp":"La dermatologie","nom_doc":"mariem kebe",jour:"LUN",image:"/../../assets/img/tewvi.jpg"},
{"id_cl":"1","nom_cl":"CLINIQUE ETTOWFIGH","tel_cl":"26046835","heure_ov_cl":"18h","heure_f_cl":"22h","type":"general","id_sp":"30","id_dr":"53","nom_sp":"Antomapathologiste","nom_doc":"Elhaj Mini",jour:"MAR",image:"/../../assets/img/tewvi.jpg"},
{"id_cl":"1","nom_cl":"CLINIQUE ETTOWFIGH","tel_cl":"26046835","heure_ov_cl":"15h","heure_f_cl":"20h","type":"general","id_sp":"3","id_dr":"52","nom_sp":"La cardiologie","nom_doc":"Mohamed Salem Aggrabat",jour:"MER",image:"/../../assets/img/tewvi.jpg"},
{"id_cl":"1","nom_cl":"CLINIQUE ETTOWFIGH","tel_cl":"26046835","heure_ov_cl":"19h","heure_f_cl":"23h","type":"general","id_sp":"8","id_dr":"51","nom_sp":"Oncologie","nom_doc":"Mohamed Lemin saw",jour:"VEN",image:"/../../assets/img/tewvi.jpg"},
{"id_cl":"1","nom_cl":"CLINIQUE ETTOWFIGH","tel_cl":"26046835","heure_ov_cl":"16h","heure_f_cl":"21h","type":"general","id_sp":"10","id_dr":"50","nom_sp":"Pediatre","nom_doc":"Aicha Biha",jour:"SAM",image:"/../../assets/img/tewvi.jpg"},
{"id_cl":"1","nom_cl":"CLINIQUE ETTOWFIGH","tel_cl":"26046835","heure_ov_cl":"20h","heure_f_cl":"00h","type":"general","id_sp":"16","id_dr":"49","nom_sp":"La neurochirurgie","nom_doc":"Mme Ndiack Seck",jour:"MER",image:"/../../assets/img/tewvi.jpg"},
{"id_cl":"1","nom_cl":"CLINIQUE ETTOWFIGH","tel_cl":"26046835","heure_ov_cl":"21h","heure_f_cl":"13h","type":"general","id_sp":"29","id_dr":"48","nom_sp":"Rhumatologue","nom_doc":"Noura Biha",jour:"VEN",image:"/../../assets/img/tewvi.jpg"},
{"id_cl":"1","nom_cl":"CLINIQUE ETTOWFIGH","tel_cl":"26046835","heure_ov_cl":"07h","heure_f_cl":"12h","type":"general","id_sp":"28","id_dr":"47","nom_sp":"Generaliste","nom_doc":"Mostapha Maaloum",jour:"LUN",image:"/../../assets/img/tewvi.jpg"},
{"id_cl":"2","nom_cl":"CLINIQUE KHALIL","tel_cl":"25069191","heure_ov_cl":"16h","heure_f_cl":"23h","type":"general","id_sp":"2","id_dr":"25","nom_sp":"Gastro-entrelogue","nom_doc":"hachem demin",jour:"MAR",image:"/../../assets/img/hop.png"},
{"id_cl":"2","nom_cl":"CLINIQUE KHALIL","tel_cl":"25069191","heure_ov_cl":"08h","heure_f_cl":"14h","type":"general","id_sp":"17","id_dr":"14","nom_sp":"La dermatologie","nom_doc":"Enwar",jour:"VEN",image:"/../../assets/img/hop.png"},
{"id_cl":"2","nom_cl":"CLINIQUE KHALIL","tel_cl":"25069191","heure_ov_cl":"19h","heure_f_cl":"23h","type":"general","id_sp":"18","id_dr":"19","nom_sp":"L'endocrinologie","nom_doc":"Mouhamed Bebaha",jour:"MER",image:"/../../assets/img/hop.png"},
{"id_cl":"2","nom_cl":"CLINIQUE KHALIL","tel_cl":"25069191","heure_ov_cl":"10h","heure_f_cl":"14h","type":"general","id_sp":"4","id_dr":"5","nom_sp":"La chirurgie","nom_doc":"Abdellahi Beichar",jour:"VEN",image:"/../../assets/img/hop.png"},
{"id_cl":"2","nom_cl":"CLINIQUE KHALIL","tel_cl":"25069191","heure_ov_cl":"20h","heure_f_cl":"00h","type":"general","id_sp":"6","id_dr":"7","nom_sp":"Neuphrologue","nom_doc":"Talib Khyar",jour:"SAM",image:"/../../assets/img/hop.png"},
{"id_cl":"2","nom_cl":"CLINIQUE KHALIL","tel_cl":"25069191","heure_ov_cl":"09h","heure_f_cl":"13h","type":"general","id_sp":"14","id_dr":"8","nom_sp":"La chirurgie thoracique ","nom_doc":"Outouma soumare",jour:"MAR",image:"/../../assets/img/hop.png"},
{"id_cl":"2","nom_cl":"CLINIQUE KHALIL","tel_cl":"25069191","heure_ov_cl":"20h","heure_f_cl":"23h","type":"general","id_sp":"13","id_dr":"10","nom_sp":"La chirurgie general\r\n","nom_doc":"mariem kebe",jour:"MAR",image:"/../../assets/img/hop.png"},
{"id_cl":"2","nom_cl":"CLINIQUE KHALIL","tel_cl":"25069191","heure_ov_cl":"16h","heure_f_cl":"23h","type":"general","id_sp":"20","id_dr":"11","nom_sp":"La gynecologie","nom_doc":"jarrouallah",jour:"VEN",image:"/../../assets/img/hop.png"},
{"id_cl":"3","nom_cl":"CLINIQUE IBN KHALDOUNE","tel_cl":"45250200","heure_ov_cl":"11h","heure_f_cl":"16h","type":"general","id_sp":"10","id_dr":"76","nom_sp":"Pediatre","nom_doc":"Sidi Brahim",jour:"MER",image:"/../../assets/img/khaldoun.jpg"},
{"id_cl":"3","nom_cl":"CLINIQUE IBN KHALDOUNE","tel_cl":"45250200","heure_ov_cl":"16h","heure_f_cl":"20h","type":"general","id_sp":"27","id_dr":"75","nom_sp":"Denttiste","nom_doc":"Mohamed Ghoulam",jour:"LUN",image:"/../../assets/img/khaldoun.jpg"},
{"id_cl":"3","nom_cl":"CLINIQUE IBN KHALDOUNE","tel_cl":"45250200","heure_ov_cl":"08h","heure_f_cl":"12h","type":"general","id_sp":"3","id_dr":"74","nom_sp":"La cardiologie","nom_doc":"Cheikh Tourad Dahia",jour:"VEN",image:"/../../assets/img/khaldoun.jpg"},
{"id_cl":"3","nom_cl":"CLINIQUE IBN KHALDOUNE","tel_cl":"45250200","heure_ov_cl":"09h","heure_f_cl":"13h","type":"general","id_sp":"20","id_dr":"73","nom_sp":"La gynecologie","nom_doc":"Moustapha Brahim Lkhalil",jour:"JEU",image:"/../../assets/img/khaldoun.jpg"},
{"id_cl":"3","nom_cl":"CLINIQUE IBN KHALDOUNE","tel_cl":"45250200","heure_ov_cl":"18h","heure_f_cl":"00h","type":"general","id_sp":"34","id_dr":"72","nom_sp":"Diabetologue","nom_doc":"Mohamed Dahia",jour:"MER",image:"/../../assets/img/khaldoun.jpg"},
{"id_cl":"4","nom_cl":"CLINIQUE IBN SINA","tel_cl":"45250888","heure_ov_cl":"09h","heure_f_cl":"12h","type":"general","id_sp":"3","id_dr":"2","nom_sp":"La cardiologie","nom_doc":"Dadde Lbechir",jour:"SAM",image:"/../../assets/img/sina.png"},
{"id_cl":"4","nom_cl":"CLINIQUE IBN SINA","tel_cl":"45250888","heure_ov_cl":"17h","heure_f_cl":"00h","type":"general","id_sp":"5","id_dr":"7","nom_sp":"La chirurgie cardiaque","nom_doc":"Talib Khyar",jour:"MER",image:"/../../assets/img/sina.png"},
{"id_cl":"4","nom_cl":"CLINIQUE IBN SINA","tel_cl":"45250888","heure_ov_cl":"17h","heure_f_cl":"20h","type":"general","id_sp":"2","id_dr":"15","nom_sp":"Gastro-entrelogue","nom_doc":"Ahmed feil",jour:"MAR",image:"/../../assets/img/sina.png"},
{"id_cl":"4","nom_cl":"CLINIQUE IBN SINA","tel_cl":"45250888","heure_ov_cl":"17h","heure_f_cl":"22h","type":"general","id_sp":"4","id_dr":"16","nom_sp":"La chirurgie","nom_doc":"Mohamed El Bokhari",jour:"LUN",image:"/../../assets/img/sina.png"},
{"id_cl":"4","nom_cl":"CLINIQUE IBN SINA","tel_cl":"45250888","heure_ov_cl":"16h","heure_f_cl":"22h","type":"general","id_sp":"6","id_dr":"17","nom_sp":"Neuphrologue","nom_doc":"salek",jour:"MER",image:"/../../assets/img/sina.png"},
{"id_cl":"4","nom_cl":"CLINIQUE IBN SINA","tel_cl":"45250888","heure_ov_cl":"18h","heure_f_cl":"23h","type":"general","id_sp":"10","id_dr":"19","nom_sp":"Pediatre","nom_doc":"Mouhamed Bebaha",jour:"VEN",image:"/../../assets/img/sina.png"},
{"id_cl":"4","nom_cl":"CLINIQUE IBN SINA","tel_cl":"45250888","heure_ov_cl":"15h","heure_f_cl":"21h","type":"general","id_sp":"15","id_dr":"20","nom_sp":"Cardio-vasculaire","nom_doc":"Ahmedou Ndiaye",jour:"MER",image:"/../../assets/img/sina.png"},
{"id_cl":"4","nom_cl":"CLINIQUE IBN SINA","tel_cl":"45250888","heure_ov_cl":"08h","heure_f_cl":"12h","type":"general","id_sp":"23","id_dr":"23","nom_sp":"La medecine interne","nom_doc":"Mouhamed Lemin mouhamed mahmoud",jour:"LUN",image:"/../../assets/img/sina.png"},
{"id_cl":"5","nom_cl":"CLINIQUE CHIVAA","tel_cl":"45258080","heure_ov_cl":"16h","heure_f_cl":"20h","type":"generale","id_sp":"10","id_dr":"26","nom_sp":"Pediatre","nom_doc":"Abass",jour:"MAR",image:"/../../assets/img/chiv.jpg"},
{"id_cl":"5","nom_cl":"CLINIQUE CHIVAA","tel_cl":"45258080","heure_ov_cl":"19h","heure_f_cl":"00h","type":"generale","id_sp":"7","id_dr":"28","nom_sp":"Gastrologue","nom_doc":"Abdallahi El hourma",jour:"JEU",image:"/../../assets/img/chiv.jpg"},
{"id_cl":"5","nom_cl":"CLINIQUE CHIVAA","tel_cl":"45258080","heure_ov_cl":"18h","heure_f_cl":"22h","type":"generale","id_sp":"17","id_dr":"29","nom_sp":"La dermatologie","nom_doc":"Abdellahi Dah",jour:"SAM",image:"/../../assets/img/chiv.jpg"},
{"id_cl":"5","nom_cl":"CLINIQUE CHIVAA","tel_cl":"45258080","heure_ov_cl":"08h","heure_f_cl":"13h","type":"generale","id_sp":"16","id_dr":"30","nom_sp":"La neurochirurgie","nom_doc":"Abdellahi sdi Elmoktar",jour:"JEU",image:"/../../assets/img/chiv.jpg"},
{"id_cl":"5","nom_cl":"CLINIQUE CHIVAA","tel_cl":"45258080","heure_ov_cl":"15h","heure_f_cl":"19h","type":"generale","id_sp":"9","id_dr":"33","nom_sp":"Urologue","nom_doc":"Bechir",jour:"VEN",image:"/../../assets/img/chiv.jpg"},
{"id_cl":"5","nom_cl":"CLINIQUE CHIVAA","tel_cl":"45258080","heure_ov_cl":"16h","heure_f_cl":"22h","type":"generale","id_sp":"6","id_dr":"34","nom_sp":"Neuphrologue","nom_doc":"Beddi Mohamed Lemine",jour:"JEU",image:"/../../assets/img/chiv.jpg"},
{"id_cl":"5","nom_cl":"CLINIQUE CHIVAA","tel_cl":"45258080","heure_ov_cl":"18h","heure_f_cl":"00h","type":"generale","id_sp":"20","id_dr":"35","nom_sp":"La gynecologie","nom_doc":"Bouna Moctar",jour:"VEN",image:"/../../assets/img/chiv.jpg"},
{"id_cl":"6","nom_cl":"CLINIQUE ENJAH","tel_cl":"25000906","heure_ov_cl":"09h","heure_f_cl":"13h","type":"generale","id_sp":"11","id_dr":"69","nom_sp":"Ophtalmologue","nom_doc":"Ahmed Bah Sweydi",jour:"MER",image:"/../../assets/img/nejj.jpg"},
{"id_cl":"6","nom_cl":"CLINIQUE ENJAH","tel_cl":"25000906","heure_ov_cl":"08h","heure_f_cl":"12h","type":"generale","id_sp":"9","id_dr":"68","nom_sp":"Urologue","nom_doc":"Sidi Moahmed Ahmed SIDI",jour:"LUN",image:"/../../assets/img/nejj.jpg"},
{"id_cl":"6","nom_cl":"CLINIQUE ENJAH","tel_cl":"25000906","heure_ov_cl":"17h","heure_f_cl":"21h","type":"generale","id_sp":"29","id_dr":"67","nom_sp":"Rhumatologue","nom_doc":"Mohamed Lemin Ahmedo",jour:"MAR",image:"/../../assets/img/nejj.jpg"},
{"id_cl":"6","nom_cl":"CLINIQUE ENJAH","tel_cl":"25000906","heure_ov_cl":"19h","heure_f_cl":"23h","type":"generale","id_sp":"2","id_dr":"65","nom_sp":"Gastro-entrelogue","nom_doc":"Telmoudi",jour:"SAM",image:"/../../assets/img/nejj.jpg"},
{"id_cl":"6","nom_cl":"CLINIQUE ENJAH","tel_cl":"25000906","heure_ov_cl":"08h","heure_f_cl":"14h","type":"generale","id_sp":"2","id_dr":"25","nom_sp":"Gastro-entrelogue","nom_doc":"hachem demin",jour:"VEN",image:"/../../assets/img/nejj.jpg"},
{"id_cl":"6","nom_cl":"CLINIQUE ENJAH","tel_cl":"25000906","heure_ov_cl":"20h","heure_f_cl":"00h","type":"generale","id_sp":"10","id_dr":"65","nom_sp":"Pediatre","nom_doc":"Telmoudi",jour:"LUN",image:"/../../assets/img/nejj.jpg"},
{"id_cl":"6","nom_cl":"CLINIQUE ENJAH","tel_cl":"25000906","heure_ov_cl":"17h","heure_f_cl":"21h","type":"generale","id_sp":"10","id_dr":"64","nom_sp":"Pediatre","nom_doc":"Khatri Mekhale",jour:"LUN",image:"/../../assets/img/nejj.jpg"},
{"id_cl":"6","nom_cl":"CLINIQUE ENJAH","tel_cl":"25000906","heure_ov_cl":"16h","heure_f_cl":"21h","type":"generale","id_sp":"10","id_dr":"63","nom_sp":"Pediatre","nom_doc":"Bezied",jour:"VEN",image:"/../../assets/img/nejj.jpgg"},
{"id_cl":"6","nom_cl":"CLINIQUE ENJAH","tel_cl":"25000906","heure_ov_cl":"19h","heure_f_cl":"00h","type":"generale","id_sp":"29","id_dr":"57","nom_sp":"Rhumatologue","nom_doc":"Mohamed Lemin Ahmedou",jour:"SAM",image:"/../../assets/img/nejj.jpg"},
{"id_cl":"6","nom_cl":"CLINIQUE ENJAH","tel_cl":"25000906","heure_ov_cl":"19h","heure_f_cl":"22h","type":"generale","id_sp":"16","id_dr":"56","nom_sp":"La neurochirurgie","nom_doc":"Ahmed Jidou",jour:"MER",image:"/../../assets/img/nejj.jpg"},
{"id_cl":"6","nom_cl":"CLINIQUE ENJAH","tel_cl":"25000906","heure_ov_cl":"15h","heure_f_cl":"19h","type":"generale","id_sp":"3","id_dr":"62","nom_sp":"La cardiologie","nom_doc":"Aziz",jour:"LUN",image:"/../../assets/img/nejj.jpg"},
{"id_cl":"6","nom_cl":"CLINIQUE ENJAH","tel_cl":"25000906","heure_ov_cl":"08h","heure_f_cl":"12h","type":"generale","id_sp":"27","id_dr":"61","nom_sp":"Denttiste","nom_doc":"Mariem ",jour:"SAM",image:"/../../assets/img/nejj.jpg"},
{"id_cl":"6","nom_cl":"CLINIQUE ENJAH","tel_cl":"25000906","heure_ov_cl":"15h","heure_f_cl":"20h","type":"generale","id_sp":"27","id_dr":"60","nom_sp":"Denttiste","nom_doc":"Beybety",jour:"MER",image:"/../../assets/img/nejj.jpg"},
{"id_cl":"6","nom_cl":"CLINIQUE ENJAH","tel_cl":"25000906","heure_ov_cl":"17h","heure_f_cl":"21h","type":"generale","id_sp":"27","id_dr":"59","nom_sp":"Denttiste","nom_doc":"Ahmed Salem",jour:"LUN",image:"/../../assets/img/nejj.jpg"},
{"id_cl":"6","nom_cl":"CLINIQUE ENJAH","tel_cl":"25000906","heure_ov_cl":"09h","heure_f_cl":"13h","type":"generale","id_sp":"27","id_dr":"58","nom_sp":"Denttiste","nom_doc":"Ahmedou Elalem",jour:"SAM",image:"/../../assets/img/nejj.jpg"},
{"id_cl":"6","nom_cl":"CLINIQUE ENJAH","tel_cl":"25000906","heure_ov_cl":"18h","heure_f_cl":"00h","type":"generale","id_sp":"33","id_dr":"55","nom_sp":"Pneumologue","nom_doc":"Mohamed Mohamed Naji",jour:"JEU",image:"/../../assets/img/nejj.jpg"},
{"id_cl":"6","nom_cl":"CLINIQUE ENJAH","tel_cl":"25000906","heure_ov_cl":"09h","heure_f_cl":"12h","type":"generale","id_sp":"32","id_dr":"4","nom_sp":"Interniste","nom_doc":"Khaled bye",jour:"LUN",image:"/../../assets/img/nejj.jpg"},
{"id_cl":"6","nom_cl":"CLINIQUE ENJAH","tel_cl":"25000906","heure_ov_cl":"07h","heure_f_cl":"13h","type":"generale","id_sp":"31","id_dr":"30","nom_sp":"Gynecologue-Obstetricien-Infertilite","nom_doc":"Abdellahi sdi Elmoktar",jour:"LUN",image:"/../../assets/img/nejj.jpg"},
{"id_cl":"6","nom_cl":"CLINIQUE ENJAH","tel_cl":"25000906","heure_ov_cl":"09h","heure_f_cl":"13h","type":"generale","id_sp":"31","id_dr":"14","nom_sp":"Gynecologue-Obstetricien-Infertilite","nom_doc":"Enwar",jour:"SAM",image:"/../../assets/img/nejj.jpg"},
{"id_cl":"6","nom_cl":"CLINIQUE ENJAH","tel_cl":"25000906","heure_ov_cl":"15h","heure_f_cl":"19h","type":"generale","id_sp":"31","id_dr":"9","nom_sp":"Gynecologue-Obstetricien-Infertilite","nom_doc":"khadijetou Vilaly",jour:"LUN",image:"/../../assets/img/nejj.jpg"},
{"id_cl":"6","nom_cl":"CLINIQUE ENJAH","tel_cl":"25000906","heure_ov_cl":"19h","heure_f_cl":"00h","type":"generale","id_sp":"31","id_dr":"43","nom_sp":"Gynecologue-Obstetricien-Infertilite","nom_doc":"Mohamed Erajel",jour:"SAM",image:"/../../assets/img/nejj.jpg"},
{"id_cl":"6","nom_cl":"CLINIQUE ENJAH","tel_cl":"25000906","heure_ov_cl":"10h","heure_f_cl":"14h","type":"generale","id_sp":"11","id_dr":"70","nom_sp":"Ophtalmologue","nom_doc":"Abdellahi Kherhi",jour:"MAR",image:"/../../assets/img/nejj.jpg"},
{"id_cl":"6","nom_cl":"CLINIQUE ENJAH","tel_cl":"25000906","heure_ov_cl":"07h","heure_f_cl":"12h","type":"generale","id_sp":"28","id_dr":"71","nom_sp":"Generaliste","nom_doc":"Mohamed salem Bah",jour:"SAM",image:"/../../assets/img/nejj.jpg"},
{"id_cl":"8","nom_cl":"CLINIQUE ELMENAR","tel_cl":"25663312","heure_ov_cl":"16h","heure_f_cl":"20h","type":"generale","id_sp":"5","id_dr":"20","nom_sp":"La chirurgie cardiaque","nom_doc":"Ahmedou Ndiaye",jour:"MAR",image:"/../../assets/img/lmenar.jpg"},
{"id_cl":"8","nom_cl":"CLINIQUE ELMENAR","tel_cl":"25663312","heure_ov_cl":"15h","heure_f_cl":"20h","type":"generale","id_sp":"17","id_dr":"25","nom_sp":"La dermatologie","nom_doc":"hachem demin",jour:"MER",image:"/../../assets/img/lmenar.jpg"},
{"id_cl":"8","nom_cl":"CLINIQUE ELMENAR","tel_cl":"25663312","heure_ov_cl":"16h","heure_f_cl":"20h","type":"generale","id_sp":"21","id_dr":"26","nom_sp":"L'hematologie","nom_doc":"Abass",jour:"LUN",image:"/../../assets/img/lmenar.jpg"},
{"id_cl":"8","nom_cl":"CLINIQUE ELMENAR","tel_cl":"25663312","heure_ov_cl":"08h","heure_f_cl":"13h","type":"generale","id_sp":"16","id_dr":"27","nom_sp":"La neurochirurgie","nom_doc":"Abdallah Mohamed ABBE",jour:"LUN",image:"/../../assets/img/lmenar.jpg"},
{"id_cl":"8","nom_cl":"CLINIQUE ELMENAR","tel_cl":"25663312","heure_ov_cl":"17h","heure_f_cl":"22h","type":"generale","id_sp":"10","id_dr":"36","nom_sp":"Pediatre","nom_doc":"Brahim Diah",jour:"MER",image:"/../../assets/img/lmenar.jpg"},
{"id_cl":"8","nom_cl":"CLINIQUE ELMENAR","tel_cl":"25663312","heure_ov_cl":"18h","heure_f_cl":"23h","type":"generale","id_sp":"12","id_dr":"38","nom_sp":"La chirurgie pediatrique","nom_doc":"Cheikh irabih",jour:"JEU",image:"/../../assets/img/lmenar.jpg"},
{"id_cl":"8","nom_cl":"CLINIQUE ELMENAR","tel_cl":"25663312","heure_ov_cl":"16h","heure_f_cl":"19h","type":"generale","id_sp":"2","id_dr":"40","nom_sp":"Gastro-entrelogue","nom_doc":"Abdellahi Naji",jour:"LUN",image:"/../../assets/img/lmenar.jpg"},
{"id_cl":"8","nom_cl":"CLINIQUE ELMENAR","tel_cl":"25663312","heure_ov_cl":"16h","heure_f_cl":"20h","type":"generale","id_sp":"3","id_dr":"42","nom_sp":"La cardiologie","nom_doc":"Ahmed Meimin",jour:"VEN",image:"/../../assets/img/lmenar.jpg"},
{"id_cl":"8","nom_cl":"CLINIQUE ELMENAR","tel_cl":"25663312","heure_ov_cl":"19h","heure_f_cl":"23h","type":"generale","id_sp":"4","id_dr":"43","nom_sp":"La chirurgie","nom_doc":"Mohamed Erajel",jour:"MER",image:"/../../assets/img/lmenar.jpg"},
{"id_cl":"8","nom_cl":"CLINIQUE ELMENAR","tel_cl":"25663312","heure_ov_cl":"19h","heure_f_cl":"22h","type":"generale","id_sp":"5","id_dr":"45","nom_sp":"La chirurgie cardiaque","nom_doc":"Modamed lemin moylide",jour:"LUN",image:"/../../assets/img/lmenar.jpg"},
{"id_cl":"7","nom_cl":"Clinique Elihsan","tel_cl":"44114048","heure_ov_cl":"08h","heure_f_cl":"12h","type":"general","id_sp":"11","id_dr":"81","nom_sp":"Ophtalmologue","nom_doc":"Mohamed salem abbe",jour:"SAM",image:"/../../assets/img/elihsane.jfif"},
{"id_cl":"7","nom_cl":"Clinique Elihsan","tel_cl":"44114048","heure_ov_cl":"16h","heure_f_cl":"22h","type":"general","id_sp":"27","id_dr":"80","nom_sp":"Denttiste","nom_doc":"Dedah brahim",jour:"LUN",image:"/../../assets/img/elihsane.jfif"},
{"id_cl":"7","nom_cl":"Clinique Elihsan","tel_cl":"44114048","heure_ov_cl":"18h","heure_f_cl":"21h","type":"general","id_sp":"13","id_dr":"78","nom_sp":"La chirurgie general\r\n","nom_doc":"Ahmed Seyid",jour:"MER",image:"/../../assets/img/elihsane.jfif"},
{"id_cl":"7","nom_cl":"Clinique Elihsan","tel_cl":"44114048","heure_ov_cl":"16h","heure_f_cl":"22h","type":"general","id_sp":"8","id_dr":"79","nom_sp":"Oncologie","nom_doc":"Jemila Bouka",jour:"LUN",image:"/../../assets/img/elihsane.jfif"},
{"id_cl":"7","nom_cl":"Clinique Elihsan","tel_cl":"44114048","heure_ov_cl":"09h","heure_f_cl":"13h","type":"general","id_sp":"16","id_dr":"77","nom_sp":"La neurochirurgie","nom_doc":"Abdellahi Elmamoun",jour:"MAR",image:"/../../assets/img/elihsane.jfif"},
{"id_cl":"7","nom_cl":"Clinique Elihsan","tel_cl":"44114048","heure_ov_cl":"10h","heure_f_cl":"15h","type":"general","id_sp":"9","id_dr":"24","nom_sp":"Urologue","nom_doc":"Ahmed Seyid",jour:"SAM",image:"/../../assets/img/elihsane.jfif"},
{"id_cl":"7","nom_cl":"Clinique Elihsan","tel_cl":"44114048","heure_ov_cl":"18h","heure_f_cl":"22h","type":"general","id_sp":"12","id_dr":"22","nom_sp":"La chirurgie pediatrique","nom_doc":"Sidi Mohamed Naji",jour:"VEN",image:"/../../assets/img/elihsane.jfif"},
{"id_cl":"7","nom_cl":"Clinique Elihsan","tel_cl":"44114048","heure_ov_cl":"19h","heure_f_cl":"23h","type":"general","id_sp":"26","id_dr":"21","nom_sp":"Hepato-Gastro-Enterologie","nom_doc":"Hasen Mahfoud",jour:"LUN",image:"/../../assets/img/elihsane.jfif"},
{"id_cl":"7","nom_cl":"Clinique Elihsan","tel_cl":"44114048","heure_ov_cl":"08h","heure_f_cl":"13h","type":"general","id_sp":"20","id_dr":"16","nom_sp":"La gynecologie","nom_doc":"Mohamed El Bokhari",jour:"SAM",image:"/../../assets/img/elihsane.jfif"},
{"id_cl":"7","nom_cl":"Clinique Elihsan","tel_cl":"44114048","heure_ov_cl":"17h","heure_f_cl":"21h","type":"general","id_sp":"15","id_dr":"5","nom_sp":"Cardio-vasculaire","nom_doc":"Abdellahi Beichar",jour:"MER",image:"/../../assets/img/elihsane.jfif"},
{"id_cl":"9","nom_cl":"CLINIQUE DAR ESSIHA","tel_cl":"45292727","heure_ov_cl":"15h","heure_f_cl":"18h","type":"general","id_sp":"16","id_dr":"83","nom_sp":"La neurochirurgie","nom_doc":"Hassan Didi",jour:"VEN",image:"/../../assets/img/hop.png"},
{"id_cl":"9","nom_cl":"CLINIQUE DAR ESSIHA","tel_cl":"45292727","heure_ov_cl":"18h","heure_f_cl":"00h","type":"general","id_sp":"13","id_dr":"82","nom_sp":"La chirurgie general\r\n","nom_doc":"Outhman Mhayham",jour:"JEU",image:"/../../assets/img/hop.png"},
{"id_cl":"9","nom_cl":"CLINIQUE DAR ESSIHA","tel_cl":"45292727","heure_ov_cl":"18h","heure_f_cl":"22h","type":"general","id_sp":"9","id_dr":"3","nom_sp":"Urologue","nom_doc":"Sallah",jour:"LUN",image:"/../../assets/img/hop.png"},
{"id_cl":"9","nom_cl":"CLINIQUE DAR ESSIHA","tel_cl":"45292727","heure_ov_cl":"16h","heure_f_cl":"20h","type":"general","id_sp":"1","id_dr":"19","nom_sp":"L'anesthesiologie et reanimation","nom_doc":"Mouhamed Bebaha",jour:"SAM",image:"/../../assets/img/hop.png"},
{"id_cl":"10","nom_cl":"Clinique Elharameyn","tel_cl":"45250505","heure_ov_cl":"08h","heure_f_cl":"13h","type":"detist","id_sp":"27","id_dr":"86","nom_sp":"Denttiste","nom_doc":"javaar borweys",jour:"MER",image:"/../../assets/img/hop.png"},
{"id_cl":"11","nom_cl":"Clinique El MEDINA","tel_cl":"45258261","heure_ov_cl":"19h","heure_f_cl":"23h","type":"generale","id_sp":"20","id_dr":"85","nom_sp":"La gynecologie","nom_doc":"Sidi Mohamed Abdel aziz",jour:"LUN",image:"/../../assets/img/medinaa.jpg"},
{"id_cl":"11","nom_cl":"Clinique El MEDINA","tel_cl":"45258261","heure_ov_cl":"17h","heure_f_cl":"23h","type":"generale","id_sp":"9","id_dr":"84","nom_sp":"Urologue","nom_doc":"Mohamed Moctar M'babe",jour:"MAR",image:"/../../assets/img/medinaa.jpg"},
{"id_cl":"11","nom_cl":"Clinique El MEDINA","tel_cl":"45258261","heure_ov_cl":"15h","heure_f_cl":"19h","type":"generale","id_sp":"7","id_dr":"74","nom_sp":"Gastrologue","nom_doc":"Cheikh Tourad Dahia",jour:"SAM",image:"/../../assets/img/medinaa.jpg"},
{"id_cl":"11","nom_cl":"Clinique El MEDINA","tel_cl":"45258261","heure_ov_cl":"19h","heure_f_cl":"00h","type":"generale","id_sp":"10","id_dr":"26","nom_sp":"Pediatre","nom_doc":"Abass",jour:"JEU",image:"/../../assets/img/medinaa.jpg"}
];
  }
 

getdoc(id_dr:any,nomdr:any,idcl:any,nomcl:any,telcl:any,heureovcl:any,heurefcl:any,url:any,image:any){
  
  this.router.navigate(['/cliniques/doctor'],{queryParams:{id_dr:id_dr,nomdr:nomdr,idcl:idcl,nomcl:nomcl,telcl:telcl,heureovcl:heureovcl,heurefcl:heurefcl,url:url,image:image}});
    }

}
