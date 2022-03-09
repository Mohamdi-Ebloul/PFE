import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import {PharmaciesPageModule} from './pharmacies.module';
import {Router}  from '@angular/router';

@Component({
  selector: 'app-pharmacies',
  templateUrl: './pharmacies.page.html',
  styleUrls: ['./pharmacies.page.scss'],
})

export class PharmaciesPage implements OnInit {

  

pharmacy:PharmaciesPageModule[]=[];
nomph:any;
h=new Date();
hr='';
o:string;
status:string;
  public pharmacies: string;
  constructor(private activatedRoute: ActivatedRoute,public router:Router) { 
 
 
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
    
    this.pharmacies = this.activatedRoute.snapshot.paramMap.get('id');
    this.pharmacy=[
{"id_ph":"1","nom_ph":"PHRMACIE PARIS","tel_ph":"41832424","heure_ov_ph":"08:00","heure_f_ph":"12:00",url:'https://www.google.fr/maps/place/Pharmacie+PARIS/@18.1065954,-15.9821631,15z/data=!4m9!1m2!2m1!1spharmacies+%C3%A0+proximit%C3%A9+de+Nouakchott,+Mauritanie!3m5!1s0xe964d5d26af06fb:0x46704e91181facf5!8m2!3d18.1086722!4d-15.9802375!15sCjJwaGFybWFjaWVzIMOgIHByb3hpbWl0w6kgZGUgTm91YWtjaG90dCwgTWF1cml0YW5pZVozIjFwaGFybWFjaWVzIMOgIHByb3hpbWl0w6kgZGUgbm91YWtjaG90dCBtYXVyaXRhbmllkgEIcGhhcm1hY3k'},
{"id_ph":2, "nom_ph":'PHARMACIE RAHMA', "tel_ph":22310779, "heure_ov_ph":'00:00:00', "heure_f_ph":'00:00:00',url:'https://www.google.fr/maps/place/%D8%B5%D9%8A%D8%AF%D9%84%D9%8A%D8%A9+%D8%A7%D9%84%D8%B1%D8%AD%D9%85%D8%A9+%D9%86%D9%88%D8%A7%D9%83%D8%B4%D9%88%D8%B7%E2%80%AD/@18.0744972,-15.9989105,15z/data=!4m9!1m2!2m1!1z2LXZitiv2YTZitipINin2YTYtdit2Kk!3m5!1s0xe964d8288e9aa81:0x8cfdb19cdb734611!8m2!3d18.0824408!4d-15.9790651!15sChfYtdmK2K_ZhNmK2Kkg2KfZhNi12K3YqZIBCHBoYXJtYWN5'},
{"id_ph":3, "nom_ph":'PHARMACIE Canadian', "tel_ph":22156347, "heure_ov_ph":'00:00:00', "heure_f_ph":'00:00:00',url:'https://www.google.fr/maps/place/Canadian+Pharmacy/@18.1109927,-15.9924828,17z/data=!3m1!4b1!4m5!3m4!1s0xe964d412b3e9e3b:0x643489fa1d8bd77!8m2!3d18.1110786!4d-15.9903365'},
{"id_ph":4, "nom_ph":'pharmacie elighatha', "tel_ph":26997473, "heure_ov_ph":'00:00:00', "heure_f_ph":'00:00:00',url:'https://www.google.fr/maps/place/Pharmacie+elighatha/@18.0735389,-15.9673273,17z/data=!3m1!4b1!4m5!3m4!1s0xe965279e5cb6ed9:0x7db7e8e86d22aed6!8m2!3d18.0735841!4d-15.9651246'},
{"id_ph":5, "nom_ph":'pharmacie elhayat', "tel_ph":48249198, "heure_ov_ph":'08:00:00', "heure_f_ph":'02:00:00',url:'https://www.google.fr/maps/place/%D8%B5%D9%8A%D8%AF%D9%84%D9%8A%D8%A9+%D8%A7%D9%84%D8%AD%D9%8A%D8%A7%D8%A9%E2%80%AD/@18.1064519,-15.9732665,17z/data=!3m1!4b1!4m5!3m4!1s0xe9653295af1453d:0xfe219a8b26ef5ed2!8m2!3d18.1064477!4d-15.9710833'},
{"id_ph":6, "nom_ph":'pharmacie Hopital National',"tel_ph": 45255848,"heure_ov_ph": '00:00:00', "heure_f_ph":'00:00:00',url:'https://www.google.fr/maps/place/Pharmacie+Hopital+National/@18.0871372,-15.9881593,17z/data=!3m1!4b1!4m5!3m4!1s0xe964d76c0333517:0x36aebea22073ea92!8m2!3d18.0871323!4d-15.9859707'},
{"id_ph":7, "nom_ph":'pharmacie De La République', "tel_ph":34622000, "heure_ov_ph":'07:00:00', "heure_f_ph":'00:00:00',url:'https://www.google.fr/maps/place/Pharmacie+De+La+R%C3%A9publique/@18.110122,-15.9782349,17z/data=!3m1!4b1!4m5!3m4!1s0xe964d14f66ad817:0xe7743276fa8756ab!8m2!3d18.1101177!4d-15.9760506'},
{"id_ph":8, "nom_ph":'pharmacie De La Guérison', "tel_ph":48196469, "heure_ov_ph":'00:00:00', "heure_f_ph":'00:00:00',url:'https://www.google.fr/maps/place/Pharmacie+de+La+Gu%C3%A9rison+%D8%B5%D9%8A%D8%AF%D9%84%D9%8A%D8%A9+%D8%A7%D9%84%D8%A8%D8%B1%D8%A1%E2%80%AD/@18.0758755,-15.9566559,17z/data=!4m9!1m2!2m1!1spharmacie+De+La+Gu%C3%A9rison!3m5!1s0xe965265078061cd:0x906585cf46796a0!8m2!3d18.0761014!4d-15.9553057!15sChlwaGFybWFjaWUgRGUgTGEgR3XDqXJpc29uWhsiGXBoYXJtYWNpZSBkZSBsYSBndcOpcmlzb26SAQhwaGFybWFjeQ'},
//{"id_ph":9, "nom_ph":'pharmacie Elmarwa', "tel_ph":20253301, "heure_ov_ph":'00:00:00', "heure_f_ph":'00:00:00'},
//{"id_ph":10, "nom_ph":'pharmacie Elhanan', "tel_ph":22041380, "heure_ov_ph":'00:00:00', "heure_f_ph":'00:00:00'},
//{"id_ph":11, "nom_ph":'pharmacie Kekored', "tel_ph":36288128, "heure_ov_ph":'00:00:00', "heure_f_ph":'00:00:00'},
{"id_ph":12, "nom_ph":'Pharmacie Eljezira', "tel_ph":48266031, "heure_ov_ph":'07:00:00',"heure_f_ph": '01:00:00',url:'https://www.google.fr/maps/place/%D8%B5%D9%8A%D8%AF%D9%84%D9%8A%D8%A9+%D8%A7%D9%84%D8%AC%D8%B2%D9%8A%D8%B1%D8%A9.+Pharmacie+El+Jezira%E2%80%AD/@18.0989891,-15.997798,13z/data=!4m9!1m2!2m1!1sPharmacie+Eljezira!3m5!1s0xe965353f71140e7:0x1e9f59ac1b91cb53!8m2!3d18.121243!4d-15.940023!15sChJQaGFybWFjaWUgRWxqZXppcmGSAQhwaGFybWFjeQ'},
//{"id_ph":13, "nom_ph":'pharmacie  National',"tel_ph": 41111215, "heure_ov_ph":'00:00:00', "heure_f_ph":'00:00:00'},
{"id_ph":16, "nom_ph":'pharmacie Enjah', "tel_ph":20253158, "heure_ov_ph":'00:00:00', "heure_f_ph":'00:00:00',url:'https://www.google.fr/maps/place/Pharmacie+Nejah+%D8%B5%D9%8A%D8%AF%D9%84%D9%8A%D8%A9+%D8%A7%D9%84%D9%86%D8%AC%D8%A7%D8%AD%E2%80%AD/@18.0751382,-15.9540156,17z/data=!3m1!4b1!4m5!3m4!1s0xe9652660e811615:0xf3ec60dc3f665abc!8m2!3d18.0751209!4d-15.951786'},
{"id_ph":17, "nom_ph":'pharmacie Elmeimoune',"tel_ph": 22041381, "heure_ov_ph":'00:00:00', "heure_f_ph":'00:00:00',url:'https://www.google.fr/maps/place/%D8%B5%D9%8A%D8%AF%D9%84%D9%8A%D8%A9+%D8%A7%D9%84%D9%85%D9%8A%D9%85%D9%88%D9%86+Pharmacie+El+Meimoune%E2%80%AD/@18.0761271,-15.9575683,17z/data=!3m1!4b1!4m5!3m4!1s0xe9652650773b5a5:0xf0eed098a5eeb011!8m2!3d18.0761333!4d-15.9554337'},
//{"id_ph":18, "nom_ph":'pharmacie Jewdel Vall', "tel_ph":36307075, "heure_ov_ph":'00:00:00', "heure_f_ph":'00:00:00'},
//{"id_ph":19,"nom_ph": 'pharmacie Elistegbal',"tel_ph": 22027622, "heure_ov_ph":'00:00:00', "heure_f_ph":'00:00:00'},
{"id_ph":20, "nom_ph":'pharmacie Elmohith', "tel_ph":36303825,"heure_ov_ph": '00:00:00',"heure_f_ph": '00:00:00',url:'https://www.google.fr/maps/place/Pharmacie+Al+Mouhit/@34.0771466,-6.7894149,17z/data=!3m1!4b1!4m5!3m4!1s0xda769a1fdff7347:0x9e91180c35b455bf!8m2!3d34.0771422!4d-6.7872262'},
{"id_ph":21, "nom_ph":'Pharmacie Es Siha Sebkha',"tel_ph":26100506,"heure_ov_ph": '00:00:00',"heure_f_ph": '00:00:00',url:'https://www.google.fr/maps/place/Pharmacie+Es+Siha+Sebkha/@18.0748914,-15.9955993,17z/data=!4m9!1m2!2m1!1spharmacy+esbkha!3m5!1s0xe964d342d59221b:0x4df46feb3442ded0!8m2!3d18.0744405!4d-15.9901888!15sCg9waGFybWFjeSBzZWJraGGSAQhwaGFybWFjeQ'},
//{"id_ph":22, "nom_ph":'pharmacie Elhilal',"tel_ph": 33060503, "heure_ov_ph":'00:00:00',"heure_f_ph": '00:00:00'},
{"id_ph":23, "nom_ph":'pharmacie Essiha',"tel_ph": 46411611, "heure_ov_ph":'00:00:00', "heure_f_ph":'00:00:00',url:'https://www.google.fr/maps/place/%D9%85%D8%B3%D8%AA%D9%88%D8%AF%D8%B9+%D8%B5%D9%8A%D8%AF%D9%84%D9%8A+%D8%A7%D9%84%D8%B5%D8%AD%D8%A9+%D9%84%D9%84%D8%AC%D9%85%D9%8A%D8%B9%E2%80%AD/@18.0730686,-15.9619247,15z/data=!4m9!1m2!2m1!1z2LXZitiv2YTZitipINin2YTYtdit2Kk!3m5!1s0xe9653e691628457:0x1212c67060e64133!8m2!3d18.0730686!4d-15.95317!15sChfYtdmK2K_ZhNmK2Kkg2KfZhNi12K3YqZIBCHBoYXJtYWN5'},
{"id_ph":24,"nom_ph": 'pharmacie ELvewze',"tel_ph": 34620000,"heure_ov_ph": '00:00:00', "heure_f_ph":'00:00:00',url:'https://www.google.fr/maps/place/%D8%B5%D9%8A%D8%AF%D9%84%D9%8A%D8%A9+%D8%A7%D9%84%D9%81%D9%88%D8%B2%E2%80%AD/@18.0853288,-16.0253542,13z/data=!4m9!1m2!2m1!1spharmacie+EL+vawz!3m5!1s0xe964daab85f261b:0x20be098d641295c7!8m2!3d18.085503!4d-15.9899491!15sChFwaGFybWFjaWUgRUwgZmF3eloTIhFwaGFybWFjaWUgZWwgZmF3epIBCHBoYXJtYWN5'},
//{"id_ph":25, "nom_ph":'pharmacie Saydeleytokom',"tel_ph": 36304265, "heure_ov_ph":'00:00:00', "heure_f_ph":'00:00:00'},
{"id_ph":26, "nom_ph":'pharmacie Elbarakaa',"tel_ph": 42373794, "heure_ov_ph":'00:00:00', "heure_f_ph":'00:00:00',url:'https://www.google.fr/maps/place/Pharmacie+Elbaraka+Teyarett/@18.1239924,-15.9402646,17z/data=!3m1!4b1!4m5!3m4!1s0xe96532729e63ea7:0x4a25e08563772d94!8m2!3d18.1239857!4d-15.9380737'},
{"id_ph":27,"nom_ph": 'pharmacie Vasek',"tel_ph": 25055026, "heure_ov_ph":'00:00:00',"heure_f_ph": '00:00:00',url:'https://www.google.fr/maps/place/Pharmacie+VASQ+%D8%B5%D9%8A%D8%AF%D9%84%D9%8A%D8%A9+%D9%81%D8%B5%D9%83%E2%80%AD/@18.10432,-15.990784,4z/data=!4m12!1m5!2m4!1spharmacies!5m1!10e2!6e2!3m5!1s0xe9652cc8024303d:0xbedcfde9c85688f5!8m2!3d18.1301526!4d-15.94077!15sCgpwaGFybWFjaWVzWgwiCnBoYXJtYWNpZXOSAQhwaGFybWFjeQ?hl=ar'},
//{"id_ph":28, "nom_ph":'pharmacie Elhamed', "tel_ph":14333343, "heure_ov_ph":'00:00:00', "heure_f_ph":'00:00:00'},
//{"id_ph":29, "nom_ph":'pharmacie Enteiid Echavya', "tel_ph":48718284, "heure_ov_ph":'00:00:00',"heure_f_ph": '00:00:00'},
//{"id_ph":30, "nom_ph":'Pharmacie Loutf', "tel_ph":27518551,"heure_ov_ph": '08:00:00', "heure_f_ph":'00:00:00'},
{"id_ph":31, "nom_ph":'pharmacie Bon Santée',"tel_ph": 46705355,"heure_ov_ph": '00:00:00',"heure_f_ph": '00:00:00',url:'https://www.google.fr/maps/place/Pharmacie+bonne+Sant%C3%A9/@18.0651355,-15.9988608,17z/data=!3m1!4b1!4m5!3m4!1s0xe964dbc2dbba251:0x328893fa30627c6f!8m2!3d18.0651743!4d-15.9966039'},
//{"id_ph":32, "nom_ph":' PHARMACIE EL KHIYAR',"tel_ph":37221684, "heure_ov_ph": '08:00:00',"heure_f_ph": '00:00:00'},
//{"id_ph":37, "nom_ph":' PHARMACIE UNITE', "tel_ph":22947061,"heure_ov_ph": '06:00:00', "heure_f_ph":'00:00:00'},
//{"id_ph":38, "nom_ph":' PHARMACIE PRINCIPALE', "tel_ph":36314243, "heure_ov_ph":'07:00:00',"heure_f_ph": '00:00:00'},
//{"id_ph":39, "nom_ph":' PHARMACIE ESSELAMA',"tel_ph": 34113994, "heure_ov_ph":'08:00:00',"heure_f_ph": '23:00:00'},
{"id_ph":40,"nom_ph": ' PHARMACIE EL VADEL',"tel_ph": 25066867, "heure_ov_ph":'08:00:00', "heure_f_ph":'01:00:00',url:'https://www.google.fr/maps/place/Pharmacie+El+Vadel/@21.5225902,-11.4505275,10z/data=!4m5!3m4!1s0xe965351a1ac8cf9:0x54760db778c93dcf!8m2!3d18.104546!4d-15.9592665'},
//{"id_ph":41, "nom_ph":' PHARMACIE EL JEWDA', "tel_ph":32655333, "heure_ov_ph":'08:00:00',"heure_f_ph": '01:00:00'},
{"id_ph":43, "nom_ph":' PHARMACIE MOHAMED MAHMOUD',"tel_ph": 37038029, "heure_ov_ph":'08:00:00',"heure_f_ph": '01:00:00',url:'https://www.google.fr/maps/place/%D8%B5%D9%8A%D8%AF%D9%84%D9%8A%D8%A9+%D8%AF.+%D9%85%D8%AD%D9%85%D8%AF+%D9%85%D8%AD%D9%85%D9%88%D8%AF%E2%80%AD/@21.5225902,-11.4505275,10z/data=!4m9!1m2!2m1!1z2LXZitiv2YTZitip!3m5!1s0xe96539b89a5b60f:0x7a0cf21a8ea52419!8m2!3d18.1125235!4d-15.9502662!15sCgzYtdmK2K_ZhNmK2KmSAQhwaGFybWFjeQ'},
{"id_ph":44, "nom_ph":' PHARMACIE IBN ROCHED',"tel_ph": 38475949, "heure_ov_ph":'08:00:00', "heure_f_ph":'01:00:00',url:'https://www.google.fr/maps/place/Pharmacie+Ibn+Rochd/@21.5225902,-11.4505275,10z/data=!4m5!3m4!1s0xdb3c2c92f3f0631:0x9cb96a3b678a9cf7!8m2!3d30.219854!4d-9.3752159'},
//{"id_ph":45, "nom_ph":' PHARMACIE ESSADA', "tel_ph":25068538,"heure_ov_ph": '08:00:00',"heure_f_ph": '01:00:00'},
{"id_ph":46,"nom_ph": ' PHARMACIE EL ELYSE', "tel_ph":25900090, "heure_ov_ph":'08:00:00',"heure_f_ph": '01:00:00',url:'https://www.google.fr/maps/place/%D8%B5%D9%8A%D8%AF%D9%84%D9%8A%D8%A9+%D8%B5%D9%83%D9%88%D9%83+%D8%A7%D9%84%D8%A7%D9%84%D9%8A%D8%B2%D9%8A%D8%A9%E2%80%AD/@21.5225902,-11.4505275,10z/data=!4m9!1m2!2m1!1z2LXZitiv2YTZitip!3m5!1s0xe964d2558ac6ff5:0xc6a98f6839432e49!8m2!3d18.120819!4d-15.9708672!15sCgzYtdmK2K_ZhNmK2KmSAQhwaGFybWFjeQ'},
{"id_ph":47,"nom_ph": ' PHARMACIE PASTEUR',"tel_ph": 49447237, "heure_ov_ph":'08:00:00', "heure_f_ph":'01:00:00',url:'https://www.google.fr/maps/place/Pharmacie+Pasteur/@21.5225902,-11.4505275,10z/data=!4m9!1m2!2m1!1sPHARMACIE+PASTEUR!3m5!1s0xe964da443c50d63:0x3c39d3b3787d3f2e!8m2!3d18.116028!4d-15.9745026!15sChFQSEFSTUFDSUUgUEFTVEVVUpIBCHBoYXJtYWN5'},
{"id_ph":48, "nom_ph":' PHARMACIE MEKA',"tel_ph": 46465559, "heure_ov_ph":'08:00:00', "heure_f_ph":'01:00:00',url:'https://www.google.fr/maps/place/%D8%B5%D9%8A%D8%AF%D9%84%D9%8A%D8%A9+%D9%85%D9%83%D8%A9+Pharmacie+Meka%E2%80%AD/@21.5225902,-11.4505275,10z/data=!4m5!3m4!1s0xe9653dd125b6d9b:0xa8331add0fa4270f!8m2!3d18.1065077!4d-15.9686551'},
{"id_ph":49,"nom_ph": ' PHARMACIE EL INSANIYA',"tel_ph": 41314545,"heure_ov_ph": '08:00:00',"heure_f_ph": '01:00:00',url:'https://www.google.fr/maps/place/Pharmacie+El+Insaniya/@21.5225902,-11.4505275,10z/data=!4m5!3m4!1s0xe9653938ebc34ab:0x1c6791279d724012!8m2!3d18.0995158!4d-15.9581063'},
//{"id_ph":52, "nom_ph":' PHARMACIEEL MENARA',"tel_ph": 36300841, "heure_ov_ph":'08:00:00', "heure_f_ph":'01:00:00'},
//{"id_ph":53, "nom_ph":' PHARMACIE HAYATT BOMDID',"tel_ph": 20274636,"heure_ov_ph": '08:00:00',"heure_f_ph": '01:00:00'},
{"id_ph":54, "nom_ph":' PHARMACIE APOTICAIRE', "tel_ph":27900000, "heure_ov_ph":'08:00:00', "heure_f_ph":'01:00:00',url:'https://www.google.fr/maps/place/Pharmacie+Apothicaire/@21.5225902,-11.4505275,10z/data=!4m5!3m4!1s0xe964d5e2ebb1c67:0x69d4fcade8c58ef1!8m2!3d18.1071631!4d-15.9733554'},
//{"id_ph":55, "nom_ph":'  PHARMACIE MERE ET ENFFANT ', "tel_ph":33001158,"heure_ov_ph": '08:00:00',"heure_f_ph": '01:00:00'},
{"id_ph":56, "nom_ph":' PHARMACIE CARREFOUR TVZ',"tel_ph": 25036026, "heure_ov_ph":'08:00:00', "heure_f_ph":'01:00:00',url:'https://www.google.fr/maps/place/Pharmacie+Carrefour/@21.5225902,-11.4505275,10z/data=!4m5!3m4!1s0xe964d613fb28431:0x79518ec0fa4e2fe9!8m2!3d18.1025433!4d-15.9745301'},
{"id_ph":57, "nom_ph":' PHARMACIE GALENIQUE', "tel_ph":20274427, "heure_ov_ph":'08:00:00', "heure_f_ph":'01:00:00',url:'https://www.google.fr/maps/place/PHARMACIE+GALENIQUE/@21.5225902,-11.4505275,10z/data=!4m5!3m4!1s0xe964d1bae5a63a7:0x52244a5211f4c3c6!8m2!3d18.1089089!4d-15.982556'},
{"id_ph":58, "nom_ph":' PHARMACIE N\'DER', "tel_ph":45296992, "heure_ov_ph":'08:00:00', "heure_f_ph":'01:00:00',url:'https://www.google.fr/maps/place/PHARMACIE+NDER+%D8%B5%D9%8A%D8%AF%D9%84%D9%8A%D8%A9+%D8%A3%D9%86%D8%AF%D8%B1%E2%80%AD/@21.5225902,-11.4505275,10z/data=!4m5!3m4!1s0xe964d626f1dec63:0x590d99b7d2ca8684!8m2!3d18.0995987!4d-15.9755611'},
{"id_ph":9, "nom_ph":' PHARMACIE EL KIRAM',"tel_ph": 41454572, "heure_ov_ph":'08:00:00',"heure_f_ph": '01:00:00',url:'https://www.google.fr/maps/place/Pharmacie+El+Kiram/@21.5225902,-11.4505275,10z/data=!4m5!3m4!1s0xe964dba18b308a1:0xbcb444806e3f8b05!8m2!3d18.1035925!4d-15.9794237'},
//{"id_ph":60, "nom_ph":' PHARMACIE ESPOIR',"tel_ph": 41314646,"heure_ov_ph": '08:00:00', "heure_f_ph":'01:00:00'},
{"id_ph":61, "nom_ph":' PHARMACIE phamily', "tel_ph":25058783,"heure_ov_ph": '08:00:00', "heure_f_ph":'01:00:00',url:'https://www.google.fr/maps/place/PHARMACIE+FAMILY/@21.5225902,-11.4505275,10z/data=!4m5!3m4!1s0xe97b3d9847c5e03:0xd2592072da132ad6!8m2!3d18.1277902!4d-15.9978258'},
//{"id_ph":62,"nom_ph": ' PHARMACIE IDEALE',"tel_ph": 26149449, "heure_ov_ph":'08:00:00',"heure_f_ph": '01:00:00'},
//{"id_ph":63, "nom_ph":' PHARMACIE EL IHSAN', "tel_ph":25036033, "heure_ov_ph":'08:00:00', "heure_f_ph":'01:00:00'},
{"id_ph":64, "nom_ph":' PHARMACIE EL AVIA', "tel_ph":45250748, "heure_ov_ph":'08:00:00',"heure_f_ph": '01:00:00',url:'https://www.google.fr/maps/place/Pharmacie+El+Avia+%D8%B5%D9%8A%D8%AF%D9%84%D9%8A%D8%A9+%D8%A7%D9%84%D8%B9%D8%A7%D9%81%D9%8A%D8%A9%E2%80%AD/@21.5225902,-11.4505275,10z/data=!4m5!3m4!1s0xe964d76b6b355cf:0xaecd8eb039a897b3!8m2!3d18.0879806!4d-15.9865555'},
//{"id_ph":65, "nom_ph":' PHARMACIE MELAININE',"tel_ph": 45292446,"heure_ov_ph": '08:00:00', "heure_f_ph":'01:00:00'},
//{"id_ph":66,"nom_ph": ' PHARMACIE EL MOURABITOUNE',"tel_ph": 33888889,"heure_ov_ph": '08:00:00', "heure_f_ph":'01:00:00'},
{"id_ph":70, "nom_ph":' PHARMACIE BIENVENUE', "tel_ph":25068657,"heure_ov_ph": '08:00:00', "heure_f_ph":'01:00:00',url:'https://www.google.fr/maps/place/%D8%B5%D9%8A%D8%AF%D9%84%D9%8A%D8%A9+Pharmacie+BIENVENUE%E2%80%AD/@21.5225902,-11.4505275,10z/data=!4m9!1m2!2m1!1sPHARMACIE+BIENVENUE!3m5!1s0xe964d9f4f45d3db:0xc62525aa3b88ae05!8m2!3d18.1122765!4d-16.000053!15sChNQSEFSTUFDSUUgQklFTlZFTlVFWhUiE3BoYXJtYWNpZSBiaWVudmVudWWSAQhwaGFybWFjeQ'},
//{"id_ph":71, "nom_ph":' PHARMACIE ESSAHABA',"tel_ph": 30520672, "heure_ov_ph":'08:00:00',"heure_f_ph": '01:00:00'},
{"id_ph":72, "nom_ph":' PHARMACIE MIDPHARMA', "tel_ph":45252540,"heure_ov_ph": '08:00:00',"heure_f_ph": '01:00:00',url:'https://www.google.fr/maps/place/Pharmacie+Mid+pharma+%D8%B5%D9%8A%D8%AF%D9%84%D9%8A%D8%A9+%D9%85%D9%8A%D8%AF%D9%81%D8%A7%D8%B1%D9%85%D8%A7%E2%80%AD/@21.5225902,-11.4505275,10z/data=!4m9!1m2!2m1!1sPHARMACIE+MIDPHARMA!3m5!1s0xe964d79c5437f07:0xc1122b89d92146e7!8m2!3d18.0862437!4d-15.9810006!15sChNQSEFSTUFDSUUgTUlEUEhBUk1BkgEIcGhhcm1hY3k'},
//{"id_ph":73, "nom_ph":' PHARMACIE ERRAAVA', "tel_ph":22002155, "heure_ov_ph":'08:00:00',"heure_f_ph": '01:00:00'},
{"id_ph":74, "nom_ph":' PHARMACIE ZEM ZEM',"tel_ph": 45257975,"heure_ov_ph": '08:00:00', "heure_f_ph":'01:00:00',url:'https://www.google.fr/maps/place/Pharmacie+ZemZem/@21.5225902,-11.4505275,10z/data=!4m5!3m4!1s0xe964d76b0b1066d:0xa629e72ee8ab6be3!8m2!3d18.0893745!4d-15.9849892'},
{"id_ph":75, "nom_ph":' PHARMACIE DAR EDEWA',"tel_ph":36105880,"heure_ov_ph": '08:00:00',"heure_f_ph": '01:00:00',url:'https://www.google.fr/maps/place/Pharmacie+DAR+DEWA/@21.5225902,-11.4505275,10z/data=!4m9!1m2!2m1!1sPHARMACIE+DAR+EDEWA!3m5!1s0xe96526d6a140cd9:0xf754719e92844d2d!8m2!3d18.0636417!4d-15.9570579!15sChNQSEFSTUFDSUUgREFSIEVERVdBWhUiE3BoYXJtYWNpZSBkYXIgZWRld2GSAQhwaGFybWFjeQ'},
//{"id_ph":76, "nom_ph":' PHARMACIE SAHEL',"tel_ph": 25901261, "heure_ov_ph":'08:00:00', "heure_f_ph":'01:00:00'},
//{"id_ph":77, "nom_ph":' PHARMACIE NOUADHIBOU', "tel_ph":25060616,"heure_ov_ph": '08:00:00', "heure_f_ph":'01:00:00'},
//{"id_ph":78, "nom_ph":' PHARMACIE EL KOUBRA',"tel_ph": 48868887, "heure_ov_ph":'08:00:00', "heure_f_ph":'01:00:00'},
//{"id_ph":79, "nom_ph":' PHARMACIE ELMARKEZIYA', "tel_ph":32156353, "heure_ov_ph":'08:00:00',"heure_f_ph": '01:00:00'},
//{"id_ph":80, "nom_ph":' PHARMACIE EL VELOUJA', "tel_ph":49388695, "heure_ov_ph":'08:00:00',"heure_f_ph": '01:00:00'},
//{"id_ph":81, "nom_ph":' PHARMACIE SY',"tel_ph": 46415485,"heure_ov_ph": '08:00:00', "heure_f_ph":'01:00:00'},
//{"id_ph":82, "nom_ph":' PHARMACIE CONCORDE',"tel_ph": 31213116,"heure_ov_ph": '08:00:00', "heure_f_ph":'01:00:00'},
//{"id_ph":83, "nom_ph":' PHARMACIE CHEIKH', "tel_ph":26125580, "heure_ov_ph":'08:00:00', "heure_f_ph":'01:00:00'},
//{"id_ph":84,"nom_ph": '  PHARMACIE YAHYA',"tel_ph": 34417373, "heure_ov_ph":'08:00:00',"heure_f_ph": '01:00:00'},
//{"id_ph":86, "nom_ph":' PHARMACIE OCEAN', "tel_ph":36303825, "heure_ov_ph":'08:00:00',"heure_f_ph": '01:00:00'},
//{"id_ph":87,"nom_ph": ' PHARMACIE SHAM ',"tel_ph": 26092582, "heure_ov_ph":'08:00:00',"heure_f_ph": '01:00:00'},
//{"id_ph":89, "nom_ph":' PHARMACIE EL EMANA', "tel_ph":34433333, "heure_ov_ph":'08:00:00',"heure_f_ph": '01:00:00'},
//{"id_ph":90, "nom_ph":' PHARMACIE SAHA', "tel_ph":46509883,"heure_ov_ph": '08:00:00',"heure_f_ph": '01:00:00'},
//{"id_ph":91, "nom_ph":' PHARMACIE KISAL', "tel_ph":32434645,"heure_ov_ph": '08:00:00',"heure_f_ph": '01:00:00'},
{"id_ph":92,"nom_ph": ' PHARMACIE RIM',"tel_ph": 36644615,"heure_ov_ph": '08:00:00',"heure_f_ph": '01:00:00',url:'https://www.google.fr/maps/place/%D8%B5%D9%8A%D8%AF%D9%84%D9%8A%D8%A9+%D8%B1%D9%8A%D9%85+PHARMACIE+RIM%E2%80%AD/@27.1707528,-11.8624397,5z/data=!4m6!1m2!2m1!1sPHARMACIE+RIM!3m2!1s0xe965383c97ef5c7:0xf0522643b1414a68!15sCg1QSEFSTUFDSUUgUklNWg8iDXBoYXJtYWNpZSByaW2SAQhwaGFybWFjeQ'},
{"id_ph":93, "nom_ph":' PHARMACIE SADAGHA',"tel_ph": 41255925, "heure_ov_ph":'08:00:00', "heure_f_ph":'01:00:00',url:'https://www.google.fr/maps/place/%D8%B5%D9%8A%D8%AF%D9%84%D9%8A%D8%A9+%D8%A7%D9%84%D8%B5%D8%AF%D8%A7%D9%82%D8%A92+Pharmacie+Sadagha%E2%80%AD/@18.0947093,-16.0035779,13z/data=!4m9!1m2!2m1!1sPHARMACIE+SADAGHA!3m5!1s0xe9653dccc15eba9:0xce8a699151d4d0b6!8m2!3d18.126632!4d-15.9638376!15sChFQSEFSTUFDSUUgU0FEQUdIQVoTIhFwaGFybWFjaWUgc2FkYWdoYZIBCHBoYXJtYWN5'},
{"id_ph":94, "nom_ph":' PHARMACIE SEIF EDDINE',"tel_ph": 46279999,"heure_ov_ph": '08:00:00',"heure_f_ph": '01:00:00',url:'https://www.google.fr/maps/place/Pharmacie+SEIF+EDDINE/@18.0387398,-15.96495,17z/data=!3m1!4b1!4m5!3m4!1s0xe96530b7651a011:0x67d76a996035fcb9!8m2!3d18.0387329!4d-15.9627704'},
];

  }
  sch(){
    if(this.nomph!=""){
      this.pharmacy=this.pharmacy.filter(res=>{
      return res.nom_ph.toLocaleLowerCase().match(this.nomph.toLocaleLowerCase());
    })}
    else
    if(this.nomph==""||this.nomph.length==0){
      this.router.navigate(['/pharmacies']); this.ngOnInit();
    }
    
    }
       
getview(id_ph:any,nom_ph:any){
  
  this.router.navigate(['/pharmacies/medicaments'],{queryParams:{id_ph:id_ph,nom_ph:nom_ph}});
    }

}
