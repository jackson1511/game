<template>
  <div class="flex flex-col h-screen font-sans text-gray-400">
    <!-- Header Section -->
    <div class="fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-[530px] z-50 bg-white border-b border-gray-200">
      <div class="flex h-[7vh]">
        <!-- Back Button -->
        <div class="w-[11%] flex items-center justify-center">
          <RouterLink to="/">
            <LeftOutlined class="text-lg"/>
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
            <li class="active-header flex-shrink-0">
              <RouterLink to="/offer-reward">Reward</RouterLink>
            </li>
            <li class="flex-shrink-0">
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
      <div class="flex-1 p-4">
        <!-- Balance Section -->
        <section>
          <div class="flex justify-between iphone6:text-xs">
            <div class="flex items-center gap-2 border border-amber-500 rounded-full p-2 h-6">
              <img src="/public/icons/usdt.avif" alt="USDT Icon" class="w-5 h-5">
              <span class="text-amber-500 font-semibold underline">0.00</span>
              <SyncOutlined class="text-green-600 rotate-[120deg]" />
            </div>
            <div class=" text-gray-500 h-6 text-md">
              Current Active Level 
              <ThunderboltFilled class="text-green-500" />
              <span class="text-green-500">0</span> 
            </div>
          </div>
        </section>

        <!-- No Record Section -->
        <div class="flex items-center justify-center mt-20">
          <div class="grid place-items-center">
            <img src="https://cdntoos.hwylaws.cc/siteadmin/skin/lobby_asset/1-0-common/common/common/img_none_sj.avif" 
                 alt="No Record Image" 
                 class="w-32 h-32">
            <p class="text-gray-400">No Record</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <TheFooter />
  </div>
</template>
<script setup lang="ts">
import btnZcGreen from '@/assets/images/btn_zc_green.avif';
import btnZcWhite from '@/assets/images/btn_zc_white.avif';
import { ref } from 'vue';
import TheFooter from '@/components/layout/TheFooter.vue';
import PromotionBonusView from '@/components/offer/PromotionBonus.vue';
import WeeklyBonusView from '@/components/offer/WeeklyBonus.vue';
import MonthlyBonusView from '@/components/offer/MonthlyBonusView.vue';
import VIPPrivilegeView from '@/components/offer/VIPPrivilegeView.vue';

import { LeftOutlined, SyncOutlined, ThunderboltFilled } from '@ant-design/icons-vue';

const activeKey = ref('1');
</script>

<style scoped>

.active-header {
  color: #06c08b;
  position: relative;
  /* This keeps ::after relative to the parent li */
}

.active-header::after {
  content: '';
  position: absolute;
  top:215%;
  bottom: 0;
  /* Positions the line below the tab */
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #06c08b;

}

</style>
<style>
@media (max-height: 667px) {

  .active-header::after {
  top: 100%;
}
}
</style>
