import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {NgOptimizedImage} from "@angular/common";
import { FaqComponent } from './faq/faq.component';
import { FaqAccordionComponent } from './faq/components/faq-accordion/faq-accordion.component';
import { HomeAboutComponent } from './home/components/home-about/home-about.component';
import { HomeExperienceComponent } from './home/components/home-experience/home-experience.component';
import { HomeServicesComponent } from './home/components/home-services/home-services.component';
import { HomeServicesNailTrimComponent } from './home/components/home-services/components/home-services-nail-trim/home-services-nail-trim.component';
import { HomeServiceWalkingComponent } from './home/components/home-services/components/home-service-walking/home-service-walking.component';
import { HomeServicePetSittingComponent } from './home/components/home-services/components/home-service-pet-sitting/home-service-pet-sitting.component';
import { HomeGalleryComponent } from './home/components/home-gallery/home-gallery.component';
import { HomeGalleryBlockComponent } from './home/components/home-gallery/components/home-gallery-block/home-gallery-block.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';
import { ServiceNailTrimmingComponent } from './services/service-nail-trimming/service-nail-trimming.component';
import { ServicePetSittingComponent } from './services/service-pet-sitting/service-pet-sitting.component';
import { ServicePottyBreaksComponent } from './services/service-potty-breaks/service-potty-breaks.component';
import { ServiceFarmPetCareComponent } from './services/service-farm-pet-care/service-farm-pet-care.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FaqComponent,
    FaqAccordionComponent,
    HomeAboutComponent,
    HomeExperienceComponent,
    HomeServicesComponent,
    HomeServicesNailTrimComponent,
    HomeServiceWalkingComponent,
    HomeServicePetSittingComponent,
    HomeGalleryComponent,
    HomeGalleryBlockComponent,
    FooterComponent,
    ServicesComponent,
    ServiceNailTrimmingComponent,
    ServicePetSittingComponent,
    ServicePottyBreaksComponent,
    ServiceFarmPetCareComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
