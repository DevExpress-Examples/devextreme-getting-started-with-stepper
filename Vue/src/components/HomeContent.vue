<script setup lang="ts">
import { DxStepper, DxItem, DxStepperTypes } from 'devextreme-vue/stepper';
const onSelectionChanged = (e: DxStepperTypes.SelectionChangedEvent) => {
  const newItem = e.addedItems[0];
  const items = e.component.option('items');
  const newIndex = items.findIndex((item) => newItem.label === item.label);
  e.component.option(`items[${newIndex - 1}].disabled`, true);
};
</script>
<template>
  <DxStepper @selection-changed="onSelectionChanged">
    <DxItem label='Personal Details' template='star' />
    <template #star="{ data }">
      <div class="star dx-step-indicator">
      </div>
      <div class="dx-step-caption">
        <div class="dx-step-label">{{ data.label }}</div>
      </div>
    </template>
    <DxItem label="Program Selection" icon='detailslayout' />
    <DxItem label="Campus and Start Dates" icon='map' />
    <DxItem label="Supporting Documents" icon='textdocument' />
    <DxItem label="Scholarship and Aid" icon='money' />
    <DxItem label="Review and Submit" icon='send' />
  </DxStepper>
</template>
