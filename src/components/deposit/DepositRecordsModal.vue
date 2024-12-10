<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue'
import { LeftOutlined } from '@ant-design/icons-vue'

defineProps({
  open: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:open'])
const selectedPeriod = ref('Today')
const selectOpen = ref(false)

const handleClose = () => {
  emit('update:open', false)
}

const periods = ['Today', 'Yesterday', 'Last 7 Days', 'Last 15 Days', 'Last 30 Days', 'All']

const handleSelectChange = (value: string) => {
  selectedPeriod.value = value
}

const handleSelectDropdownVisibleChange = (open: boolean) => {
  selectOpen.value = open
}
</script>

<template>
  <a-drawer
    :open="open"
    placement="bottom"
    height="93vh"
    :mask="false"
    :closable="false"
    :rootClassName="'deposit-records-drawer'"
    @close="handleClose"
  >
    <div class="records-container">
      <div class="flex flex-col">
        <!-- Header -->
        <div class="drawer-header">
          <button class="back-btn" @click="handleClose">
            <LeftOutlined style="font-size: 24px" />
          </button>
          <h2 class="text-2xl font-normal">Deposit Records</h2>
          <div class="w-8"></div>
        </div>

        <div class="period-selector">
          <a-select
            v-model:value="selectedPeriod"
            :options="periods.map((period) => ({ value: period, label: period }))"
            style="width: 140px"
            :bordered="true"
            @change="handleSelectChange"
            @dropdown-visible-change="handleSelectDropdownVisibleChange"
          >
            <template #suffixIcon>
              <span class="select-arrow" :class="{ 'is-open': selectOpen }">▼</span>
            </template>
          </a-select>

          <div class="total-deposit">Total Deposit <span class="amount">U0.00</span></div>
        </div>
        <div class="no-records">
          <a-empty />
          <p class="text-gray-400">No Records</p>
        </div>
      </div>
    </div>
  </a-drawer>
</template>

<style scoped>
.records-container {
  padding: 0 5px;
}

.drawer-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding: 16px 0;
}

.back-btn {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
}

.period-selector {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding: 0 16px;
}

.period-button {
  min-width: 120px;
  border-radius: 20px;
  border: 1px solid #26a17b;
  color: #26a17b;
}

.total-deposit {
  color: #666;
  font-size: 16px;
}

.amount {
  color: #26a17b;
  font-weight: 500;
  margin-left: 8px;
}

.no-records {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
}

.empty-box {
  width: 120px;
  height: 120px;
  margin-bottom: 16px;
  opacity: 0.5;
}

.deposit-records-drawer {
  max-width: 530px;
  margin: 0 auto;
}

.select-arrow {
  font-size: 12px;
  transition: transform 0.3s;
}

.select-arrow.is-open {
  transform: rotate(180deg);
}

:deep(.ant-select-selector) {
  border-radius: 20px !important;
  height: 40px !important;
  padding: 0 16px !important;
}

:deep(.ant-select-selection-item) {
  font-size: 14px;
  line-height: 38px !important;
}

:deep(.ant-select:not(.ant-select-disabled):hover .ant-select-selector) {
  border-color: #26a17b !important;
}

:deep(
  .ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input)
    .ant-select-selector
) {
  border-color: #26a17b !important;
}
:global(.ant-select-item-option-selected:not(.ant-select-item-option-disabled)),
:global(.ant-select-item-option-active:not(.ant-select-item-option-disabled)) {
  color: #26a17b !important;
  background-color: transparent !important;
}
</style>
