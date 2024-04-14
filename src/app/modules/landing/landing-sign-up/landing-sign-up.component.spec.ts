import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingSignUpComponent } from './landing-sign-up.component';

describe('LandingSignUpComponent', () => {
  let component: LandingSignUpComponent;
  let fixture: ComponentFixture<LandingSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingSignUpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandingSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
