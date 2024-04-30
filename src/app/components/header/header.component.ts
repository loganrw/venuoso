import { Component, HostListener, NgZone } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  isSticky: boolean = false;
  scrollThreshold: number = 600;

  constructor(private router: Router, private zone: NgZone) {}

  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    this.isSticky = scrollPosition > this.scrollThreshold;
  }

  scrollToSection(event: Event, sectionId: string): void {
    event.preventDefault();
    if (location.pathname.includes('landing')) {
      this.performScroll(sectionId);
    } else {
      this.router.navigate(['/landing']).then(() => {
        this.zone.run(() => {
          this.performScroll(sectionId);
        });
      });
    }
  }

  performScroll(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      if (history.pushState) {
        history.pushState(null, '', `#${sectionId}`);
      } else {
        location.hash = sectionId;
      }
    }
  }

  navigateToPage(page: string) {
    this.router.navigate([page]);
  }
}