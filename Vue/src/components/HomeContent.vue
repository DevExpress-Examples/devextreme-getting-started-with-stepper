<template>
  <DxStepper ref="stepperRef" @selection-changed="onSelectionChanged">
  <DxItem
    v-for="(item, index) in items"
    :key="index"
    v-bind="item"
    :template="item.template"
  />
  <template #star="{ data }">
    <div class="star dx-step-indicator"></div>
    <div class="dx-step-caption">
      <div class="dx-step-label">{{ data.label }}</div>
    </div>
  </template>
</DxStepper>
</template>
<script setup lang="ts">
import { reactive } from 'vue';
import { DxStepper, DxItem, DxStepperTypes } from 'devextreme-vue/stepper';
import 'devextreme/dist/css/dx.light.css';

const items: DxStepperTypes.Item[] = reactive([
  { label: 'Personal Details', template: 'star' },
  { label: 'Program Selection', icon: 'detailslayout' },
  { label: 'Campus and Start Dates', icon: 'map' },
  { label: 'Supporting Documents', icon: 'textdocument' },
  { label: 'Scholarship and Aid', icon: 'money', optional: true },
  { label: 'Review and Submit', icon: 'send' }
]);
const onSelectionChanged = (e: DxStepperTypes.SelectionChangedEvent) => {
  const newItem = e.addedItems[0];
  const newIndex = items.findIndex((item) => item.label === newItem.label);
  if (newIndex > 0) {
    items[newIndex - 1].disabled = true;
  }
};
</script>
<style>
.star { 
  aspect-ratio: 1;
  clip-path: polygon(50% 0,79% 90%,2% 35%,98% 35%,21% 90%); 
  box-shadow: 0 0 0 8px #fafafa;
}
</style>
