import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro-section',
  standalone: true,
  imports: [],
  templateUrl: './intro-section.component.html'
})
export class IntroSectionComponent implements OnInit {
  filterClass = 'grayscale';
  
  ngOnInit(): void {
    setTimeout(() => {
      this.filterClass = '';
    }, 7000);
  }
}
