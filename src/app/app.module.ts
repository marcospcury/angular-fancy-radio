import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { RadioButtonComponent } from './radio-button/radio-button.component';

@NgModule({
  imports: [BrowserModule, FormsModule, CommonModule],
  declarations: [AppComponent, HelloComponent, RadioButtonComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
