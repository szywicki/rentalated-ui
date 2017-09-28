import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Route } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ApartmentListingsComponent } from './apartment-listings/apartment-listings.component';

import { ApartmentDataService } from './apartment-data/apartment-data.service';
import { ApartmentDetailComponent } from './apartment-detail/apartment-detail.component';
import { LoginComponent } from './login/login.component';
import { SessionDataService } from './session-data/session-data.service';
import { OwnerComponent } from './owner/owner.component';
import { ApartmentNewComponent } from './apartment-new/apartment-new.component';


const routes: Route[] = [
  { path: 'login', component: LoginComponent},
  { path: '',      component: ApartmentListingsComponent},
  { path: 'mine', component: OwnerComponent},
  { path: 'new',  component: ApartmentNewComponent},
  { path: 'deactivations', component: ApartmentDetailComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ApartmentListingsComponent,
    ApartmentDetailComponent,
    LoginComponent,
    OwnerComponent,
    ApartmentNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ApartmentDataService,SessionDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
