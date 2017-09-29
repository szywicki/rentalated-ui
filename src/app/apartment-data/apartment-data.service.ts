import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Apartment } from '../apartment';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class ApartmentDataService {

  constructor(private http: Http) { }

  getActiveListings(): Observable<Apartment[]> {
    return this.http
      .get('http://localhost:4567/api/apartments')
      .map(response => response.json());
  }

  getOwnerListings(): Observable<Apartment[]> {
    return this.http
      .get('http://localhost:4567/api/apartments/mine', {withCredentials: true})
      .map(response => response.json());
  }

  addApartment(apartment: Apartment) {
    return this.http
      .post('http://localhost:4567/api/apartments/new', apartment, {withCredentials: true})
      .map(response => response.json());
  }

  deactivate(apartment: Apartment) {
    return this.http
      .post(`http://localhost:4567/api/apartments/${apartment.id}/deactivations`, apartment, {withCredentials: true})
      .map(response => response.json());
  }

  activate(apartment: Apartment) {
    return this.http
      .post(`http://localhost:4567/api/apartments/${apartment.id}/activations`, apartment, {withCredentials: true})
      .map(response => response.json());
  }
}
