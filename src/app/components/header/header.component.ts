import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  isSticky: boolean = false;
  scrollThreshold: number = 600;

  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    this.isSticky = scrollPosition > this.scrollThreshold;
  }

  scrollToSection(event: Event, sectionId: string): void {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    
    section?.scrollIntoView({ behavior: 'smooth' });
    
    if (history.pushState) {
      history.pushState(null, '', `#${sectionId}`);
    } else {
      location.hash = sectionId;
    }
  }
}
