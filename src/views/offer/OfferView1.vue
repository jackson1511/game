<template>
  <div class="flex flex-col h-screen font-sans">
    <!-- Header Section -->
    <div
      class="fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-[530px] z-50 bg-white border-b border-gray-200">
      <div class="flex h-[7vh]">
        <!-- Back Icon -->
        <div class="w-[11%] flex items-center justify-center">
          <RouterLink to="/">
            <LeftOutlined class="text-lg" />
          </RouterLink>
        </div>

        <!-- Navigation Links -->
        <div class="w-[89%] h-[7vh] overflow-x-auto overflow-y-hidden scroll-px-4 [&::-webkit-scrollbar]:hidden">
          <ul class="flex space-x-11 items-center h-full text-gray-400 text-sm">
            <li class="active-header flex-shrink-0">
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

    <!-- Main Content Section -->
    <div class="flex flex-1 mt-[7vh] overflow-y-auto bg-[#F8F8F8]">
      <!-- Sidebar -->
      <div class="w-[100px] sm:w-[130px] min-h-screen mt-4">
        <div v-for="item in menuItems" :key="item.key"
          :class="['flex items-center justify-around h-12 my-2 mx-2 sm:mx-3 p-2 rounded-lg bg-white transition duration-300', item.class, { 'bg-green-500 text-white': item.active }]"
          :style="item.active
            ? {
              backgroundImage: `url(${btnZcGreen})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }
            : {
              backgroundImage: `url(${btnZcWhite}))`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }">
          <div class="text-base sm:text-xl">{{ item.icon }}</div>
          <div class="text-xs sm:text-sm">{{ t(item.label) }}</div>
        </div>

        <div class="flex justify-center mt-5">
          <button class="bg-buttonColorGreen hover:bg-blue-700 text-white text-xs h-8 sm:h-9 w-16 sm:w-20 rounded-lg">

            {{ t('History') }}
          </button>
        </div>
      </div>

      <!-- Content -->
      <div class="flex-1 p-2 sm:p-4">
        <div class="grid gap-3 sm:gap-4">
          <div v-for="img in eventImg" :key="img.img">
            <img :src="img.img" alt="Event Image" class="w-full rounded-lg shadow-sm">
          </div>
        </div>
      </div>
    </div>


    <!-- Footer -->
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
import btnZcGreen from '@/assets/images/btn_zc_green.avif';
import btnZcWhite from '@/assets/images/btn_zc_white.avif';

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
  { img: 'https://cdntoos.hwylaws.com/active/ActiveImg9084108068785502.avif' },
  { img: 'https://cdntoos.hwylaws.com/active/ActiveImg21750270747601108.avif' },
]
import TheFooter from '@/components/layout/TheFooter.vue'
import { LeftOutlined } from '@ant-design/icons-vue'

</script>
<style>
.active-header {
  color: #06c08b;
  position: relative;
  /* This makes the pseudo-element relative to this container */
}

.active-header::after {
  content: '';
  position: absolute;
  /* Absolute position relative to the parent (li) */
  top: 195%;
  bottom: 0;
  /* Position it at the bottom of the li */
  left: 0;
  /* Starts from the left of the li */
  width: 100%;
  /* Full width of the li */
  height: 2px;
  /* Thickness of the line */
  background-color: #06c08b;
  /* Line color */
  transition: all 0.3s ease-in-out;
  /* Smooth transition when active header changes */
}
</style>

<style>
@media (max-height: 667px) {

  .active-header::after {
  top: 160%;
}
}
</style>
