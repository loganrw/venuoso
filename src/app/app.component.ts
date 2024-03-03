import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { IntroSectionComponent } from './components/intro-section/intro-section.component';
import { ShowcaseComponent } from './showcase/showcase.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    IntroSectionComponent,
    ShowcaseComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'venuoso-beta';
}
