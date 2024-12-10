<template>
  <div class="scroll-tabs-container">
    <a-tabs v-model:activeKey="activeKey" :animated="false" class="custom-tabs" :moreIcon="null">
      <template #leftExtra>
        <button v-if="showBackButton" class="back-btn" @click="handleBack">
          <LeftOutlined style="font-size: 24px" />
        </button>
      </template>

      <template #rightExtra>
        <div class="right-extra">
          <slot name="rightExtra" />
        </div>
      </template>

      <a-tab-pane v-for="tab in tabs" :key="tab.key" :tab="tab.label">
        <slot :name="tab.key" />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { LeftOutlined } from '@ant-design/icons-vue'
import { useRouter } from 'vue-router'

interface Tab {
  key: string
  label: string
}

const props = defineProps<{
  tabs: Tab[]
  defaultActive?: string
  showBackButton?: boolean
}>()

const router = useRouter()
const activeKey = ref(props.defaultActive || props.tabs[0]?.key)

const handleBack = () => {
  router.back()
}
</script>

<style scoped>
.scroll-tabs-container {
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}
:deep(.ant-tabs-nav-more) {
  display: none !important;
}
:deep(.ant-tabs) {
  overflow: visible;
}

:deep(.ant-tabs-nav) {
  margin-bottom: 0;
}

:deep(.ant-tabs-nav::before) {
  border-bottom: none;
}

:deep(.ant-tabs-tab) {
  padding: 8px 16px;
  font-size: 16px;
  color: #666;
}

:deep(.ant-tabs-tab-active) {
  font-weight: 500;
}

:deep(.ant-tabs-ink-bar) {
  background: #26a17b;
  height: 2px;
}

:deep(.ant-tabs-tab:hover) {
  color: #26a17b;
}

:deep(.ant-tabs-tab-active .ant-tabs-tab-btn) {
  color: #26a17b !important;
}

.back-btn {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  margin-right: 16px;
}

.right-extra {
  margin-left: 16px;
}
</style>
