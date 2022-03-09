import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ApiService } from '../api.service';
import {HopitauxPageModule} from './hopitaux.module';
import {Router}  from '@angular/router';
@Component({
  selector: 'app-hopitaux',
  templateUrl: './hopitaux.page.html',
  styleUrls: ['./hopitaux.page.scss'],
})
export class HopitauxPage implements OnInit {
  sliderConfig ={
    spaceBetween: 10,
    centerSlides:true,
    slidesPerview: 1.6
  }
hopital:HopitauxPageModule[]=[];
nom_H:any;
 public hopitaux: string;
  constructor(private activatedRoute: ActivatedRoute,public _apiService:ApiService,
    public router:Router) {
   }
  ngOnInit() {
    this.hopital=[
    {id_H:'1', nom_H:'Center Hospitalier National',url:'https://www.google.fr/maps/place/Centre+Hospitalier+National/@18.0876817,-15.9954061,15z/data=!4m9!1m2!2m1!1shospital!3m5!1s0xe964d76bb609a9f:0xbd07a91281e02bc8!8m2!3d18.0876817!4d-15.9866514!15sCghob3NwaXRhbJIBCGhvc3BpdGFs',image:"/../../assets/img/hospitalier.jpg"},
    {id_H:'3', nom_H:'Hopital Militaire de Nouakchott',url:'https://www.google.fr/maps/place/H%C3%B4pital+Militaire+de+Nouakchott/@18.1032269,-15.9691925,15z/data=!4m9!1m2!2m1!1shospital!3m5!1s0xe9652bdf966aded:0x168382fed5ef4c57!8m2!3d18.1088638!4d-15.9528511!15sCghob3NwaXRhbJIBEW1pbGl0YXJ5X2hvc3BpdGFs',image:"/../../assets/img/militaire.jfif"},
    {id_H:'4', nom_H:'Zayed Hopital',url:'https://www.google.fr/maps/place/Zayed+Hospital/@18.0633238,-15.9664411,15z/data=!4m9!1m2!2m1!1shospital!3m5!1s0xe96526555555555:0xfa2f7ece7a060379!8m2!3d18.0735046!4d-15.9582443!15sCghob3NwaXRhbJIBCGhvc3BpdGFs',image:"/../../assets/img/zayed.jpg"},
    {id_H:'5', nom_H:'Center National de Cardiologie',url:'https://www.google.fr/maps/place/CENTRE+NATIONAL+DE+CARDIOLOGIE/@18.1481029,-16.0035718,15z/data=!4m9!1m2!2m1!1shospital!3m5!1s0xe97b35171b01737:0x373efade1543069f!8m2!3d18.1481029!4d-15.9948171!15sCghob3NwaXRhbJIBCGhvc3BpdGFs',image:"/../../assets/img/cardio.jpg"},
    {id_H:'7', nom_H:'hopital Sadagha',url:"https://www.google.fr/maps/place/H%C3%B4pital+de+l'Amiti%C3%A9/@18.0633238,-15.9598751,17z/data=!3m1!4b1!4m5!3m4!1s0xe96526d5c4420e3:0x3e747c3d94bd0786!8m2!3d18.0633238!4d-15.9576864",image:"/../../assets/img/sadagha.jpg"},
    {id_H:'8', nom_H:'hopital Teyareet',url:'https://www.google.fr/maps/place/Hopital+Teyaret+%D9%85%D8%B3%D8%AA%D9%88%D8%B5%D9%81+%D8%AA%D9%8A%D8%A7%D8%B1%D8%AA%E2%80%AD/@18.1168015,-15.9453276,17z/data=!3m1!4b1!4m5!3m4!1s0xe9652c6f6d699cf:0x9c42af47bb710342!8m2!3d18.1168015!4d-15.9431389',image:"/../../assets/img/6ab.png"},
    {id_H:'9', nom_H:'Hopital Ophalmologique de la Fondation Bouamatou',url:'https://www.google.fr/maps/place/H%C3%B4pital+Ophtalmologique+de+la+Fondation+Bouamatou/@18.1053392,-15.9642669,17z/data=!3m1!4b1!4m5!3m4!1s0xe965298e4f6bd41:0x89a237f80944533a!8m2!3d18.1053392!4d-15.9620782',image:"/../../assets/img/opmtal.jpg"},
    {id_H:'10', nom_H:'Center Hospitallier ds Specialites',url:'https://www.google.fr/maps/place/Centre+Hospitalier+ds+Sp%C3%A9cialit%C3%A9s+%D8%A7%D9%84%D9%85%D8%B1%D9%83%D8%B2+%D8%A7%D9%84%D8%A5%D8%B3%D8%AA%D8%B4%D9%81%D8%A7%D8%A6%D9%8A+%D9%84%D9%84%D8%AA%D8%AE%D8%B5%D8%B5%D8%A7%D8%AA%E2%80%AD/@18.0822773,-16.0004946,17z/data=!3m1!4b1!4m5!3m4!1s0xe964d8d87d13c6d:0x968e8bac91ae7b22!8m2!3d18.0822773!4d-15.9983059',image:"/../../assets/img/ndb.jpg"},
  ];
    this.hopitaux = this.activatedRoute.snapshot.paramMap.get('id');
  }
  sch(){
    if(this.nom_H==""){
      this.router.navigate(['/hopitaux']); this.ngOnInit(); }
    else{
      this.hopital=this.hopital.filter(res=>{
      return res.nom_H.toLocaleLowerCase().match(this.nom_H.toLocaleLowerCase());});}
    }
    getview(idcl:any,nom:any,url:any,image:any){
      this.router.navigate(['/hopitaux/view'],{queryParams:{idcl:idcl,nom:nom,url:url,image:image}});
        }}
