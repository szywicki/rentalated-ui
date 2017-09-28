import { Component, OnInit, Input } from '@angular/core';
import { Apartment } from '../apartment';
import { ApartmentDataService } from '../apartment-data/apartment-data.service';
import { SessionDataService } from '../session-data/session-data.service';
import { User } from '../user';

@Component({
  selector: 'app-apartment-detail',
  templateUrl: './apartment-detail.component.html',
  styleUrls: ['./apartment-detail.component.css']
})
export class ApartmentDetailComponent implements OnInit {

  @Input()
  apartment: Apartment;
  currentUser = new User();

  constructor(private data: ApartmentDataService, private service: SessionDataService) { }

  get userIsOwner() {
    return this.currentUser && this.currentUser.id === this.apartment.user_id;
  }

  deactivate(apartment: Apartment) {
    this.data
    .deactivate(this.apartment)
    .subscribe(
      apartment => this.apartment.is_active = apartment.is_active
    ); 
  }

  getCurrentUser() {
    this.currentUser = this.service.getCurrentUser();
  }

  ngOnInit() {
    this.getCurrentUser();
  }

}
