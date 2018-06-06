import { Component, OnInit } from '@angular/core';
import { KredytHipoteczny } from './typy'
import { globalVariablesH } from '../globals'

@Component({
  selector: 'app-kredyt-hipoteczny',
  templateUrl: './kredyt-hipoteczny.component.html',
  styleUrls: ['./kredyt-hipoteczny.component.css']
})
export class KredytHipotecznyComponent implements OnInit {

  kredytH: KredytHipoteczny = {
    cena: 0,
    wklad: 0,
    raty: 0,
    oprocentowanie: 0,
    prowizja: 0,
    inneKoszty: 0
  }

  constructor() { }

  ngOnInit() {}

  valueHipoteczny = '';

  public obliczHipoteczny() {
    
      var kwotaKredytuHipotecznego = (this.kredytH.cena - this.kredytH.wklad);
      var prowizjaKredytuHipotecznego = kwotaKredytuHipotecznego * (this.kredytH.prowizja / 100);
      var oprocentowanieKredytuHipotecznego = kwotaKredytuHipotecznego * (this.kredytH.oprocentowanie / 100);

      var totalValue = kwotaKredytuHipotecznego + prowizjaKredytuHipotecznego + oprocentowanieKredytuHipotecznego;

      globalVariablesH.wynikS = (totalValue + this.kredytH.inneKoszty) / this.kredytH.raty;

      if (this.kredytH.oprocentowanie == " ") {

        alert("Każdy kredyt jest oprocentowany ;)");

      } else {
      
      this.valueHipoteczny = globalVariablesH.wynikS.toFixed(2);
      }
    }

}