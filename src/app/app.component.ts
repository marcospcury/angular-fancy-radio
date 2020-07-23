import { Component } from '@angular/core';
import { RadioButtonItem } from './radio-button/radio-button.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: RadioButtonItem[] = [
    { name: 'radio1', value: 'radio1' },
    { name: 'radio2', value: 'radio2' }
  ];

  selectedItem: any = 'radio2';

}
