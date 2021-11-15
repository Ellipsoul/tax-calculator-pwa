import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title:string = 'tax-calculator-pwa';

  GBP_USD:number = 1.3426;

  gbpInput:number = 1;
  usdOutput:number = this.gbpInput * this.GBP_USD;
  usdInput:number = 1;
  gbpOutput:number = this.usdInput / this.GBP_USD;

  convertFromGBP:boolean = true;

  updateOutput():void {
    this.usdOutput = this.gbpInput * this.GBP_USD;
    this.gbpOutput = this.usdInput / this.GBP_USD;
  }

  toggleConverter():void {
    this.convertFromGBP = !this.convertFromGBP;
  }
}
