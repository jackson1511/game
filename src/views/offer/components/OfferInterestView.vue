<template>
  <div class="flex flex-col h-screen font-sans">
    
    <!-- Main Content -->
    <div class="flex flex-1 bg-[#F8F8F8]">
      <div class="flex-1 bg-[#FFFFFF] px-4">
        <!-- Section 1 -->
        <section class="mt-5">
          <div class="flex">
            <!-- Left Column -->
            <div class="w-[60%] text-xs  iphone6:text-[10px] space-y-2">
              <p class="text-gray-400 ">
                Deposited <span class="text-black text-lg iphone6:text-xs">0.00</span>
              </p>
              <p class="text-gray-400 iphone6:text-[10px]">
                Settlement cycle <span class="text-black">1 hour</span> <span>(Max</span> <span
                  class="text-black">Unlimited)</span>
              </p>
              <p class="text-gray-400">
                Reward <span class="text-buttonColorYellow font-bold">0.000</span> <span>(Claimed 0.00)</span>
              </p>
            </div>

            <!-- Right Column -->
            <div class="w-[40%] space-y-2">
              <div class="flex justify-between">
                <button
                  class="bg-buttonColorYellow text-white py-2 px-4 rounded-lg hover:bg-buttonColorYellow w-[45%] h-8 text-xs iphone6:text-[10px]">Deposit</button>
                <button
                  class="bg-buttonColorGray cursor-not-allowed text-white iphone6:px-2 py-2 px-4 rounded-lg w-[45%] h-8 text-xs iphone6:text-[10px]">Withdraw</button>
              </div>
              <div class="flex justify-end">
                <button
                  class="bg-buttonColorGray cursor-not-allowed text-white py-2 px-4 rounded-lg w-[45%] h-8 text-xs iphone6:text-[10px]">Claim</button>
              </div>
            </div>
          </div>
        </section>

        <!-- Tab Section -->
        <section class="flex-1 mt-2 overflow-hidden">
          <a-tabs v-model="activeKey" class="w-full h-full custom-tabs">
            <a-tab-pane key="1" tab="Record detail" class="w-full h-full p-0">
              <RecordDetailView />
            </a-tab-pane>

            <a-tab-pane key="2" tab="Interest rules" class="w-full h-full p-0">
              <InterestRuleView />
            </a-tab-pane>
          </a-tabs>
        </section>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import RecordDetailView from '@/components/offer/RecordDetailView.vue';
import InterestRuleView from '@/components/offer/InterestRuleView.vue';

const activeKey = ref('1');
</script>

<style scoped>
/* Custom Style for Full-Width and Full-Height Tabs */
.custom-tabs {
  width: 100% !important;
  height: 100% !important;
  display: flex;
  flex-direction: column;
}

.custom-tabs .ant-tabs-content-holder {
  width: 100% !important;
  height: 100% !important;
  display: flex !important;
}

.custom-tabs .ant-tabs-content {
  width: 100% !important;
  height: 100% !important;
}

.custom-tabs .ant-tabs-tab {
  width: auto !important;
  flex-grow: 1;
  justify-content: center;
}

.custom-tabs .ant-tabs-tab-btn {
  text-align: center;
}

.custom-tabs .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
  color: #26a17b !important;
  font-weight: normal !important;
  font-size: 12px !important;
}

.custom-tabs .ant-tabs-ink-bar {
  background-color: #10b981;
}

.a-tab-pane {
  width: 100% !important;
  height: 100% !important;
  padding: 0 !important;
  overflow: hidden;
}

.custom-tabs .ant-tabs-tab.ant-tabs-tab {
  color: #333333 !important;
  font-weight: normal !important;
  font-size: 12px !important;
}
</style>

<style>
@media (max-height: 667px) {
  .active-header::after {
    top: 170%;
  }
}
</style>
