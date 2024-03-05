import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { IntroSectionComponent } from './components/intro-section/intro-section.component';
import { ShowcaseComponent } from './components/showcase/showcase.component';
import { FeaturePointsComponent } from './components/feature-points/feature-points.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { LandingSignUpComponent } from './components/landing-sign-up/landing-sign-up.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    IntroSectionComponent,
    ShowcaseComponent,
    FeaturePointsComponent,
    PricingComponent,
    LandingSignUpComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'venuoso-beta';
}
