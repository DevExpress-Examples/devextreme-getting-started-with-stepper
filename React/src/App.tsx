import { JSX } from 'react';
import { Stepper, Item, StepperTypes } from 'devextreme-react/stepper';
import React from 'react';

const renderFirstItem = (data: StepperTypes.TemplateData) => <React.Fragment><div className="star dx-step-indicator"></div>
  <div className="dx-step-caption">
    <div className="dx-step-label">{data.label}</div>
  </div></React.Fragment>;

const onSelectionChanged = (e: StepperTypes.SelectionChangedEvent) => {
  const newItem = e.addedItems[0];
  const items = e.component.option('items');
  const newIndex = items.findIndex((item: StepperTypes.Item) => newItem.label === item.label);
  e.component.option(`items[${newIndex - 1}].disabled`, true);
};

export default function App(): JSX.Element {
  return (
    <Stepper onSelectionChanged={onSelectionChanged}>
      <Item label="Personal Details" render={renderFirstItem} />
      <Item label="Program Selection" icon="detailslayout" />
      <Item label="Campus and Start Dates" icon="map" />
      <Item label="Supporting Documents" icon="textdocument" />
      <Item label="Scholarship and Aid" icon="money" optional={true} />
      <Item label="Review and Submit" icon="send" />
    </Stepper>
  );
}
