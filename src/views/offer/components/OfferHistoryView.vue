<template>
  <div class="flex mr-2 ml-2 flex-col h-screen font-sans">
    <!-- Main Content -->
    <div class="flex-1 bg-[#F8F8F8]">
      <div class="flex-1">
        <!-- Section for Selectors -->
        <section>
          <div class="w-full">
            <div class="flex items-center justify-between">
              <!-- Left Section: Select Options -->
              <div class="flex space-x-2 text-gray-400">
                <a-select 
                  class="w-auto min-w-[117px] custom-select" 
                  v-model:value="value1" 
                  @change="handleChange">
                  <a-select-option value="today">Today</a-select-option>
                  <a-select-option value="yesterday">Yesterday</a-select-option>
                  <a-select-option value="last7Days">Last 7 Days</a-select-option>
                  <a-select-option value="last15Days">Last 15 Days</a-select-option>
                  <a-select-option value="last30Days">Last 30 Days</a-select-option>
                </a-select>

                <a-select 
                  class="custom-select w-auto min-w-[128px]" 
                  v-model:value="value2" 
                  @change="handleChange">
                  <a-select-option value="all">All</a-select-option>
                  <a-select-option value="deposit">Deposit</a-select-option>
                  <a-select-option value="withdraw">Withdraw</a-select-option>
                  <a-select-option value="claimEarnings">Claim Earnings</a-select-option>
                </a-select>
              </div>

              <!-- Right Section: Total Earnings -->
              <p class="text-md text-gray-400 mt-3">
                Bonus <span class="text-[#ffaa09]">0.00</span>
              </p>
            </div>
          </div>
        </section>

        <!-- No Record Section (Centered) -->
        <div class="flex items-center justify-center h-full">
          <div class="flex flex-col items-center">
            <img
              src="https://cdntoos.hwylaws.cc/siteadmin/skin/lobby_asset/1-0-common/common/common/img_none_sj.avif?manualVersion=1&version=737e849f8e"
              alt="No Record" 
              class="w-32 h-32">
            <p class="text-gray-400 mt-4">No Record</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value1 = ref('today');
const value2 = ref('all');

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};
</script>

<style scoped>
/* Custom Select */
.custom-select {
  display: inline-block !important;
}

.custom-select .ant-select-selector {
  border-radius: 20px !important;
  border: 1px solid #e3e3e3 !important;
  background-color: white !important;
}

.custom-select.ant-select-focused .ant-select-selector {
  border-color: #26a17b !important;
  box-shadow: 0 0 0 2px rgba(38, 161, 123, 0.2);
}

.custom-select.ant-select-open .ant-select-selector {
  border-color: #26a17b !important;
}

.custom-select .ant-select-selection-item {
  border-radius: 20px !important;
  color: #bebebe !important;
  background-color: transparent !important;
}

.custom-select .ant-select-item-option-selected {
  background-color: transparent !important;
  color: #26a17b !important;
}

.custom-select .ant-select-item-option-content {
  color: #333333 !important;
  transition: color 0.3s ease-in-out;
  white-space: nowrap !important;
}

.custom-select .ant-select-item-option-active .ant-select-item-option-content {
  color: #26a17b !important;
}

.custom-select .ant-select-item-option {
  width: fit-content !important;
}

@media (max-width: 375px) {
  .custom-select .ant-select-selection-item {
    font-size: 11px !important;
  }

  .custom-select .ant-select-item-option {
    font-size: 6px !important;
  }
}
</style>
