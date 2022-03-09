import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],

})
export class AppComponent { 
  public appPages = [
    { title: 'Home', url: '/folder/home', icon: 'home' },
    { title: 'Cliniques', url: '/cliniques', icon: 'pulse' },
    { title: 'Hôpitaux', url: '/hopitaux', icon: 'fitness' },
    { title: 'Pharmacies', url: '/pharmacies', icon: 'heart' },
    { title: 'Laboratoires', url: '/laboratoires', icon: 'flask'},
    { title: 'Contacter Nous', url: '/contacter', icon: 'mail' },
    
  ];
  
  constructor() {}
  
}
