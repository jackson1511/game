<template>
  <div class="flex flex-col h-screen font-sans">
    <!-- Tabs Section -->
    <a-tabs 
      v-model:activeKey="activeKey" 
      :tab-position="mode" 
      class="w-full h-full flex flex-col"
    >
      <!-- Back Icon -->
      <template #leftExtra>
        <RouterLink to="/">
          <LeftOutlined class="text-lg px-5" />
        </RouterLink>
      </template>

      <!-- Tab Panes -->
      <a-tab-pane 
        key="1" 
        tab="Event" 
        class="w-full h-full"
      >
        <div class="pane-content">
          <OfferEventView/>
        </div>
      </a-tab-pane>

      <a-tab-pane 
        key="2" 
        tab="VIP" 
        class="w-full h-full"
      >
        <div class="pane-content">
          <OfferVipView/>
        </div>
      </a-tab-pane>

      <a-tab-pane 
        key="3" 
        tab="Rebate" 
        class="w-full h-full"
      >
        <div class="pane-content">
          <OfferRebateView/>
        </div>
      </a-tab-pane>

      <a-tab-pane 
        key="4" 
        tab="Reward" 
        class="w-full h-full"
      >
        <div class="pane-content">
          <OfferRewardView/>
        </div>
      </a-tab-pane>

      <a-tab-pane 
        key="5" 
        tab="Interest" 
        class="w-full h-full"
      >
        <div class="pane-content">
          <OfferInterestView/>
        </div>
      </a-tab-pane>

      <a-tab-pane 
        key="6" 
        tab="History" 
        class="w-full h-full"
      >
        <div class="pane-content">
          <OfferHistoryView/>
        </div>
      </a-tab-pane>
      
    

    </a-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { LeftOutlined } from '@ant-design/icons-vue'
import { RouterLink } from 'vue-router'
import OfferEventView from '@/views/offer/components/OfferEventView.vue';
import OfferVipView from '@/views/offer/components/OfferVipView.vue';
import OfferRebateView from '@/views/offer/components/OfferRebateView.vue';
import OfferRewardView from '@/views/offer/components/OfferRewardView.vue';
import OfferInterestView from '@/views/offer/components/OfferInterestView.vue';
import OfferHistoryView from '@/views/offer/components/OfferHistoryView.vue';
const activeKey = ref('1') // Set default active key
const mode = ref('top') // Mode for tab position (optional, could be 'top' or 'left')
</script>

<style scoped>
/* Custom Style for Tab Pane */
.a-tab-pane {
  width: 100% !important;
  height: 100% !important;
  display: flex !important; 
  flex-direction: column !important;
}

.pane-content {
  width: 100% !important;
  height: 100% !important;
}

.a-tabs-content-holder {
  height: 100% !important;
}

.a-tabs-content {
  height: 100% !important;
}

.a-tabs {
  height: 100% !important;
  display: flex !important;
  flex-direction: column !important;
}

.a-tabs-nav {
  height: auto !important;
}

.a-tabs-nav-wrap {
  height: auto !important;
}

.a-tabs-tab {
  height: auto !important;
}

.a-tabs-tab-btn {
  height: auto !important;
}

/* Active Tab Text Color Change */
:deep(.ant-tabs-tab-active .ant-tabs-tab-btn) {
  color: #06c08b !important; /* Change active tab text color to green */
  font-weight: bold; /* Optional: Make it bold for emphasis */
}

/* Change Tab Underline Color */
:deep(.ant-tabs-ink-bar) {
  background-color: #06c08b !important; /* Change underline to green */
}

/* Hover Effect for Tab Text */
:deep(.ant-tabs-tab-btn:hover) {
  color: #06c08b !important; /* Change tab text to green on hover */
  font-weight: bold; /* Optional: Make it bold */
  transition: color 0.3s ease; /* Smooth transition for hover effect */
}
</style>
