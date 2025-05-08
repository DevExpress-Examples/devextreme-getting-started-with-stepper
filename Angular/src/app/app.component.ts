import { Component } from '@angular/core';
import { DxStepperTypes } from 'devextreme-angular/stepper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  onSelectionChanged(e: DxStepperTypes.SelectionChangedEvent) {
    const newItem = e.addedItems[0];
    const items = e.component.option('items');
    const newIndex = items.findIndex((item) => newItem.label === item.label);
    e.component.option(`items[${newIndex - 1}].disabled`, true);
  }
}
