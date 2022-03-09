import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import {LaboratoiresPageModule} from './laboratoires.module';
import { formatDate } from '@angular/common';
import {Router}  from '@angular/router';

declare var google: any;

@Component({
  selector: 'app-laboratoires',
  templateUrl: './laboratoires.page.html',
  styleUrls: ['./laboratoires.page.scss'],
  providers:[ApiService]
})
export class LaboratoiresPage implements OnInit {
    public laboratoires: string;
   
    laboratoir:LaboratoiresPageModule[]=[];
    nomlab:any;
    h=new Date();
hr='';
o:string;
status:string;
  constructor(private activatedRoute: ActivatedRoute,public _apiService:ApiService,public router:Router) {
    const hr=this.h.getTime();
    console.log(hr); 
     this.hr=formatDate(this.h,'HH ','en-GMT', '+24');
    if((hr>=8)&&(hr<20)){
      this.o='Overt';
        this.status='Fermer 08:00';
    }
    else {
         this.o='Fermer';
        this.status='Overt 08:00'; 
         }
   }

  ngOnInit() {
    this.laboratoires = this.activatedRoute.snapshot.paramMap.get('id');
    this.laboratoir=[
  {id_lab:'1', nom_lab:'ALS Geochemistry', tel_lab:45290034, heure_ov_lab:'08:00', heure_f_lab:'23:00',url:'https://www.google.com/maps/place/ALS+Geochemistry+-+Nouakchott/@18.07353,-15.960433,16.87z/data=!4m9!1m2!2m1!1slaboratoires,+Nouakchott,+Mauritanie!3m5!1s0xe96528f886e4905:0xc58d0a4c99728eac!8m2!3d18.0944576!4d-15.958113!15sCiRsYWJvcmF0b2lyZXMsIE5vdWFrY2hvdHQsIE1hdXJpdGFuaWWSAQpsYWJvcmF0b3J5?hl=fr'},
  {id_lab:'2', nom_lab:'LAB IBN EL HAITHAM', tel_lab:45002598, heure_ov_lab:'14:00', heure_f_lab:'23:00',url:'https://www.google.com/maps/place/LAB+IBN+EL+HAITHAM/@18.07353,-15.960433,16.87z/data=!4m9!1m2!2m1!1slaboratoires,+Nouakchott,+Mauritanie!3m5!1s0xe9653c873773705:0x3e9c20f1fb61acd8!8m2!3d18.0758257!4d-15.9540448!15sCiRsYWJvcmF0b2lyZXMsIE5vdWFrY2hvdHQsIE1hdXJpdGFuaWWSAQttZWRpY2FsX2xhYg?hl=fr'},
  {id_lab:'3', nom_lab:'Maurilab', tel_lab:43000001, heure_ov_lab:'08:00', heure_f_lab:'23:00',url:'https://www.google.com/maps/place/Maurilab+%D9%85%D9%88%D8%B1%D9%8A%D9%84%D8%A7%D8%A8%E2%80%AD/@18.07353,-15.960433,16.87z/data=!4m9!1m2!2m1!1slaboratoires,+Nouakchott,+Mauritanie!3m5!1s0xe964d772dbb688d:0xab6b7fb6a83810c0!8m2!3d18.0884136!4d-15.9840614!15sCiRsYWJvcmF0b2lyZXMsIE5vdWFrY2hvdHQsIE1hdXJpdGFuaWWSAQttZWRpY2FsX2xhYg?hl=fr'},
  {id_lab:'4', nom_lab:'GL Grand Laboratoire', tel_lab:45253332, heure_ov_lab:'08:00', heure_f_lab:'23:00',url:'https://www.google.com/maps/place/GL+Grand+Laboratoire/@18.07353,-15.960433,16.87z/data=!4m9!1m2!2m1!1slaboratoires,+Nouakchott,+Mauritanie!3m5!1s0xe964d25ed23d715:0xd8e2ef159ff7438c!8m2!3d18.0882496!4d-15.9845571!15sCiRsYWJvcmF0b2lyZXMsIE5vdWFrY2hvdHQsIE1hdXJpdGFuaWWSAQttZWRpY2FsX2xhYg?hl=fr'},
  {id_lab:'5', nom_lab:'Chinguilab', tel_lab:45293486, heure_ov_lab:'08:00', heure_f_lab:'23:00',url:'https://www.google.com/maps/place/%D8%B4%D9%86%D9%82%D9%8A%D9%84%D8%A7%D8%A8+Chinguilab%E2%80%AD/@18.07353,-15.960433,16.87z/data=!4m9!1m2!2m1!1slaboratoires,+Nouakchott,+Mauritanie!3m5!1s0xe964d1d33e1f597:0x6447937ec7677925!8m2!3d18.1050475!4d-15.979455!15sCiRsYWJvcmF0b2lyZXMsIE5vdWFrY2hvdHQsIE1hdXJpdGFuaWWSAQpsYWJvcmF0b3J5?hl=fr'},
  {id_lab:'6', nom_lab:'Laboratoire Analyse Medicales 3M', tel_lab:44804040, heure_ov_lab:'08:00', heure_f_lab:'23:00',url:'https://www.google.com/maps/place/Laboratoire+Analyses+M%C3%A9dicales+3M/@18.07353,-15.960433,16.87z/data=!4m9!1m2!2m1!1slaboratoires,+Nouakchott,+Mauritanie!3m5!1s0xe9652662581e6a5:0xb0d9f5a695f0835c!8m2!3d18.0747606!4d-15.9502552!15sCiRsYWJvcmF0b2lyZXMsIE5vdWFrY2hvdHQsIE1hdXJpdGFuaWWSAQttZWRpY2FsX2xhYg?hl=fr'},
  {id_lab:'7', nom_lab:'Iman Lab', tel_lab:45260012, heure_ov_lab:'08:00', heure_f_lab:'23:00',url:'https://www.google.com/maps/place/%D9%85%D8%AE%D8%AA%D8%A8%D8%B1+%D8%A5%D9%8A%D9%85%D8%A7%D9%86+Iman+Lab%E2%80%AD/@18.07353,-15.960433,16.87z/data=!4m9!1m2!2m1!1slaboratoires,+Nouakchott,+Mauritanie!3m5!1s0xe96532a9d70f74f:0x4913d12ce6c1889!8m2!3d18.1313764!4d-15.9349035!15sCiRsYWJvcmF0b2lyZXMsIE5vdWFrY2hvdHQsIE1hdXJpdGFuaWWSAQttZWRpY2FsX2xhYg?hl=fr'},
  {id_lab:'8', nom_lab:'MAGMA LAB', tel_lab:45257017, heure_ov_lab:'08:00', heure_f_lab:'23:00',url:'https://www.google.com/maps/place/MAGMA+LAB/@18.07353,-15.960433,16.87z/data=!4m5!3m4!1s0xe964d5a3c3371db:0xca6d17a0dbc433df!8m2!3d18.1163748!4d-15.9768999?hl=fr'},
  {id_lab:'9', nom_lab:'ACCESS ENGINEERING/ MIZAN LAB', tel_lab:32046624, heure_ov_lab:'08:00', heure_f_lab:'23:00',url:'https://www.google.com/maps/place/MIZAN+LABS/@18.07353,-15.960433,16.87z/data=!4m5!3m4!1s0xe965388ceea0ecf:0x554d493491f699a0!8m2!3d18.1106172!4d-16.0018305?hl=fr'},
  {id_lab:'10', nom_lab:'My lab', tel_lab:34000033, heure_ov_lab:'08:00', heure_f_lab:'23:00',url:'https://www.google.com/maps/place/Mylab/@18.07353,-15.960433,16.87z/data=!4m9!1m2!2m1!1slaboratoires,+Nouakchott,+Mauritanie!3m5!1s0xe964d4fa730562f:0x6f99aa8769a9e156!8m2!3d18.0878643!4d-15.9860449!15sCiRsYWJvcmF0b2lyZXMsIE5vdWFrY2hvdHQsIE1hdXJpdGFuaWWSAQpsYWJvcmF0b3J5?hl=fr'},
  {id_lab:'11', nom_lab:'Dentech Dental Lab', tel_lab:46727777, heure_ov_lab:'08:00', heure_f_lab:'23:00',url:'https://www.google.com/maps/place/Dentech+Dental+Lab/@18.07353,-15.960433,16.87z/data=!4m5!3m4!1s0xe964d61bd24ecf7:0x6a182734e53807a2!8m2!3d18.1168469!4d-16.0044869?hl=fr'},
]

  }
  
  sch(){
    if(this.nomlab!=" "){
      this.laboratoir=this.laboratoir.filter(res=>{
      return res.nom_lab.toLocaleLowerCase().match(this.nomlab.toLocaleLowerCase());
    })}
    else
    if(this.nomlab==""){
      this.router.navigate(['/laboratoires']); this.ngOnInit();
    }
    
    }
    get(id_lab:any,nom_lab:any,tel_lab:any,url:any,o:any,status:any){
  
      this.router.navigate(['/laboratoires/examens'],{queryParams:{id_lab:id_lab,nom_lab:nom_lab,tel_lab:tel_lab,url:url,o:o,status:status}});
        }
}
