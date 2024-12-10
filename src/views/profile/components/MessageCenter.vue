<template>
     <StickyHeader>
      <template #back-icon>
        <a-button type="text" @click="router.push('/profile')">
          <ion-icon name="chevron-back-outline"></ion-icon>
        </a-button>
      </template>
      <template #title> Message Center </template>
    </StickyHeader>
  <div class="px-3 w-full">
  <a-tabs
    v-model:activeKey="activeKey"
    :tab-position="mode"
      :style="{ height: '200px' }"
      @tabScroll="callback"
      @change="change"

  >
    <a-tab-pane key="1" tab="Support">
      <SupportTab />
    </a-tab-pane>
    <a-tab-pane key="2" tab="News">
      <NewsTab/>
    </a-tab-pane>
    <a-tab-pane key="3" tab="Notification">
      <NotificationTab />
    </a-tab-pane>
    <a-tab-pane key="4" tab="Marquee">
      <MarqueeTab />
    </a-tab-pane>
    <a-tab-pane key="5" tab="Reward Feedback">
      <RewardFeedBack />
    </a-tab-pane>
  </a-tabs>
</div>

</template>
<script setup lang="ts">
import StickyHeader from './StickyHeader.vue';
import { ref,watch } from 'vue'
import type { TabsProps } from 'ant-design-vue';
const mode = ref<TabsProps['tabPosition']>('top');
import { useRoute,useRouter } from 'vue-router';
import SupportTab from './MessageCenterTab/SupportTab.vue';
import RewardFeedBack from './MessageCenterTab/RewardFeedBack.vue';
import NewsTab from './MessageCenterTab/NewsTab.vue';
import NotificationTab from './MessageCenterTab/NotificationTab.vue';
import MarqueeTab from './MessageCenterTab/MarqueeTab.vue';

const route = useRoute();
const router = useRouter();
const tabFromUrl = route.query.tab ? String(route.query.tab) : "1";
console.log("origin tab", tabFromUrl);
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
