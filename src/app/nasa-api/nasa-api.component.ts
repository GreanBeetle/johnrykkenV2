import { Component, OnInit } from '@angular/core';
import { NasaApiService } from '../nasa-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nasa-api',
  templateUrl: './nasa-api.component.html',
  styleUrls: ['./nasa-api.component.scss'],
  providers: [ NasaApiService ]
})

export class NasaApiComponent implements OnInit {
  paydirt: any[] = null;

  constructor(private nasaApiService: NasaApiService) { }

  getAPOD() {
    alert('You clicked the NASA button');
    this.nasaApiService.getAPOD().subscribe(payload => {
      this.paydirt = payload.json();
    });
  }

  ngOnInit() {
  }

}
