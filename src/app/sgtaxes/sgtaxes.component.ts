import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sgtaxes',
  templateUrl: './sgtaxes.component.html',
  styleUrls: ['./sgtaxes.component.sass', './sgtaxes2.component.sass']
})
export class SgtaxesComponent implements OnInit {
  // Default values for salary
  salary:number = 70000;
  bonus:number = 10000;
  leave:number = 15;

  /*
  <!-- 0%, 20,000 -->
  <!-- 2%, 20,000 - 30,000 -->
  <!-- 3.5% 30,000 - 40,000 -->
  <!-- 7% 40,000 - 80,000 -->
  <!-- 11.5% 80,000 - 120,000 -->
  <!-- 15% 120,000 - 160,000 -->
  <!-- 18% 160,000 - 200,000 -->
  <!-- 19% 200,000 - 240,000 -->
  <!-- 19.5% 240,000 - 280,000 -->
  <!-- 20% 280,000 - 320,000 -->
  <!-- 22% 320,000 + -->
  */

  // Total compensation calculations
  totalCompYear:number = this.salary + this.bonus;
  totalCompWeek:number = this.totalCompYear / 52;

  // Tax calculations
  income_2:number = 0.02 * Math.min(Math.max(this.totalCompYear - 20000, 0), 30000-20000);
  income_3_5:number = 0.035 * Math.min(Math.max(this.totalCompYear - 30000, 0), 40000-30000);
  income_7:number = 0.07 * Math.min(Math.max(this.totalCompYear - 40000, 0), 80000-40000);
  income_11_5:number = 0.115 * Math.min(Math.max(this.totalCompYear - 80000, 0), 120000-80000);
  income_15:number = 0.15 * Math.min(Math.max(this.totalCompYear - 120_000, 0), 160_000-120_000);
  income_18:number = 0.18 * Math.min(Math.max(this.totalCompYear - 160_000, 0), 200_000-160_000);
  income_19:number = 0.19 * Math.min(Math.max(this.totalCompYear - 200_000, 0), 240_000-200_000);
  income_19_5:number = 0.195 * Math.min(Math.max(this.totalCompYear - 240_000, 0), 280_000-240_000);
  income_20:number = 0.20 * Math.min(Math.max(this.totalCompYear - 280_000, 0), 320_000-280_000);
  income_22:number = 0.22 * Math.max(this.totalCompYear - 320_000, 0);

  // Take home salary calculations
  takeHomeYear:number = (this.totalCompYear - this.income_2 - this.income_3_5 - this.income_7 - this.income_11_5 -
    this.income_15 - this.income_18 - this.income_19 - this.income_19_5 - this.income_20 - this.income_22);
  takeHomeWeek:number = this.takeHomeYear / 52;
  // Adjusted for 253 working days (UK 2022) - leave days
  takeHomeDayAdj:number = this.takeHomeYear / (253 - this.leave);

  // Effective Tax Percentage
  effectiveTaxRate:number = 100 * (1 - (this.takeHomeYear/this.totalCompYear));

  // Keep all values updated every time a value changes
  updateValues():void {
    this.totalCompYear = this.salary + this.bonus;
    this.totalCompWeek = this.totalCompYear / 52.18;

    this.income_2 = 0.02 * Math.min(Math.max(this.totalCompYear - 20000, 0), 30000-20000);
    this.income_3_5 = 0.035 * Math.min(Math.max(this.totalCompYear - 30000, 0), 40000-30000);
    this.income_7 = 0.07 * Math.min(Math.max(this.totalCompYear - 40000, 0), 80000-40000);
    this.income_11_5 = 0.115 * Math.min(Math.max(this.totalCompYear - 80000, 0), 120000-80000);
    this.income_15 = 0.15 * Math.min(Math.max(this.totalCompYear - 120_000, 0), 160_000-120_000);
    this.income_18 = 0.18 * Math.min(Math.max(this.totalCompYear - 160_000, 0), 200_000-160_000);
    this.income_19 = 0.19 * Math.min(Math.max(this.totalCompYear - 200_000, 0), 240_000-200_000);
    this.income_19_5 = 0.195 * Math.min(Math.max(this.totalCompYear - 240_000, 0), 280_000-240_000);
    this.income_20 = 0.20 * Math.min(Math.max(this.totalCompYear - 280_000, 0), 320_000-280_000);
    this.income_22 = 0.22 * Math.max(this.totalCompYear - 320_000, 0);

    this.takeHomeYear = (this.totalCompYear - this.income_2 - this.income_3_5 - this.income_7 - this.income_11_5 -
      this.income_15 - this.income_18 - this.income_19 - this.income_19_5 - this.income_20 - this.income_22);
    this.takeHomeWeek = this.takeHomeYear / 52;
    this.takeHomeDayAdj = this.takeHomeYear / (253 - this.leave);

    this.effectiveTaxRate = 100 * (1 - (this.takeHomeYear/this.totalCompYear));
  }

  constructor() { }

  ngOnInit(): void {
  }

}
