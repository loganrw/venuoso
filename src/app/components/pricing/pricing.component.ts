import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { AnnualPricing, MonthPricing, PricingRate } from '../../models/pricing';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [MatButtonToggleModule, CommonModule],
  templateUrl: './pricing.component.html'
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
