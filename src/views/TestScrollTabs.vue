<template>
  <div class="test-container">
    <h2>Tabs with Back Button and Right Extra</h2>
    <ScrollTabs :tabs="navigationTabs" :show-back-button="true">
      <template #rightExtra>
        <div class="header-icons">
          <a href="#" class="support-icon">
            <ion-icon name="headset-outline" size="large" style="color: #26a17b"></ion-icon>
          </a>
          <a href="#" class="records-icon">
            <ion-icon name="time-outline" size="large" style="color: #26a17b"></ion-icon>
          </a>
        </div>
      </template>

      <template #missions>
        <div class="tab-content">
          <h3>Betting Missions Content</h3>
        </div>
      </template>
      <template #account>
        <div class="tab-content">
          <h3>Receiving Account Content</h3>
        </div>
      </template>
      <template #records>
        <div class="tab-content">
          <h3>Withdrawal Records Content</h3>
        </div>
      </template>
    </ScrollTabs>

    <h2 class="mt-8">Basic Tabs Example</h2>
    <ScrollTabs :tabs="basicTabs">
      <template #tab1>
        <div class="tab-content">
          <h3>Tab 1 Content</h3>
          <p>This is the content for tab 1</p>
        </div>
      </template>
      <template #tab2>
        <div class="tab-content">
          <h3>Tab 2 Content</h3>
          <p>This is the content for tab 2</p>
        </div>
      </template>
      <template #tab3>
        <div class="tab-content">
          <h3>Tab 3 Content</h3>
          <p>This is the content for tab 3</p>
        </div>
      </template>
    </ScrollTabs>

    <h2 class="mt-8">Many Tabs Example (Scrollable)</h2>
    <ScrollTabs :tabs="manyTabs">
      <template v-for="tab in manyTabs" :key="tab.key" #[tab.key]>
        <div class="tab-content">
          <h3>{{ tab.label }} Content</h3>
          <p>This is the content for {{ tab.label.toLowerCase() }}</p>
        </div>
      </template>
    </ScrollTabs>

    <h2 class="mt-8">Custom Content Example</h2>
    <ScrollTabs :tabs="customTabs">
      <template #events>
        <div class="tab-content">
          <div class="event-card">
            <h4>Current Event</h4>
            <p>Special bonus: 100 USDT</p>
            <button class="claim-btn">Claim Now</button>
          </div>
        </div>
      </template>
      <template #rewards>
        <div class="tab-content">
          <div class="rewards-list">
            <div class="reward-item">
              <span>Daily Bonus</span>
              <button class="claim-btn">Claim</button>
            </div>
            <div class="reward-item">
              <span>Weekly Bonus</span>
              <button class="claim-btn">Claim</button>
            </div>
          </div>
        </div>
      </template>
      <template #vip>
        <div class="tab-content">
          <div class="vip-status">
            <h4>Current Level: VIP 2</h4>
            <div class="progress-bar">
              <div class="progress" style="width: 60%"></div>
            </div>
            <p>Progress to VIP 3: 60%</p>
          </div>
        </div>
      </template>
    </ScrollTabs>
  </div>
</template>

<script setup lang="ts">
import ScrollTabs from '@/components/common/ScrollTabs.vue'

const navigationTabs = [
  { key: 'missions', label: 'Betting missions' },
  { key: 'account', label: 'Receiving account' },
  { key: 'records', label: 'Withdrawal Records' },
]

const basicTabs = [
  { key: 'tab1', label: 'Tab 1' },
  { key: 'tab2', label: 'Tab 2' },
  { key: 'tab3', label: 'Tab 3' },
]

const manyTabs = [
  { key: 'event', label: 'Event' },
  { key: 'vip', label: 'VIP' },
  { key: 'rebate', label: 'Rebate' },
  { key: 'reward', label: 'Reward' },
  { key: 'interest', label: 'Interest' },
  { key: 'history', label: 'History' },
  { key: 'settings', label: 'Settings' },
]

const customTabs = [
  { key: 'events', label: 'Events' },
  { key: 'rewards', label: 'Rewards' },
  { key: 'vip', label: 'VIP Status' },
]
</script>

<style scoped>
.test-container {
  max-width: 800px;
  margin: 20px auto;
  padding: 0 16px;
}

.tab-content {
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  margin-top: 16px;
}

h2 {
  margin-bottom: 20px;
  color: #333;
}

.event-card {
  background: #f5f5f5;
  padding: 16px;
  border-radius: 8px;
}

.claim-btn {
  background: #26a17b;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 8px;
}

.claim-btn:hover {
  background: #1e8a66;
}

.rewards-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.reward-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background: #f5f5f5;
  border-radius: 8px;
}

.vip-status {
  text-align: center;
}

.progress-bar {
  width: 100%;
  height: 8px;
  background: #eee;
  border-radius: 4px;
  margin: 12px 0;
  overflow: hidden;
}

.progress {
  height: 100%;
  background: #26a17b;
  border-radius: 4px;
}

.mt-8 {
  margin-top: 32px;
}

.header-icons {
  display: flex;
  gap: 12px;
  align-items: center;
}

.support-icon,
.records-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  cursor: pointer;
}
</style>
