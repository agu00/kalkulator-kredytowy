import { Component, Inject } from '@angular/core';
import { KredytGotowkowyComponent } from './kredyt-gotowkowy/kredyt-gotowkowy.component'
import { globalVariables } from './globals'
import { KredytHipotecznyComponent } from './kredyt-hipoteczny/kredyt-hipoteczny.component'
import { globalVariablesH } from './globals'
import { KredytSamochodowyComponent } from './kredyt-samochodowy/kredyt-samochodowy.component'
import { globalVariablesS } from './globals'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent {

  wynik :number = 0; 
  wynikH :number = 0;
  wynikS :number = 0;

  constructor(){
    this.wynik = globalVariables.wynik;
  }

}