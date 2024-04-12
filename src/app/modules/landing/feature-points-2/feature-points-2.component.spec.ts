import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturePoints2Component } from './feature-points-2.component';

describe('FeaturePoints2Component', () => {
  let component: FeaturePoints2Component;
  let fixture: ComponentFixture<FeaturePoints2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturePoints2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeaturePoints2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
