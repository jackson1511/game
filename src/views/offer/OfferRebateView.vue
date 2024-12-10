<template>
  <div class="flex flex-col h-screen font-sans text-gray-400">
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
            <li class="active-header flex-shrink-0">
              <RouterLink to="/offer-rebate">Rebate</RouterLink>
            </li>
            <li class=" flex-shrink-0">
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
    <section class=" mt-[7vh] p-4 text-xs">
      Available today <span class=" text-yellow-500">0.00</span>
    </section>

    <div class="flex flex-1 bg-[#F8F8F8]">
      <!-- Sidebar -->
      <div class="w-[90px] sm:w-[130px] -mt-4 min-h-screen">
        <!-- Menu Items -->
        <div v-for="item in menuItems" :key="item.key"
          :class="['flex items-center justify-around h-10 sm:h-12 my-2 sm:my-4 mx-2 sm:mx-3 p-1 sm:p-2 rounded-lg bg-white transition duration-300', item.class, { 'bg-green-500 text-white': item.active }]"
          :style="item.active ? {
            backgroundImage: `url(${btnZcGreen})`,
            backgroundSize: 'cover', backgroundPosition: 'center'
          } : {
            backgroundImage: `url(${btnZcWhite})`,
            backgroundSize: 'cover', backgroundPosition: 'center'
          }">


          <div class="text-sm sm:text-xl">{{ item.icon }}</div>
          <div class="text-[10px] sm:text-sm">{{ item.label }}</div>
        </div>

        <!-- Receive Button -->
        <div class="flex justify-center mt-3 sm:mt-4">
          <button
            class="bg-gray-500 hover:bg-blue-700 text-white text-[10px] sm:text-xs h-8 sm:h-9 w-16 sm:w-20 rounded-lg">
            Receive
          </button>
        </div>

        <!-- History Button -->
        <div class="flex justify-center mt-4 sm:mt-5">
          <button
            class="bg-green-700 hover:bg-blue-700 text-white text-[10px] sm:text-xs h-8 sm:h-9 w-16 sm:w-20 rounded-lg">
            History
          </button>
        </div>
      </div>


      <!-- Main Content -->
      <div class="flex-1 pr-2  bg-[#F8F8F8]">
        <div class="space-y-4 iphone6:space-y-2 ">
          <div v-for="img in eventImg" :key="img.img">
            <div class="flex bg-white items-center p-4 iphone6:p-2 rounded-lg shadow-md gap-4 iphone6:gap-2 ">
              <!-- Column 1 (60%) -->
              <div class="w-[60%] sm:flex-1">
                <div class="flex items-center text-gray-400">
                  <img :src="img.img" alt="Event Image" class="w-8 h-8 mr-2">
                  <span class="text-xs iphone6:text-[11px]">Valid Bets: 0.00</span>
                </div>
                <div class="bg-gray-300 h-4 text-white text-center text-xs   rounded-lg mt-2 iphone6:text-[10px] ">
                  Bet 1 to receive 0.8%
                </div>
              </div>

              <!-- Column 2 (30%) -->
              <div class="w-[30%] iphone6:w-[33%] ">
                <div class="text-xs text-gray-400 iphone6:text-[10px]">
                  Rebate Rate <span>0%</span>
                </div>
                <div class="text-xs text-gray-400 mt-2 iphone6:text-[10px]">
                  Collectable <span>0.00</span>
                </div>
              </div>

              <!-- Column 3 (10%) -->
              <div class="w-[10%]  iphone6:w-[7%] sm:w-auto">
                <RouterLink to="/offer-rebate-rate">
                  <RightOutlined class="text-lg text-gray-300" />
                </RouterLink>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

    <TheFooter />
  </div>
</template>
<script setup lang="ts">
const menuItems = [
  { key: 'hot', icon: '🔥', label: 'Hot', class: 'hot-bg', active: true },
  { key: 'slot', icon: '777', label: 'Slot', class: 'slot-bg', active: false },
  { key: 'live', icon: '👤', label: 'Live', class: 'live-bg', active: false },
  { key: 'fishing', icon: '🎣', label: 'Fishing', class: 'fishing-bg', active: false },
  { key: 'cards', icon: '🃏', label: 'Cards', class: 'cards-bg', active: false },
  { key: 'lottery', icon: '🎲', label: 'Lottery', class: 'lottery-bg', active: false },
  { key: 'blockchain', icon: '🔗', label: 'Blockchain', class: 'blockchain-bg', active: false },
  { key: 'sports', icon: '⚽', label: 'Sports', class: 'sports-bg', active: false },
]

const eventImg = [
  { img: 'https://cdntoos.hwylaws.com/cocos/icon/0/200_N_PG_LOGO.png' },
  { img: 'https://cdntoos.hwylaws.com/cocos/icon/0/3_N_CQ9_LOGO.png?t=1681877365&swRuntimeCacheName=web-lobby-runtime' },
]

import TheFooter from '@/components/layout/TheFooter.vue'
import { LeftOutlined, RightOutlined } from '@ant-design/icons-vue'
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
</style>
<style>
@media (max-height: 667px) {

  .active-header::after {
  top: 160%;
}
}
</style>
