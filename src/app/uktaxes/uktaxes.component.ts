import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uktaxes',
  templateUrl: './uktaxes.component.html',
  styleUrls: ['./uktaxes.component.sass']
})
export class UktaxesComponent implements OnInit {
  // Default values for salary
  salary:number = 50000;
  bonus:number = 3000;
  leave:number = 28;

  constructor() { }

  ngOnInit(): void {
  }

}
