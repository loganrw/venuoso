import { Component } from '@angular/core';
import { AnnualPricing, MonthPricing, PricingRate } from '../../../models/pricing';

@Component({
  selector: 'app-pricing',
  template: '<!-- component disabled -->',
  // templateUrl: './pricing.component.html'
})
export class PricingComponent {

  public monthPricing = MonthPricing;
  public annualPricing = AnnualPricing;
  public selectedPricing = this.monthPricing;


  togglePricing(event: PricingRate) {
    if (event === PricingRate.MONTHLY) {
      this.selectedPricing = this.monthPricing;
    } else {
      this.selectedPricing = this.annualPricing;
    }
  }

}
