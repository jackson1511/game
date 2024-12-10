<template>
  <div class="flex flex-col h-screen font-sans">
    <!-- Header Section -->
    <div
      class="fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-[530px] z-50 bg-white border-b border-gray-200">
      <div class="flex h-[7vh]">
        <!-- Back Button -->
        <div class="w-[11%] flex items-center justify-center">
          <RouterLink to="/">
            <LeftOutlined class="text-lg" />
          </RouterLink>
        </div>

        <!-- Navigation Tabs -->
        <div class="w-[89%] overflow-x-auto overflow-y-hidden h-[7vh] scroll-px-4 [&::-webkit-scrollbar]:hidden">
          <ul class="flex space-x-10 items-center h-full text-[15.5px] text-gray-400 min-w-max">
            <li class="flex-shrink-0">
              <RouterLink to="/offer">Event</RouterLink>
            </li>
            <li class="flex-shrink-0">
              <RouterLink to="/offer-vip">VIP</RouterLink>
            </li>
            <li class="flex-shrink-0">
              <RouterLink to="/offer-rebate">Rebate</RouterLink>
            </li>
            <li class="flex-shrink-0">
              <RouterLink to="/offer-reward">Reward</RouterLink>
            </li>
            <li class="active-header flex-shrink-0">
              <RouterLink to="/offer-interest">Interest</RouterLink>
            </li>
            <li class="flex-shrink-0">
              <RouterLink to="/offer-history">History</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex flex-1 mt-[7vh] bg-[#F8F8F8]">
      <div class="flex-1 bg-[#FFFFFF] px-4">
        <!-- Section 1 -->
        <section class="mt-5 ">
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
            <div class="w-[40%]  space-y-2">
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
        <section>
          <a-tabs v-model="activeKey" class="mt-2 iphone6:text-[12px] custom-tabs">
            <a-tab-pane key="1" tab="Record detail">
              <RecordDetailView />
            </a-tab-pane>

            <a-tab-pane key="2" tab="Interest rules">
              <InterestRuleView />
            </a-tab-pane>
          </a-tabs>
        </section>
      </div>
    </div>

    <!-- Footer -->
    <TheFooter />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import TheFooter from '@/components/layout/TheFooter.vue';
import RecordDetailView from '@/components/offer/RecordDetailView.vue';
import InterestRuleView from '@/components/offer/InterestRuleView.vue';
import { LeftOutlined } from '@ant-design/icons-vue';

const activeKey = ref('1');
</script>
<style>
.active-header {
  color: #06c08b;
  position: relative;
  /* This keeps ::after relative to the parent li */
}

.active-header::after {
  content: '';
  position: absolute;
  top: 215%;
  bottom: 0;
  /* Positions the line below the tab */
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #06c08b;

}

.custom-tabs .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
  color: #26a17b !important;
  /* Green color */
  font-weight: normal !important;
  /* Set font-weight to normal */
  font-size: 12px !important;
}

.custom-tabs .ant-tabs-tab.ant-tabs-tab {
  color: #333333 !important;
  /* Green color */
  font-weight: normal !important;
  /* Set font-weight to normal */
  font-size: 12px !important;
}

.custom-tabs .ant-tabs-ink-bar {
  background-color: #10b981;
  /* Tailwind Green-500 */
}
</style>
<style>
@media (max-height: 667px) {

  .active-header::after {
  top: 170%;
}
}
</style>