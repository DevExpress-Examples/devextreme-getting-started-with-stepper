import { Component } from '@angular/core';
import { DxStepperTypes } from 'devextreme-angular/ui/stepper';

import { DxStepperModule } from 'devextreme-angular';

@Component({
    selector: 'app-root',
    imports: [DxStepperModule],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  steps: DxStepperTypes.Item[] = [
    { label: 'Personal Details', template: 'starTemplate' },
    { label: 'Program Selection', icon: 'detailslayout' },
    { label: 'Campus and Start Dates', icon: 'map' },
    { label: 'Supporting Documents', icon: 'textdocument' },
    { label: 'Scholarship and Aid', icon: 'money', optional: true },
    { label: 'Review and Submit', icon: 'send' },
  ];

  onSelectionChanged(e: DxStepperTypes.SelectionChangedEvent): void {
    const newItem = e.addedItems[0];
    const newIndex = this.steps.findIndex((item) => item.label === newItem.label);

    if (newIndex > 0 && !this.steps[newIndex - 1].disabled) {
      this.steps[newIndex - 1].disabled = true;
    }
  }
}
