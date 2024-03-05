import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { IntroSectionComponent } from './components/intro-section/intro-section.component';
import { ShowcaseComponent } from './components/showcase/showcase.component';
import { FeaturePointsComponent } from './components/feature-points/feature-points.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    IntroSectionComponent,
    ShowcaseComponent,
    FeaturePointsComponent,
    PricingComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'venuoso-beta';
}
