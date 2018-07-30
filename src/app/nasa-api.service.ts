import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NasaApiService {
  constructor(private http: Http) { }

  getAPOD(date) {
    return this.http.get(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=e0XTCrbdgEbS353UoB8sV2EPeLdCYYO0Nq1YFbSZ`);
  }

}
