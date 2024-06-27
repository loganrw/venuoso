import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})

export class HeaderComponent {
  isMenuOpen = false; //Responsive menu for mobile screen view
  isSticky: boolean = false; //Navigation sticky
  scrollThreshold: number = 600; //eader scroll threshold before it becomes a sticky

  toggleMenu(){
    this.isMenuOpen = !this.isMenuOpen;
  }

  constructor(private router: Router) { }

  // If header scroll position is greater than scroll threshold then make header sticky
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
      // If the current route is not landing, first load the landing module and then smooth-scroll to section
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
  // Method to navigate to the log-in module
  navigateToLogIn() {
    this.router.navigate(['/log-in']).then(() => {
      // Scroll to top of the page after navigation to a new module
      window.scrollTo(0, 0);
    });
  }
  // Method to navigate to the about-us module
  navigateToAboutUs() {
    this.router.navigate(['/about-us']).then(() => {
      // Scroll to top of the page after navigation to a new module
      window.scrollTo(0, 0);
    });
  }
}