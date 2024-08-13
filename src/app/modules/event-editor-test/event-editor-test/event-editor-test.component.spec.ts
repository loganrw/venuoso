import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventEditorTestComponent } from './event-editor-test.component';

describe('EventEditorTestComponent', () => {
  let component: EventEditorTestComponent;
  let fixture: ComponentFixture<EventEditorTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventEditorTestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventEditorTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
