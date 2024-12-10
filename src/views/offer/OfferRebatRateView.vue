<template>
  <div class="flex flex-col h-screen font-sans">
    <!-- Header -->
    <div class="fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-[530px] z-50 bg-white border-b border-gray-200">
      <div class="flex h-[7vh]">
        <!-- Back Button -->
        <div class="w-[11%] flex items-center justify-center">
          <RouterLink to="/">
            <LeftOutlined class="text-lg"/>
          </RouterLink>
        </div>

        <!-- Title Section -->
        <div class="w-[89%] flex items-center justify-center overflow-hidden">
          <div class="text-center text-lg text-gray-500">
            Rebate Rate
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex-1 mt-[8vh] bg-[#F8F8F8] overflow-y-auto">
      <div class="px-4">
        <div class="w-full">
          <div class="flex items-center justify-between">
            <!-- Select Options -->
            <div class="flex space-x-4 text-gray-400">
              <a-select ref="select" v-model:value="value1" class="w-28" @focus="focus" @change="handleChange">
                  <a-select-option value="today">Today</a-select-option>
                  <a-select-option value="yesterday">Yesterday</a-select-option>
                  <a-select-option value="last7Days">Last 7 Days</a-select-option>
                  <a-select-option value="last15Days">Last 15 Days</a-select-option>
                  <a-select-option value="last30Days">Last 30 Days</a-select-option>
                </a-select>

                <a-select class="w-28 rounded-lg" ref="select" v-model:value="value2" @focus="focus"
                  @change="handleChange">
                  <a-select-option value="all">All</a-select-option>
                  <a-select-option value="deposit">Deposit</a-select-option>
                  <a-select-option value="withdraw">Withdraw</a-select-option>
                  <a-select-option value="claimEarnings">Claim Earnings</a-select-option>
                </a-select>
            </div>

            <!-- Total Rebate Section -->
            <p class="text-md text-gray-400">
              Total Rebate
            </p>
            <p class="text-md text-gray-400">
              Rebate Rate
            </p>
          </div>

          <!-- Table Section -->
          <div class="overflow-x-auto max-h-[750px] overflow-y-auto mt-4">
            <table class="w-full table-auto border-collapse">
              <!-- Table Body -->
              <tbody v-if="levels && levels.length > 0">
                <tr v-for="(level, index) in levels" :key="index" 
                    :class="['text-gray-400', index % 2 === 0 ? 'bg-white' : 'bg-gray-100']">
                  <td class="px-2 py-2 text-center">
                    {{ level.gameType }}
                  </td>
                  <td class="px-2 py-2 text-center">
                    {{ level.gameName }}
                  </td>
                  <td class="px-2 py-2 text-center text-yellow-500">
                    {{ level.totalRebat }}
                  </td>
                  <td class="px-2 py-2 text-center text-yellow-500">
                    {{ level.rebatRate }}
                  </td>
                </tr>
              </tbody>

              <!-- No Record Section -->
              <tbody v-if="!levels || levels.length === 0">
                <tr>
                  <td colspan="4" class="py-10">
                    <div class="flex flex-col items-center">
                      <img src="https://cdntoos.hwylaws.cc/siteadmin/skin/lobby_asset/1-0-common/common/common/img_none_sj.avif?manualVersion=1&version=737e849f8e" 
                        alt="No Record" class="w-32 h-32 mt-20" />
                      <p class="text-gray-400">No Record</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <TheFooter />
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { LeftOutlined } from '@ant-design/icons-vue';

const value1 = ref('today');
const value2 = ref('all');

const focus = () => {
  console.log('focus');
};

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const levels = [
  { level: 3, gameType: 'Slot', gameName: 'PG', totalRebat: '1', rebatRate: "1%" },
  { level: 2, gameType: 'Slot', gameName: 'PG', totalRebat: '2', rebatRate: "1%" },
  { level: 3, gameType: 'Slot', gameName: 'PG', totalRebat: '3', rebatRate: "1%" },
  { level: 2, gameType: 'Slot', gameName: 'PG', totalRebat: '>1000+', rebatRate: "1%" },
  { level: 3, gameType: 'Slot', gameName: 'PG', totalRebat: '1', rebatRate: "1%" },
  { level: 2, gameType: 'Slot', gameName: 'PG', totalRebat: '2', rebatRate: "1%" },
  { level: 3, gameType: 'Slot', gameName: 'PG', totalRebat: '3', rebatRate: "1%" },
  { level: 2, gameType: 'Slot', gameName: 'PG', totalRebat: '>1000+', rebatRate: "1%" },
  { level: 3, gameType: 'Slot', gameName: 'PG', totalRebat: '1', rebatRate: "1%" },
  { level: 2, gameType: 'Slot', gameName: 'PG', totalRebat: '2', rebatRate: "1%" },
  { level: 3, gameType: 'Slot', gameName: 'PG', totalRebat: '3', rebatRate: "1%" },
  { level: 2, gameType: 'Slot', gameName: 'PG', totalRebat: '>1000+', rebatRate: "1%" },
  { level: 3, gameType: 'Slot', gameName: 'PG', totalRebat: '1', rebatRate: "1%" },
  { level: 2, gameType: 'Slot', gameName: 'PG', totalRebat: '2', rebatRate: "1%" },
  { level: 3, gameType: 'Slot', gameName: 'PG', totalRebat: '3', rebatRate: "1%" },
  { level: 2, gameType: 'Slot', gameName: 'PG', totalRebat: '>1000+', rebatRate: "1%" },
  { level: 3, gameType: 'Slot', gameName: 'PG', totalRebat: '1', rebatRate: "1%" },
  { level: 2, gameType: 'Slot', gameName: 'PG', totalRebat: '2', rebatRate: "1%" },
  { level: 3, gameType: 'Slot', gameName: 'PG', totalRebat: '3', rebatRate: "1%" },
  { level: 2, gameType: 'Slot', gameName: 'PG', totalRebat: '>1000+', rebatRate: "1%" },
  { level: 3, gameType: 'Slot', gameName: 'PG', totalRebat: '1', rebatRate: "1%" },
  { level: 2, gameType: 'Slot', gameName: 'PG', totalRebat: '2', rebatRate: "1%" },
  { level: 3, gameType: 'Slot', gameName: 'PG', totalRebat: '3', rebatRate: "1%" },
  { level: 2, gameType: 'Slot', gameName: 'PG', totalRebat: '>1000+', rebatRate: "1%" },
  { level: 3, gameType: 'Slot', gameName: 'PG', totalRebat: '1', rebatRate: "1%" },
  { level: 2, gameType: 'Slot', gameName: 'PG', totalRebat: '2', rebatRate: "1%" },
  { level: 3, gameType: 'Slot', gameName: 'PG', totalRebat: '3', rebatRate: "1%" },
  { level: 2, gameType: 'Slot', gameName: 'PG', totalRebat: '>1000+', rebatRate: "1%" },
  { level: 3, gameType: 'Slot', gameName: 'PG', totalRebat: '1', rebatRate: "1%" },
  { level: 2, gameType: 'Slot', gameName: 'PG', totalRebat: '2', rebatRate: "1%" },
  { level: 3, gameType: 'Slot', gameName: 'PG', totalRebat: '3', rebatRate: "1%" },
  { level: 2, gameType: 'Slot', gameName: 'PG', totalRebat: '>1000+', rebatRate: "1%" },
  { level: 3, gameType: 'Slot', gameName: 'PG', totalRebat: '1', rebatRate: "1%" },
  { level: 2, gameType: 'Slot', gameName: 'PG', totalRebat: '2', rebatRate: "1%" },
  { level: 3, gameType: 'Slot', gameName: 'PG', totalRebat: '3', rebatRate: "1%" },
  { level: 2, gameType: 'Slot', gameName: 'PG', totalRebat: '>1000+', rebatRate: "1%" },
  { level: 3, gameType: 'Slot', gameName: 'PG', totalRebat: '1', rebatRate: "1%" },
  { level: 2, gameType: 'Slot', gameName: 'PG', totalRebat: '2', rebatRate: "1%" },
  { level: 3, gameType: 'Slot', gameName: 'PG', totalRebat: '3', rebatRate: "1%" },
  { level: 2, gameType: 'Slot', gameName: 'PG', totalRebat: '>1000+', rebatRate: "1%" },

];
</script>
