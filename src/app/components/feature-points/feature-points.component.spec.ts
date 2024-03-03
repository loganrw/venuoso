import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturePointsComponent } from './feature-points.component';

describe('FeaturePointsComponent', () => {
  let component: FeaturePointsComponent;
  let fixture: ComponentFixture<FeaturePointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturePointsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeaturePointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
