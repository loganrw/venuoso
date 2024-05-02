import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
// Header scroll threshold before it becomes a sticky
export class HeaderComponent {
  isSticky: boolean = false;
  scrollThreshold: number = 600;

  constructor(private router: Router) {}

  // If header scroll position is greater than scroll threshold, make header sticky
  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    this.isSticky = scrollPosition > this.scrollThreshold;
  }
  // ScrollToSection function to scroll to a section
  scrollToSection(event: Event, sectionId: string): void {
    event.preventDefault();
    // If the current route is landing, scroll to section
    if (this.router.url.includes('landing')) {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If the current route is not landing, navigate to landing and scroll to section
      this.router.navigate(['/landing'], { fragment: sectionId }).then(() => {
        setTimeout(() => {
          const sectionElement = document.getElementById(sectionId);
          if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });
    }
  }
  // Navigate to page function
  navigateToPage(page: string) {
    this.router.navigate([page]).then(() => {
      // Scroll to top of the page after navigation to a new module
      window.scrollTo(0, 0);
    });
  }
}