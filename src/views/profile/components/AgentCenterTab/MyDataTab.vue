<template>
  <a-tabs
    v-model:activeKey="activeKey"
    type="card"
    size="small"
    :tabBarGutter="14"
    :animated="false"
    class="custom-tabs"
  >
    <a-tab-pane v-for="i in tabs" :key="i.key" :tab="i.tab">
      <div class="flex justify-center">
        <p class="text-gray-500">{{ i.description }}</p>
      </div>
      <!-- grid 1-->
      <div class="mb-4">
        <a-row :gutter="[8, 8]">
          <a-col :span="8" v-for="item in i.item1" :key="item.id">
            <div class="grid-item1">
              <label class="text-gray-400 mb-2">{{ item.label }}</label>
              <span class="text-[18px]">{{ item.number }}</span>
            </div>
          </a-col>
        </a-row>
      </div>

      <!-- grid 2-->
      <div class="bg-white rounded-md border-gray-300 mb-4">
        <div class="py-4 flex items-center justify-center space-x-2 border-b">
          <span class="mb-0 text-gray-500">數據匯總</span>
          <QuestionCircleFilled style="color: #26a17b" />
        </div>

        <div>
          <!-- item2 -->
          <a-row>
            <a-col :span="8" v-for="item in i.item2" :key="item.id"
              ><div class="grid-item-2">
                <label class="text-gray-400">{{ item.label }}</label>
                <span>{{ item.number }}</span>
              </div></a-col
            >
          </a-row>

          <!-- item3 -->
          <a-row>
            <a-col :span="12" v-for="item in i.item3" :key="item.id"
              ><div class="grid-item-3">
                <label class="text-gray-400">{{ item.label }}</label>
                <span>{{ item.number }}</span>
              </div></a-col
            >
          </a-row>
        </div>
      </div>
    </a-tab-pane>
  </a-tabs>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { QuestionCircleFilled } from '@ant-design/icons-vue'
const activeKey = ref('1')

// 12 items
const items1 = [
  {
    id: 1,
    label: '新增直屬',
    number: 0.1,
  },
  {
    id: 2,
    label: '首充人數',
    number: 0.2,
  },
  {
    id: 3,
    label: '首充金額',
    number: 0.3,
  },
  {
    id: 4,
    label: '充值人次',
    number: 0.4,
  },
  {
    id: 5,
    label: '充值金額',
    number: 0.5,
  },
  {
    id: 6,
    label: '提現人數',
    number: 0.6,
  },
  {
    id: 7,
    label: '提現金額',
    number: 0.7,
  },
  {
    id: 8,
    label: '有效投注',
    number: 0.8,
  },
  {
    id: 9,
    label: '領取優惠',
    number: 0.9,
  },
  {
    id: 10,
    label: '業績',
    number: 0.01,
  },
  {
    id: 11,
    label: '輸贏金額',
    number: 0.02,
  },
  {
    id: 12,
    label: '佣金',
    number: 0.03,
  },
]

// 15 items
const items2 = [
  {
    id: 1,
    label: '團隊人數',
    number: 0.0,
  },
  {
    id: 2,
    label: '直屬人數',
    number: 0,
  },
  {
    id: 3,
    label: '其他人數',
    number: 0,
  },
  {
    id: 4,
    label: '總業績',
    number: 0,
  },
  {
    id: 5,
    label: '直屬業績',
    number: 0,
  },
  {
    id: 6,
    label: '其他業績',
    number: 0,
  },
  {
    id: 7,
    label: '總佣金',
    number: 0,
  },
  {
    id: 8,
    label: '直屬佣金',
    number: 0,
  },
  {
    id: 9,
    label: '其他佣金',
    number: 0,
  },
  {
    id: 10,
    label: '累計佣金',
    number: 0,
  },
  {
    id: 11,
    label: '已領取',
    number: 0,
  },
  {
    id: 12,
    label: '未領取',
    number: 0,
  },
  {
    id: 13,
    label: '累計直屬儲值',
    number: 0,
  },
  {
    id: 14,
    label: '累計直屬提現',
    number: 0,
  },
  {
    id: 15,
    label: '累計直屬領取',
    number: 0,
  },
]

// 2 items
const items3 = [
  {
    id: 1,
    label: '累計直屬有效投注',
    number: 0.01,
  },
  {
    id: 2,
    label: '累計直屬盈虧',
    number: 0.02,
  },
]

const tabs = [
  {
    tab: '今天',
    key: 1,
    description: '今日數據',
    item1: items1,
    item2: items2,
    item3: items3,
  },
  { tab: '昨天', key: 2, description: '昨日數據', item1: items1, item2: items2, item3: items3 },
  { tab: '本週', key: 3, description: '本週數據', item1: items1, item2: items2, item3: items3 },
  { tab: '上週', key: 4, description: '上週數據', item1: items1, item2: items2, item3: items3 },
  { tab: '本月', key: 5, description: '本月數據', item1: items1, item2: items2, item3: items3 },
  { tab: '上月', key: 6, description: '上月數據', item1: items1, item2: items2, item3: items3 },
]
</script>

<style scoped>
/* custom tabs */
.custom-tabs {
  :global(.ant-tabs-tab) {
    border-radius: 50px !important;
    font-size: 14px !important;
    padding: 4px 16px !important;
    margin-bottom: 10px !important;
    background-color: none;
    font-size: 12px !important;
    color: #666666 !important;
  }
  :global(.ant-tabs-tab-active) {
    background-color: #26a17b !important;
    border: none !important;
  }
  :global(.ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn) {
    color: white !important;
  }
}

.grid-container {
  .global(.ant-col) {
    background-color: #26a17b !important;
    border: none !important;
    padding: 10px;
  }
}

.grid-item1 {
  background: #ffffff;
  padding: 10px;
  text-align: center;
  border: none;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.grid-item-2 {
  height: 60px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 1px solid #f0f2f5;
}

.grid-item-3 {
  padding: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
  border: 1px solid #f0f2f5;
  border-top: none;
  border-bottom: none;
}
</style>
