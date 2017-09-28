import { Component, OnInit } from '@angular/core';
import { SessionDataService } from '../session-data/session-data.service';
import { Router } from '@angular/router';
import { ApartmentDataService } from '../apartment-data/apartment-data.service';
import { Apartment } from '../apartment';

@Component({
  selector: 'app-apartment-new',
  templateUrl: './apartment-new.component.html',
  styleUrls: ['./apartment-new.component.css']
})
export class ApartmentNewComponent implements OnInit {

  private message: string;
  private apartment: Apartment;
  
  constructor(private data: ApartmentDataService, private router: Router) { }

  submitNewListing() {
    this.data
        .addApartment(this.apartment)
        .subscribe(
          apartment => {
            if (apartment) {
              this.router.navigate(['mine']);
            }
          });
        }

  ngOnInit() {
    this.apartment = new Apartment();
  }

}
