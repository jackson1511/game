<template>
  <StickyHeader>
    <template #back-icon>
      <a-button type="text" @click="$router.go(-1)">
        <ion-icon name="chevron-back-outline"></ion-icon>
      </a-button>
    </template>
    <template #title> Promote and make Money </template>
  </StickyHeader>
  <div>
    <div class="pd-2">
      <a-tabs v-model:activeKey="activeKey" class="px-3">
        <a-tab-pane key="1" tab="Promotion Sharing">
          <agent-promote-tab />
        </a-tab-pane>
        <a-tab-pane key="2" tab="My Data" force-render>
          <MyDataTab />
        </a-tab-pane>
        <a-tab-pane key="3" tab="Performance">Content of Tab Pane 3</a-tab-pane>
        <a-tab-pane key="4" tab="Commission">Content of Tab Pane 4</a-tab-pane>
        <a-tab-pane key="5" tab="Subordinate Information">Content of Tab Pane 5</a-tab-pane>
        <a-tab-pane key="6" tab="Subordinate Betting">Content of Tab Pane 6</a-tab-pane>
        <a-tab-pane key="7" tab="Subordinate Finance">Content of Tab Pane 7</a-tab-pane>
        <a-tab-pane key="8" tab="Subordinate Receipt">Content of Tab Pane 8</a-tab-pane>
        <a-tab-pane key="9" tab="Commission Rate">Content of Tab Pane 9</a-tab-pane>
        <a-tab-pane key="10" tab="Register Subordinate">Content of Tab Pane 10</a-tab-pane>
        <template #renderTabBar="{ DefaultTabBar, ...props }">
          <component :is="DefaultTabBar" v-bind="props" :style="{ opacity: 0.5 }" />
        </template>
      </a-tabs>
    </div>
  </div>
</template>
<script lang="ts" setup>
import AgentPromoteTab from './AgentCenterTab/AgentPromoteTab.vue'
import MyDataTab from './AgentCenterTab/MyDataTab.vue'
import StickyHeader from './StickyHeader.vue'
import { ref } from 'vue'
const activeKey = ref('1')
</script>
