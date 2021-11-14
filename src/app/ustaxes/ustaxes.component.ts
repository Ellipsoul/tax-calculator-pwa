import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ustaxes',
  templateUrl: './ustaxes.component.html',
  styleUrls: ['./ustaxes.component.sass']
})
export class UstaxesComponent implements OnInit {
  // Default values for salary
  salary:number = 100_000;
  bonus:number = 25_000;
  leave:number = 12;

  // Total compensation calculations
  totalCompYear:number = this.salary + this.bonus;
  totalCompWeek:number = this.totalCompYear / 52;

  // Tax calculations
  income_10:number = 0.1 * Math.min(this.totalCompYear - 10275, 10275);
  income_12:number = 0.12 * Math.min(Math.max(this.totalCompYear - 10275, 0), 41775 - 10275);
  income_22:number = 0.22 * Math.min(Math.max(this.totalCompYear - 41775, 0), 89075 - 41775);
  income_24:number = 0.24 * Math.min(Math.max(this.totalCompYear - 89075, 0), 170050 - 89075);
  income_32:number = 0.32 * Math.min(Math.max(this.totalCompYear - 170050, 0), 215950 - 170050);
  income_35:number = 0.35 * Math.min(Math.max(this.totalCompYear - 215950, 0), 539900 - 215950);
  income_37:number = 0.37 * Math.max(this.totalCompYear - 539900, 0);

  // Take home salary calculations
  takeHomeYear:number = (this.totalCompYear - this.income_10 - this.income_12 - this.income_22 -
    this.income_24 - this.income_32 - this.income_35 - this.income_37);
  takeHomeMonth:number = this.takeHomeYear / 12;
  takeHomeWeek:number = this.takeHomeYear / 52;
  // Adjusted for 250 working days (2022 US) - leave days
  takeHomeDayAdj:number = this.takeHomeYear / (253 - this.leave);

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

    // Take home salary calculations
    this.takeHomeYear = (this.totalCompYear - this.income_10 - this.income_12 - this.income_22 -
      this.income_24 - this.income_32 - this.income_35 - this.income_37);
    this.takeHomeMonth = this.takeHomeYear / 12;
    this.takeHomeWeek = this.takeHomeYear / 52;
    // Adjusted for 250 working days (2022 US) - leave days
    this.takeHomeDayAdj = this.takeHomeYear / (253 - this.leave);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
