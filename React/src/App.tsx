import React, { type JSX, useCallback, useState } from 'react';
import Stepper, { Item, type StepperTypes } from 'devextreme-react/stepper';
import 'devextreme/dist/css/dx.light.css';

export default function App(): JSX.Element {
  function renderStarTemplate(data: StepperTypes.Item): JSX.Element {
    return (
      <React.Fragment>
        <div className="star dx-step-indicator"></div>
        <div className="dx-step-caption">
          <div className="dx-step-label">{data.label}</div>
        </div>
      </React.Fragment>
    );
  }

  const [steps, setSteps] = useState<any[]>([
    { label: 'Personal Details', render: renderStarTemplate },
    { label: 'Program Selection', icon: 'detailslayout' },
    { label: 'Campus and Start Dates', icon: 'map' },
    { label: 'Supporting Documents', icon: 'textdocument' },
    { label: 'Scholarship and Aid', icon: 'money', optional: true },
    { label: 'Review and Submit', icon: 'send' },
  ]);

  const onSelectionChanged = useCallback((e: StepperTypes.SelectionChangedEvent): void => {
    const newItem = e.addedItems[0];
    const newIndex = steps.findIndex((item) => item.label === newItem.label);

    if (newIndex > 0 && !steps[newIndex - 1].disabled) {
      const updated = [...steps];
      updated[newIndex - 1] = { ...updated[newIndex - 1], disabled: true };
      setSteps(updated);
    }
  }, [steps]);

  return (
    <React.Fragment>
      <Stepper onSelectionChanged={onSelectionChanged}>
        {
          steps.map((item, index) => (
            <Item key={index} {...item} />
          ))
        }
      </Stepper>
    </React.Fragment>
  );
}
