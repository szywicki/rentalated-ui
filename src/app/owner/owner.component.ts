import { Component, OnInit } from '@angular/core';
import { ApartmentDataService } from '../apartment-data/apartment-data.service';
import { Apartment } from '../apartment';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent implements OnInit {

  apartments: Apartment[];

  constructor(private data: ApartmentDataService) { }

  ngOnInit() {
    this.data
    .getOwnerListings()
    .subscribe(
      apartments => this.apartments = apartments
    )

  }

}
