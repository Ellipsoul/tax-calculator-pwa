import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uktaxes',
  templateUrl: './uktaxes.component.html',
  styleUrls: ['./uktaxes.component.sass', './uktaxes2.component.sass']
})
export class UktaxesComponent implements OnInit {
  // Default values for salary
  salary:number = 62_000;
  bonus:number = 18_000;
  leave:number = 25;

  // Total compensation calculations
  totalCompYear:number = this.salary + this.bonus;
  totalCompWeek:number = this.totalCompYear / 52;

  // Tax calculations
  income_20:number = 0.2 * Math.min(Math.max(this.totalCompYear - 12570, 0), 50270-12570);
  income_40:number = 0.4 * Math.min(Math.max(this.totalCompYear - 50270, 0), 150000 - 50270);
  income_45:number = 0.45 * Math.max(this.totalCompYear - 150000, 0);

  nhs_12:number = 0.12 * 52 * Math.min(Math.max(this.totalCompWeek - 184, 0), 967-184);
  nhs_2:number = 0.02 * 52 * Math.max(this.totalCompWeek - 967, 0);

  // Take home salary calculations
  takeHomeYear:number = this.totalCompYear - this.income_20 - this.income_40 - this.income_45 - this.nhs_12 - this.nhs_2;
  takeHomeWeek:number = this.takeHomeYear / 52;
  // Adjusted for 253 working days (UK 2022) - leave days
  takeHomeDayAdj:number = this.takeHomeYear / (253 - this.leave);

  // Effective Tax Percentage
  effectiveTaxRate:number = 100 * (1 - (this.takeHomeYear/this.totalCompYear));

  // Keep all values updated every time a value changes
  updateValues():void {
    this.totalCompYear = this.salary + this.bonus;
    this.totalCompWeek = this.totalCompYear / 52.18;

    this.income_20 = 0.2 * Math.min(Math.max(this.totalCompYear - 12570, 0), 50270-12570)
    this.income_40 = 0.4 * Math.min(Math.max(this.totalCompYear - 50270, 0), 150000-50270)
    this.income_45 = 0.45 * Math.max(this.totalCompYear - 150000, 0)

    this.nhs_12 = 0.1325 * 52 * Math.min(Math.max(this.totalCompWeek - 184, 0), 967-184)
    this.nhs_2 = 0.0325 * 52 * Math.max(this.totalCompWeek - 967, 0)

    this.takeHomeYear = this.totalCompYear - this.income_20 - this.income_40 - this.income_45 - this.nhs_12 - this.nhs_2
    this.takeHomeWeek = this.takeHomeYear / 52;
    this.takeHomeDayAdj = this.takeHomeYear / (253 - this.leave);

    this.effectiveTaxRate = 100 * (1 - (this.takeHomeYear/this.totalCompYear));
  }

  constructor() { }

  ngOnInit(): void {
  }

}
