import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventEditorTestPageComponent } from './event-editor-test-page.component';

describe('EventEditorTestPageComponent', () => {
  let component: EventEditorTestPageComponent;
  let fixture: ComponentFixture<EventEditorTestPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventEditorTestPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventEditorTestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
