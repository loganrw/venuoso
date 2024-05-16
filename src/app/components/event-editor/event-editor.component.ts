import { Component } from '@angular/core';

@Component({
  selector: 'app-event-editor',
  templateUrl: './event-editor.component.html',
  styleUrl: './event-editor.component.sass',
})
export class EventEditorComponent {
  toggleCategory(event: MouseEvent) {
    const summary = event.target as HTMLElement;
    const ul = summary.nextElementSibling as HTMLElement;
    const isOpen = ul.classList.contains('max-h-0');

    if (isOpen) {
      ul.classList.remove('max-h-0');
      ul.classList.add('max-h-96'); // Adjust max height as needed
    } else {
      ul.classList.remove('max-h-96');
      ul.classList.add('max-h-0');
    }
  }
}
