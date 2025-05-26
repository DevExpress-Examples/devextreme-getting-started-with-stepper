import React, { JSX, useState } from 'react';
import { Stepper, Item, StepperTypes } from 'devextreme-react/stepper';

const renderStarTemplate = (data: StepperTypes.TemplateData) => (
  <>
    <div className="star dx-step-indicator"></div>
    <div className="dx-step-caption">
      <div className="dx-step-label">{data.label}</div>
    </div>
  </>
);

export default function App(): JSX.Element {
  const [steps, setSteps] = useState([
    { label: 'Personal Details', render: renderStarTemplate },
    { label: 'Program Selection', icon: 'detailslayout' },
    { label: 'Campus and Start Dates', icon: 'map' },
    { label: 'Supporting Documents', icon: 'textdocument' },
    { label: 'Scholarship and Aid', icon: 'money', optional: true },
    { label: 'Review and Submit', icon: 'send' }
  ]);

  const onSelectionChanged = (e: StepperTypes.SelectionChangedEvent) => {
    const newItem = e.addedItems[0];
    const newIndex = steps.findIndex((item) => item.label === newItem.label);

    if (newIndex > 0 && !steps[newIndex - 1].disabled) {
      const updated = [...steps];
      updated[newIndex - 1] = { ...updated[newIndex - 1], disabled: true };
      setSteps(updated);
    }
  };

  return (
    <Stepper onSelectionChanged={onSelectionChanged}>
      {steps.map((item, index) => (
        <Item key={index} {...item} />
      ))}
    </Stepper>
  );
}
