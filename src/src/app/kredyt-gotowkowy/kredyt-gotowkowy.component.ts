import { Component, OnInit, Inject } from '@angular/core';
import { KredytGotowkowy } from './typy'
import { globalVariables } from '../globals'

@Component({
  selector: 'app-kredyt-gotowkowy',
  templateUrl: './kredyt-gotowkowy.component.html',
  styleUrls: ['./kredyt-gotowkowy.component.css']
})

export class KredytGotowkowyComponent implements OnInit {
  
  kredyt: KredytGotowkowy = {
    kwota : 0,
    raty: 0,
    oprocentowanie: 0,
    prowizja: 0,
    wartoscUbezpieczenia: 0
}

  ngOnInit() {}

  valueGotowkowy = '';

  public obliczGotowkowy() {

     var a = 1 + (this.kredyt.oprocentowanie / 100);
     var licznik = Math.pow(a, this.kredyt.raty);
     var mianownik = Math.pow(a, this.kredyt.raty)-1;

     globalVariables.wynik = ((this.kredyt.kwota + this.kredyt.wartoscUbezpieczenia + this.kredyt.prowizja) * (this.kredyt.oprocentowanie / 100) * (licznik/mianownik));

    if (this.kredyt.oprocentowanie == " ") {

        alert("Każdy kredyt jest oprocentowany ;)");

      } else {
        
        this.valueGotowkowy = globalVariables.wynik.toFixed(2);
            
            }
  }

}