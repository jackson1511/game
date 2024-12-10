<script setup lang="ts">
defineProps<{
  activeCategory: string
}>()

const emit = defineEmits<{
  (e: 'category-change', category: string): void
}>()

const menuItems = [
  { key: 'hot', icon: 'public/icons/fire.avif', label: 'Hot', class: 'hot-bg' },
  { key: 'slot', icon: 'public/icons/777.avif', label: 'Slot', class: 'slot-bg' },
  { key: 'live', icon: 'public/icons/live.avif', label: 'Live', class: 'live-bg' },
  { key: 'fishing', icon: 'public/icons/fishing.avif', label: 'Fishing', class: 'fishing-bg' },
  { key: 'cards', icon: 'public/icons/cards.avif', label: 'Cards', class: 'cards-bg' },
  { key: 'lottery', icon: 'public/icons/lottery.avif', label: 'Lottery', class: 'lottery-bg' },
  {
    key: 'blockchain',
    icon: 'public/icons/blockchain.avif',
    label: 'Blockchain',
    class: 'blockchain-bg',
  },
  { key: 'sports', icon: 'public/icons/sports.avif', label: 'Sports', class: 'sports-bg' },
]
</script>

<template>
  <div class="sidebar">
    <div
      v-for="item in menuItems"
      :key="item.key"
      :class="['menu-item', item.class, { active: activeCategory === item.key }]"
      @click="emit('category-change', item.key)"
    >
      <a-image :src="item.icon" :width="40" :preview="false" />
      <div class="label">{{ item.label }}</div>
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  width: 80px;
  background: #f8f8f8;
  min-height: 100vh;
}

.menu-item {
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: flex-start;
  padding: 0 10px;
  font-size: 12px;
  color: #666;
  margin-bottom: 14px;
  border-radius: 8px;
  background: url('public/icons/light_sidebar_bg.avif') no-repeat center center;
  background-size: cover;
  cursor: pointer;
}

.menu-item.active,
.hot-bg.active {
  background: url('public/icons/dark_sidebar_bg.avif') no-repeat center center;
  color: white;
  background-size: cover;
}

.label {
  font-size: 12px;
  margin-left: 10px;
}
</style>
