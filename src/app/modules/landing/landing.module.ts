import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FeaturePointsComponent } from './feature-points/feature-points.component';
import { IntroSectionComponent } from './intro-section/intro-section.component';
import { PricingComponent } from './pricing/pricing.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LandingRoutingModule } from './landing.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    ContactUsComponent,
    FeaturePointsComponent,    IntroSectionComponent,
    PricingComponent,
    ShowcaseComponent,
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    LandingRoutingModule,
    HttpClientModule,
    MatIconModule
  ]
})
export class LandingModule { }
