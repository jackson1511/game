<template>
  <div>
    <!-- Back Button -->
    <a-button @click="goBack" style="margin-bottom: 20px;">
      Back
    </a-button>

    <!-- Tabs Component -->
    <a-tabs v-model:activeKey="activeKey" style="width: 100%;">
      <a-tab-pane key="1" tab="Tab 1">
        <div>Content for Tab 1</div>
      </a-tab-pane>
      <a-tab-pane key="2" tab="Tab 2">
        <div>Content for Tab 2</div>
      </a-tab-pane>
      <a-tab-pane key="3" tab="Tab 3">
        <div>Content for Tab 3</div>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import { Button, Tabs } from 'ant-design-vue';

export default {
  data() {
    return {
      activeKey: '1', // Default active tab
    };
  },
  methods: {
    // Method to handle back button click
    goBack() {
      // Example: Go to previous tab (you can implement custom logic)
      if (this.activeKey > 1) {
        this.activeKey = (parseInt(this.activeKey) - 1).toString();
      } else {
        // You can also perform other actions, like navigating to another page
        alert('No previous tab!');
      }
    },
  },
  components: {
    'a-tabs': Tabs,
    'a-tab-pane': Tabs.TabPane,
    'a-button': Button, // Register the Ant Design Button component
  },
};
</script>

<style scoped>
/* Optional: Add your custom styles here */
</style>
