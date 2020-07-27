import { Component } from '@angular/core';
import { RadioButtonItem } from './radio-button/radio-button.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: RadioButtonItem[] = [
    { name: 'CPF', value: 'CPF' },
    { name: 'Protocolo (CIP)', value: 'CIP' }
  ];

  selectedItem: any = 'CPF';

}
