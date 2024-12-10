<template>
  <StickyHeader>
    <template #back-icon>
      <a-button type="text" @click="router.push('/profile')">
        <ion-icon name="chevron-back-outline"></ion-icon>
      </a-button>
    </template>
    <template #title> Report </template>
  </StickyHeader>

  <div class="w-full">
    <a-tabs
      v-model:activeKey="activeKey"
      :tab-position="mode"
      :style="{ height: '200px' }"
      @tabScroll="callback"
      @change="change"
    >
      <a-tab-pane key="1" tab="Statement">
       <statement-tab></statement-tab>
      </a-tab-pane>
      <a-tab-pane key="2" tab="Bet Records">
        <bet-record-tab/>
      </a-tab-pane>
      <a-tab-pane key="3" tab="Report">
        <report-tab/>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script setup lang="ts">
import StickyHeader from './StickyHeader.vue'
import { ref,watch } from 'vue'
import type { TabsProps } from 'ant-design-vue';
const mode = ref<TabsProps['tabPosition']>('top');
import { useRoute,useRouter } from 'vue-router';
import StatementTab from './StatementReportTab/StatementTab.vue';
import BetRecordTab from './StatementReportTab/BetRecordTab.vue';
import ReportTab from './StatementReportTab/ReportTab.vue';
const router = useRouter()
const route = useRoute();
const tabFromUrl = route.query.tab ? String(route.query.tab) : "1";
const activeKey = ref(tabFromUrl);
watch(
  () => route.query.tab,
  (newTab) => {
    activeKey.value = newTab ? String(newTab) : '1'; // Update activeKey when tab query changes
  }
);
const callback: TabsProps['onTabScroll'] = val => {
  console.log(val);
};
const change = (key: string) => {
  console.log('Tab changed to:', key);

  // Update the query parameter when the tab changes
  router.push({
    query: {
      ...route.query,
      tab: key,
    },
  });
};

</script>
