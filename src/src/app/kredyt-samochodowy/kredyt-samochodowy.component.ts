import { Component, OnInit } from '@angular/core';
import { KredytSamochodowy } from './typy'
import { globalVariablesS } from '../globals'

@Component({
  selector: 'app-kredyt-samochodowy',
  templateUrl: './kredyt-samochodowy.component.html',
  styleUrls: ['./kredyt-samochodowy.component.css']
})
export class KredytSamochodowyComponent implements OnInit {

  kredytS: KredytSamochodowy = {
    cena: 0,
    wklad: 0,
    raty: 0,
    oprocentowanie: 0,
    prowizja: 0,
    inneKoszty: 0
  }

  constructor() { }

  ngOnInit() {
  }

  valueSamochodowy = '';

  public obliczSamochodowy() {

      var kwotaKredytuSamochodowego = (this.kredytS.cena - this.kredytS.wklad);
      

      var prowizjaKredytuSamochodowego = kwotaKredytuSamochodowego * (this.kredytS.prowizja / 100);

      var oprocentowanieKredytuSamochodowego = kwotaKredytuSamochodowego * (this.kredytS.oprocentowanie / 100);

      var totalValue = kwotaKredytuSamochodowego + prowizjaKredytuSamochodowego + oprocentowanieKredytuSamochodowego;

      globalVariablesS.wynikS = (totalValue + this.kredytS.inneKoszty) / this.kredytS.raty;

      if (this.kredytS.oprocentowanie == " ") {

        alert("Każdy kredyt jest oprocentowany ;)");

      } else {
      
      this.valueSamochodowy = globalVariablesS.wynikS.toFixed(2);

      }
  }

}