import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { IntroSectionComponent } from './components/intro-section/intro-section.component';
import { ShowcaseComponent } from './components/showcase/showcase.component';
import { FeaturePointsComponent } from './components/feature-points/feature-points.component';
import { FeaturePoints2Component } from './components/feature-points-2/feature-points-2.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { LandingSignUpComponent } from './components/landing-sign-up/landing-sign-up.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component'
import { ContactFormService } from './services/contact-form/contact-form.service';
import { HttpClientModule } from '@angular/common/http';
import { GetStartedFormService } from './services/get-started-form/get-started-form.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    IntroSectionComponent,
    ShowcaseComponent,
    FeaturePointsComponent,
    FeaturePoints2Component,
    PricingComponent,
    LandingSignUpComponent,
    FooterComponent,
    ContactUsComponent,
    HttpClientModule,
  ],
  providers: [
    ContactFormService,
    GetStartedFormService,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'venuoso-beta';
}
