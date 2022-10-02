import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ustaxes',
  templateUrl: './ustaxes.component.html',
  styleUrls: ['./ustaxes.component.sass', './ustaxes2.component.sass']
})
export class UstaxesComponent implements OnInit {
  // Default values for salary
  salary:number = 120_000;
  bonus:number = 20_000;
  leave:number = 24;

  // Total compensation calculations
  totalCompYear:number = this.salary + this.bonus;
  totalCompWeek:number = this.totalCompYear / 52;

  // Federal Tax calculations
  income_10:number = 0.1 * Math.min(this.totalCompYear - 10275, 10275);
  income_12:number = 0.12 * Math.min(Math.max(this.totalCompYear - 10275, 0), 41775 - 10275);
  income_22:number = 0.22 * Math.min(Math.max(this.totalCompYear - 41775, 0), 89075 - 41775);
  income_24:number = 0.24 * Math.min(Math.max(this.totalCompYear - 89075, 0), 170050 - 89075);
  income_32:number = 0.32 * Math.min(Math.max(this.totalCompYear - 170050, 0), 215950 - 170050);
  income_35:number = 0.35 * Math.min(Math.max(this.totalCompYear - 215950, 0), 539900 - 215950);
  income_37:number = 0.37 * Math.max(this.totalCompYear - 539900, 0);
  // Health Insurance Tax calculations, < $147,000 for 2022
  fica_765:number = 0.0765 * Math.min(this.totalCompYear, 147000);

  // Take home salary calculations
  takeHomeYear:number = (this.totalCompYear - this.income_10 - this.income_12 - this.income_22 -
    this.income_24 - this.income_32 - this.income_35 - this.income_37 - this.fica_765);
  takeHomeWeek:number = this.takeHomeYear / 52;
  // Adjusted for 250 working days (2022 US) - leave days
  takeHomeDayAdj:number = this.takeHomeYear / (253 - this.leave);
  // Effective Tax Rate
  effectiveTaxRate:number = 100 * (1 - (this.takeHomeYear / this.totalCompYear));

  // Keep all values updated every time a value changes
  updateValues():void {
    this.totalCompYear = this.salary + this.bonus;
    this.totalCompWeek = this.totalCompYear / 52.18;

    this.income_10 = 0.1 * Math.min(this.totalCompYear - 10275, 10275);
    this.income_12 = 0.12 * Math.min(Math.max(this.totalCompYear - 10275, 0), 41775 - 10275);
    this.income_22 = 0.22 * Math.min(Math.max(this.totalCompYear - 41775, 0), 89075 - 41775);
    this.income_24 = 0.24 * Math.min(Math.max(this.totalCompYear - 89075, 0), 170050 - 89075);
    this.income_32 = 0.32 * Math.min(Math.max(this.totalCompYear - 170050, 0), 215950 - 170050);
    this.income_35 = 0.35 * Math.min(Math.max(this.totalCompYear - 215950, 0), 539900 - 215950);
    this.income_37 = 0.37 * Math.max(this.totalCompYear - 539900, 0);

    this.fica_765 = 0.0765 * Math.min(this.totalCompYear, 147000);

    // Take home salary calculations
    this.takeHomeYear = (this.totalCompYear - this.income_10 - this.income_12 - this.income_22 -
      this.income_24 - this.income_32 - this.income_35 - this.income_37 - this.fica_765);
    this.takeHomeWeek = this.takeHomeYear / 52;
    // Adjusted for 250 working days (2022 US) - leave days
    this.takeHomeDayAdj = this.takeHomeYear / (253 - this.leave);

    this.effectiveTaxRate = 100 * (1 - (this.takeHomeYear / this.totalCompYear));
  }

  constructor() { }

  ngOnInit(): void {
  }

}
