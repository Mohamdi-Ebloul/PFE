import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ApiService } from '../../api.service';
import {Router}  from '@angular/router';
import {MapclPageModule} from './mapcl.module';

@Component({
  selector: 'app-mapcl',
  templateUrl: './mapcl.page.html',
  styleUrls: ['./mapcl.page.scss'],
})
export class MapclPage implements OnInit {

public cliniques: string; 
 map :MapclPageModule[]=[];
constructor(private activatedRoute: ActivatedRoute,
    public _apiService:ApiService, public router:Router,
    public navCtrl:NavController) { }

  ngOnInit() {
   this.map=[ {"id":"1","url":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3792.373484070088!2d-15.98680328563712!3d18.10053598661026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xe964d68d6044017%3A0xdc962793b946e88a!2zQ2xpbmlxdWUgQ2hpdmEg2YXYtdit2Kkg2KfZhNi02YHYp9ih!5e0!3m2!1sfr!2s!4v1624907100558!5m2!1sfr!2s"}]
  }
   
}
