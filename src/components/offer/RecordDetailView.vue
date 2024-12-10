<template>
  <div class="max-h-[550px] font-sans bg-[#F8F8F8]">
    <div class="w-full">
      <div class="flex items-center justify-between">
        <!-- Left Section: 2 Select Options -->
        <div class="flex space-x-4 text-gray-400">
          <a-select class="w-auto min-w-[100px] custom-select" ref="select" v-model:value="value1" @focus="focus"
           
            @change="handleChange">
            <a-select-option value="today">Today</a-select-option>
            <a-select-option value="yesterday">Yesterday</a-select-option>
            <a-select-option value="last7Days">Last 7 Days</a-select-option>
            <a-select-option value="last15Days">Last 15 Days</a-select-option>
            <a-select-option value="last30Days">Last 30 Days</a-select-option>
          </a-select>

          <a-select class="custom-select w-auto min-w-[100px] " ref="select" v-model:value="value2" @focus="focus" @change="handleChange" 
                
          >
            <a-select-option value="all">All</a-select-option>
            <a-select-option value="deposit">Deposit</a-select-option>
            <a-select-option value="withdraw">Withdraw</a-select-option>
            <a-select-option value="claimEarnings">Claim Earnings</a-select-option>
          </a-select>

        </div>

        <!-- Right Section: Total Earnings -->
        <p class="text-md iphone6:text-[12px] text-gray-400 mt-3">
          Total Earnings <span class="text-[#ffaa09]">0.00</span>
        </p>
      </div>
      <section>
        <div class="overflow-x-auto max-h-[550px] overflow-y-auto mt-2">
          <table class="w-full border-collapse justify-items-center">
            <!-- Table Header -->
            <thead class="h-16 iphone6:h-8">
              <tr class="w-full border border-gray-300 iphone6:text-[12px]">
                <!-- First Column -->
                <th class="w-[40%] px-2 py-2 font-thin rounded-tl-lg rounded-bl-lg border-l border-t border-b ">
                  Time
                </th>

                <!-- Middle Column -->
                <th class="px-2 py-2 font-thin w-[30%]">
                  Type
                </th>

                <!-- Last Column -->
                <th class="px-2 py-2 font-thin w-[30%] rounded-tr-lg rounded-br-lg border-r border-t border-b">
                  Amount
                </th>
              </tr>
            </thead>

            <!-- Table Body -->
            <tbody v-if="levels && levels.length > 0">
              <tr v-for="(level, index) in levels" :key="index" :class="{
                'border-2 border-green-500 rounded-lg overflow-hidden': index === 0,
                'text-gray-400 bg-white': index % 2 === 0,
                'text-gray-400 bg-gray-100': index % 2 !== 0
              }" class="align-center">

                <!-- First Column -->
                <td class="px-2 border border-transparent first:rounded-l-lg last:rounded-r-lg text-center h-42">
                  {{ level.time }}
                </td>

                <!-- Second Column -->
                <td class="px-2 py-2 border border-transparent first:rounded-l-lg last:rounded-r-lg text-center">
                  {{ level.type }}
                </td>

                <!-- Third Column -->
                <td
                  class="px-2 py-2 border border-transparent first:rounded-l-lg last:rounded-r-lg text-center text-xs text-yellow-400">
                  {{ level.amount ? level.amount : '-' }}
                </td>

              </tr>
            </tbody>

            <!-- No Record Section -->
            <tbody v-if="!levels || levels.length === 0">
              <tr>
                <td colspan="3" class="py-10 iphone6:py-2">
                  <div class="flex flex-col items-center justify-center">
                    <img
                      src="https://cdntoos.hwylaws.cc/siteadmin/skin/lobby_asset/1-0-common/common/common/img_none_sj.avif?manualVersion=1&version=737e849f8e"
                      alt="No Record" class="w-32 h-32 mt-20" />
                    <p class="text-gray-400">No Record</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

        </div>
      </section>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const value1 = ref('today');
const value2 = ref('all');
const focus = () => {
  console.log('focus');
};

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};
const levels = [];
const levels1 = [
  { level: 3, time: '2024-01-10 13:59', type: 'deposit', amount: '1' },
  { level: 2, time: '2024-01-10 13:59', type: 'withdra', amount: '2' },
  { level: 3, time: '2024-01-10 13:59', type: 'deposit', amount: '3' },
  { level: 2, time: '2024-01-10 13:59', type: 'withdra', amount: '' },
  { level: 3, time: '2024-01-10 13:59', type: 'deposit', amount: '' },
  { level: 2, time: '2024-01-10 13:59', type: 'withdra', amount: '' },
  { level: 3, time: '2024-01-10 13:59', type: 'deposit', amount: '' },
  { level: 2, time: '2024-01-10 13:59', type: 'withdra', amount: '' },
  { level: 3, time: '2024-01-10 13:59', type: 'deposit', amount: '' },
  { level: 3, time: '2024-01-10 13:59', type: 'deposit', amount: '' },
  { level: 2, time: '2024-01-10 13:59', type: 'withdra', amount: '' },
  { level: 3, time: '2024-01-10 13:59', type: 'deposit', amount: '' },
  { level: 2, time: '2024-01-10 13:59', type: 'withdra', amount: '' },
  { level: 3, time: '2024-01-10 13:59', type: 'deposit', amount: '' },
  { level: 2, time: '2024-01-10 13:59', type: 'withdra', amount: '' },
  { level: 3, time: '2024-01-10 13:59', type: 'deposit', amount: '' },
  { level: 2, time: '2024-01-10 13:59', type: 'withdra', amount: '' },
  { level: 3, time: '2024-01-10 13:59', type: 'deposit', amount: '' },
  { level: 2, time: '2024-01-10 13:59', type: 'withdra', amount: '' },
  { level: 3, time: '2024-01-10 13:59', type: 'deposit', amount: '' },
  { level: 2, time: '2024-01-10 13:59', type: 'withdra', amount: '' },
  { level: 3, time: '2024-01-10 13:59', type: 'deposit', amount: '' },
  { level: 2, time: '2024-01-10 13:59', type: 'withdra', amount: '' },
  { level: 3, time: '2024-01-10 13:59', type: 'deposit', amount: '' },
  { level: 2, time: '2024-01-10 13:59', type: 'withdra', amount: '' },
  { level: 3, time: '2024-01-10 13:59', type: 'deposit', amount: '' },
  { level: 2, time: '2024-01-10 13:59', type: 'withdra', amount: '' },
  { level: 3, time: '2024-01-10 13:59', type: 'deposit', amount: '' },
  { level: 2, time: '2024-01-10 13:59', type: 'withdra', amount: '' },

];
</script>
<style>
/* Override the default selected option styles */
:where(.css-dev-only-do-not-override-1p3hq3p) .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
  background-color: transparent !important; /* Remove background of selected item */
  color: #bebebe !important; /* Change option text color to green */
  font-weight: normal !important; /* Set font weight to normal */
}
/* Style for UNSELECTED options (not selected and not hovered) */
:where(.css-dev-only-do-not-override-1p3hq3p) 
  .ant-select-item-option:not(.ant-select-item-option-selected):not(.ant-select-item-option-active) 
  .ant-select-item-option-content {

    flex: auto;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #bebebe !important;
}
/* Style for HOVERED option */
:where(.css-dev-only-do-not-override-1p3hq3p) 
  .ant-select-item-option.ant-select-item-option-active  {
  color: #26a17b !important; /* Change color of option when hovered */
  background-color: transparent !important; /* Remove hover background */
}
/* Custom border-radius and default border color */
.custom-select {
  display: inline-block !important; /* Allow width to be determined by content */
  
}

.custom-select .ant-select-selector {
  width: auto !important; /* Set to auto so width depends on content */
  min-width: max-content !important; /* Ensures the select box fits the largest option */
  border-radius: 20px !important; 
  border: 1px solid #e3e3e3 !important; /* Default border color */
  background-color: white !important;
}

/* Border color when focused (active) */
.custom-select.ant-select-focused .ant-select-selector {
  border-color: #26a17b !important; /* Change border to green on focus */
  box-shadow: 0 0 0 2px rgba(38, 161, 123, 0.2); /* Optional shadow for focus */
}

/* Border color when open (active) */
.custom-select.ant-select-open .ant-select-selector {
  border-color: #26a17b !important; /* Change border to green when select is open */
}

/* Custom border-radius for the selected item */
.custom-select .ant-select-selection-item {
  border-radius: 20px !important; 
  color: #bebebe !important; /* Default text color */
  font-weight: normal;
  background-color: transparent !important; /* Remove background */
}

/* Customize the arrow container */
.custom-select .ant-select-arrow {
  border-radius: 20px !important; 
}

/* Change the text color of the selected option */
.custom-select .ant-select-item-option-selected {
  background-color: transparent !important; /* Remove background of the selected item */
  color: #26a17b !important; /* Change text color to green */
  font-weight: bold !important; /* Optional: Make selected option bold */
}

/* Change the text color of the options */
.custom-select .ant-select-item-option-content {
  color: #333333 !important; /* Default option text color */
  transition: color 0.3s ease-in-out; /* Smooth transition */
  white-space: nowrap !important; /* Prevent line break for large content */
}

/* Mouse hover: Change text color to green */
.custom-select .ant-select-item-option-active .ant-select-item-option-content {
  color: #26a17b !important; /* Change option text color to green */
  background-color: transparent !important; /* Remove background */
}

/* Reset to gray when mouse leaves */
.custom-select .ant-select-item-option:not(.ant-select-item-option-active) .ant-select-item-option-content {
  color: #bebebe !important; /* Reset option text color to gray */
}

/* Remove the default background of the selected option */
.custom-select .ant-select-item-option.ant-select-item-option-selected {
  background-color: transparent !important; 
  color: #26a17b !important; /* Change option text color to green */
}

/* Make the dropdown content width dependent on its largest option */
.custom-select .ant-select-dropdown {
  width: fit-content !important; 
  min-width: max-content !important; /* Set the minimum width of the dropdown */
}

.custom-select .ant-select-dropdown-menu {
  min-width: fit-content !important; /* Set minimum width for dropdown options */
  width: fit-content !important; 
}

/* Ensure each option takes up more width */
.custom-select .ant-select-item-option {
  width: fit-content !important; 
  min-width: fit-content !important; 
  display: flex !important;
  justify-content: flex-start !important; 
}

/* Ensure each option content is fully visible */
.custom-select .ant-select-item-option-content {
  width: fit-content !important;
  max-width: none !important; /* Remove max-width so content can be as wide as it needs */
  white-space: nowrap !important; 
  overflow: hidden !important; 
  text-overflow: ellipsis !important; /* If text is too long, show "..." */
  font-size: 6px !important;
}

@media (max-width: 375px) {
  .custom-select .ant-select-item-option-content  {
      font-size: 6px !important;
    }
  }

</style>