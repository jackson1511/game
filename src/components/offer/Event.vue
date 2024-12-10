<script setup lang="ts">
import { ref } from 'vue'

const activeTab = ref('hot')

const menuItems = ref([
  { key: 'all', icon: '🔥', label: 'All', active: true, class: 'hot-bg' },
  { key: 'cards', icon: '777', label: 'Cards', class: 'slot-bg' },
  { key: 'fishing', icon: '👤', label: 'Fishing', class: 'live-bg' },
  { key: 'slot', icon: '🎣', label: 'Slot', class: 'fishing-bg' },
])
</script>

<template>
  <div class="main-container">
    <div class="sidebar">

      <div v-for="item in menuItems" :key="item.key" :class="['menu-item', item.class, { active: item.active }]">
        <div class="icon">{{ item.icon }}</div>
        <div class="label">{{ item.label }}</div>
      </div>
    </div>
    <div class="content">
      dfds
    </div>
  </div>

</template>

<style scoped>
.home {
  background: #f5f5f5;
}

.top-info {
  padding: 12px;
  background: white;
}

.vip-info {
  display: flex;
  align-items: center;
  gap: 8px;
}

.vip-tag {
  background: #ffd700;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
}

.balance-info {
  margin-top: 8px;
  font-size: 20px;
  display: flex;
  align-items: center;
  gap: 4px;
}

.quick-actions {
  display: flex;
  justify-content: space-between;
  padding: 12px;
  background: white;
  border-top: 1px solid #eee;
}

.action {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #65b687;
  font-size: 12px;
}

.hot-section {
  background: #4caf50;
  color: white;
  padding: 12px;
  display: flex;
  justify-content: space-between;
}

.tabs {
  display: flex;
  background: white;
  border-bottom: 1px solid #eee;
}

.tab-item {
  padding: 12px 24px;
  color: #666;
}

.tab-item.active {
  color: #65b687;
  border-bottom: 2px solid #65b687;
}

.provider-tabs {
  padding: 12px;
  display: flex;
  gap: 8px;
  background: white;
}

.provider {
  padding: 4px 16px;
  border-radius: 4px;
  background: #f5f5f5;
}

.provider.active {
  background: #65b687;
  color: white;
}

.game-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  padding: 12px;
  background: white;
}

.game-card {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
}

.game-card img {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
}

.provider-tag {
  position: absolute;
  bottom: 8px;
  right: 8px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 12px;
}

.game-title {
  text-align: center;
  font-size: 12px;
  margin-top: 4px;
}


.sidebar {
  width: 100px;
  background: #f8f8f8;
  min-height: 800vh;
}

.menu-item {
  height: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: #666;
  background: white;
  margin: 4px;
  border-radius: 8px;
}

.menu-item.active {
  background: #4caf50;
  color: white;
}

.hot-bg.active {
  background: #4caf50;
}

.icon {
  font-size: 24px;
  margin-bottom: 4px;
}

.label {
  font-size: 12px;
}
</style>
