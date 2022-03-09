import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-contacter',
  templateUrl: './contacter.page.html',
  styleUrls: ['./contacter.page.scss'],
})
export class ContacterPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,public _apiService:ApiService) { }

  ngOnInit() {
  }

}
