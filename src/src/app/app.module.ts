import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CreditTypeComponent } from './credit-type/credit-type.component';
import { KredytHipotecznyComponent } from './kredyt-hipoteczny/kredyt-hipoteczny.component';
import { KredytGotowkowyComponent } from './kredyt-gotowkowy/kredyt-gotowkowy.component';
import { KredytSamochodowyComponent } from './kredyt-samochodowy/kredyt-samochodowy.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatFormFieldControl } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule  } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';


const routes: Routes = [
  {
    path: 'gotowkowy',
    component: KredytGotowkowyComponent
  }, {
    path: 'samochodowy',       
    component: KredytSamochodowyComponent
  }, {
    path: 'hipoteczny',
    component: KredytHipotecznyComponent
  }
]

@NgModule({
  imports:      [ BrowserModule, MatIconModule, FormsModule, BrowserAnimationsModule,  MatButtonModule, MatCheckboxModule, MatCardModule, MatSidenavModule, MatMenuModule, MatInputModule, MatFormFieldModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, CreditTypeComponent, KredytHipotecznyComponent,  KredytGotowkowyComponent, KredytSamochodowyComponent  ],
  bootstrap:    [ AppComponent ]
})


export class AppModule { }

