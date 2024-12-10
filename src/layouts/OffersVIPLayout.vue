<template>
  <div class="app-layout">
    <div class="header-offer">
      <div class="back">
        <LeftOutlined />
      </div>
      <div class="offer-tab">
        <ul>
          <li class="active">Event</li>
          <li class="active">VIP</li>
          <li>Rebate</li>
          <li>Reward</li>
          <li>Interest</li>
          <li>History</li>
        </ul>
      </div>
    </div>
    <div class="main-container">
      <div class="sidebar">
        <div v-for="item in menuItems" :key="item.key" :class="['menu-item', item.class, { 'active': item.active }]">
          <div class="icon">{{ item.icon }}</div>
          <div class="label">{{ item.label }}</div>
        </div>
        <div class="button-history">
          <button>History</button>
        </div>
      </div>
      <div class="content">
        <div class="enent-image">
          <div v-for="img in eventImg" :key="img.img">
            <img :src="img.img" alt="Event Image">

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
  { img: 'https://cdntoos.hwylaws.com/active/ActiveImg9084108068785502.avif' },
  { img: 'https://cdntoos.hwylaws.com/active/ActiveImg21750270747601108.avif' },
]
import TheFooter from '@/components/layout/TheFooter.vue'
import {
  LeftOutlined,
} from '@ant-design/icons-vue'
</script>

<style scoped>
.app-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  /* Make the whole layout fit the viewport */
}

.header-offer {
  height: 60px;
  display: flex;
  width: 100%;
  position: fixed;
  /* Fixed header */
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  z-index: 10;
  padding: 0 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.header-offer .back {
  font-size: 20px;
  margin-left: -10px;
  flex: 0 0 8%;
  display: flex;
  justify-content: start;
  align-items: center;
  z-index: 1;
}

.header-offer .offer-tab {
  color: #666;
  margin-right: 120px;
  flex: 0 0 94%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow-x: scroll;
  white-space: nowrap;
}

.header-offer .offer-tab::-webkit-scrollbar {
  display: none;
}

.header-offer .offer-tab ul {
  display: flex;
  padding: 0;
  margin: 0;
  list-style-type: none;
}

.header-offer .offer-tab ul li {
  display: inline-block;
  padding: 10px;
  margin-right: 20px;
  cursor: pointer;
}

.header-offer .offer-tab ul li.active {
  color: #06c08b;
  position: relative;
}

.header-offer .offer-tab ul li.active::after {
  content: '';
  position: absolute;
  bottom: -12px;
  left: 20%;
  width: 60%;
  height: 2px;
  background-color: #06c08b;
}

.main-container {
  display: flex;
  flex: 1;
  margin-top: 60px;
  /* Push the content down to avoid overlap with the fixed header */
  overflow-y: auto;
  /* Allow the content to scroll vertically */
}

.sidebar {
  width: 130px;
  background: #f8f8f8;
  min-height: 100vh;
}

.menu-item {
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  color: #666;
  background: white;
  margin: 15px;
  border-radius: 8px;
  padding: 0 10px;
  transition: background 0.3s;
  background-image: url('@/assets/images/btn_zc_white.avif');
}

.sidebar .active {
  background-image: url('@/assets/images/btn_zc_green.avif');
  background-size: cover;
  background-position: center;
  color: white;
}

.icon {
  font-size: 24px;
  margin-bottom: 4px;
}

.label {
  font-size: 12px;
  margin-right: 10px;
}

.sidebar .button-history {
  margin-left: 25px;
  margin-right: 25px;
  background-image: url('@/assets/images/btn_zc_green.avif');
}

.sidebar .button-history button {
  padding: 10px;
  color: #fff;
  border-radius: 5px;
  /* Adds the border radius to the button */
  border: none;
  /* Optional: removes the default button border */
  cursor: pointer;
  /* Optional: changes the cursor to a pointer on hover */
}

.sidebar .button-history button:hover {
  background-color: #05a36b;
  /* Optional: adds a hover effect for better interactivity */
}
.enent-image{
  margin-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
}
.event-image img:first-of-type {
  margin-top: 10px; /* Apply a different margin-top to the first image */
}
.enent-image img{
  margin-top: 15px;
}
/* Footer */
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  z-index: 10;
  padding: 10px;
  text-align: center;
}
</style>
