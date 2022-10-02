import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title:string = 'tax-calculator-pwa';

displayedCountries:string[][] = [['UK', 'US'], ['UK', 'SG'], ['US', 'SG']];
  currentIndex:number = 0;
  currentlyDisplayed = this.displayedCountries[this.currentIndex];

  // GBP to USD Converter
  GBP_USD:number = 1.3318;

  usuk_gbpInput:number = 1;
  usuk_usdOutput:number = this.usuk_gbpInput * this.GBP_USD;
  usuk_usdInput:number = 1;
  usuk_gbpOutput:number = this.usuk_usdInput / this.GBP_USD;

  GBPUSD:boolean = true;

  // USD to SGD Converter
  USD_SGD:number = 1.3581;

  ussg_usdInput:number = 1;
  ussg_sgdOutput:number = this.ussg_usdInput * this.USD_SGD;
  ussg_sgdInput:number = 1;
  ussg_usdOutput:number = this.ussg_sgdInput / this.USD_SGD;

  USDSGD:boolean = true;

  // GBP to SGD Converter
  GBP_SGD:number = 1.8087;

  uksg_gbpInput:number = 1;
  uksg_sgdOutput:number = this.uksg_gbpInput * this.GBP_SGD;
  uksg_sgdInput:number = 1;
  uksg_gbpOutput:number = this.uksg_sgdInput / this.GBP_SGD;

  GBPSGD:boolean = true;

  updateOutput():void {
    this.usuk_usdOutput = this.usuk_gbpInput * this.GBP_USD;
    this.usuk_gbpOutput = this.usuk_usdInput / this.GBP_USD;

    this.ussg_usdOutput = this.ussg_sgdInput / this.USD_SGD;
    this.ussg_sgdOutput = this.ussg_usdInput * this.USD_SGD;

    this.uksg_gbpOutput = this.uksg_sgdInput / this.GBP_SGD;
    this.uksg_sgdOutput = this.uksg_gbpInput * this.GBP_SGD;
  }

  // Changes converter between GBPUSD and GBPUSD
  toggleConverter():void {
    this.GBPUSD = !this.GBPUSD;
    this.USDSGD = !this.USDSGD;
    this.GBPSGD = !this.GBPSGD;
  }

  // Changes countries being displayed
  toggleCountries():void {
    this.currentIndex = (this.currentIndex + 1) % 3;
    this.currentlyDisplayed = this.displayedCountries[this.currentIndex];
  }
}
