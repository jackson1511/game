<template>
  <StickyHeader>
    <template #back-icon>
      <a-button type="text" @click="router.push('/profile')">
        <ion-icon name="chevron-back-outline"></ion-icon>
      </a-button>
    </template>
    <template #title> Retrive Balance </template>
  </StickyHeader>
  <a-card>
    <div class="flex justify-between items-center">
      <div class="flex items-center">
        <div>Current Balance &nbsp; <span class="text-yellow-600"> 0.00 </span></div>
        <router-link to="#" class="mt-1 ml-2">
          <ion-icon name="reload-outline"></ion-icon>
        </router-link>
      </div>
      <div>
        <a-button type="primary">One click to retrive</a-button>
      </div>
    </div>
    <div class="flex text-xs font-thin">
      You can only withdraw a whole number multiple of your balance (i.e. no decimals)
    </div>
  </a-card>
  <div class="flex">
    <a-tabs v-model:activeKey="activeKey" tab-position="left" @tabScroll="callback">
      <a-tab-pane key="1" tabBarStyle="display: block;">
        <template #tab>
          <a-button type="primary" block>
            <template #icon>
              <ion-icon name="apps"></ion-icon>
            </template>
            All
          </a-button>
        </template>
        <div class="content m-2">
          <a-input
            v-model:value="searchValue"
            placeholder="input search text"
            size="small"
            style="border-radius: 60px;"
          >
          <template #suffix>
            <a-button type="link">
              <ion-icon name="search"></ion-icon>
            </a-button>
          </template>
          </a-input>
          <div class="grid grid-cols-2 gap-2 my-2">
            <a-card size="small" style="width: 160px;">
              <div class="flex flex-col">
                <div class="flex items-center">
                  <img src="/src/assets/icon/KA.png" alt="KA" class="w-8 h-8" />
                  <div class="ml-3">KA</div>
                </div>
                <a-divider style="padding: 0;margin:0;"/>
                <div class="text-xs text-gray-400">
                  0.00
                </div>
              </div>
            </a-card>
            <a-card size="small" style="width: 160px;">
              <div class="flex flex-col">
                <div class="flex items-center">
                  <img src="/src/assets/icon/PANDA.png" alt="熊貓體育" class="w-8 h-8" />
                  <div class="ml-3">熊貓體育</div>
                </div>
                <a-divider style="padding: 0;margin:0;"/>
                <div class="text-xs text-gray-400">
                  0.00
                </div>
              </div>
            </a-card>

            <a-card size="small" style="width: 160px;">
              <div class="flex flex-col">
                <div class="flex items-center">
                  <img src="/src/assets/icon/PG.png" alt="PG" class="w-8 h-8" />
                  <div class="ml-3">PG</div>
                </div>
                <a-divider style="padding: 0;margin:0;"/>
                <div class="text-xs text-gray-400">
                  0.00
                </div>
              </div>
            </a-card>

          </div>
        </div>
      </a-tab-pane>
      <a-tab-pane key="2">
        <template #tab>
          <!-- <div class="flex w-[70px] bg-green-300 justify-between items-center px-4 py-2 border rounded-md">
            <ion-icon name="football"></ion-icon>
             <div class="">Electronic</div>
          </div> -->
          <a-button type="primary" block>
            <template #icon>
              <ion-icon name="football"></ion-icon>
            </template>
            Electronic
          </a-button>
        </template>
      </a-tab-pane>
      <a-tab-pane key="3">
        <template #tab>
          <!-- <div class="flex bg-green-300 justify-between items-center px-4 py-2 border rounded-md">
            <ion-icon name="fish"></ion-icon>
             <div class="">Fishing</div>
          </div> -->
          <a-button type="primary" block>
            <template #icon>
              <ion-icon name="fish"></ion-icon>
            </template>
            Fishing
          </a-button>
        </template>
      </a-tab-pane>
      <a-tab-pane key="4">
        <template #tab>
          <!-- <div class="flex bg-green-300 justify-between items-center px-4 py-2 border rounded-md">
            <ion-icon name="football"></ion-icon>
             <div class="">Sport</div>
          </div> -->
          <a-button type="primary" block>
            <template #icon>
              <ion-icon name="football"></ion-icon>
            </template>
            Sports
          </a-button>
        </template>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script setup lang="ts">
import StickyHeader from './StickyHeader.vue'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import type { TabsProps } from 'ant-design-vue'

const tabDatas = [
  { key: '1', tab: 'All' },
  { key: '2', tab: 'Deposit' },
  { key: '3', tab: 'Withdraw' },
  { key: '4', tab: 'Transfer' },
]

const router = useRouter()
const activeKey = ref("1")
const searchValue = ref('')
const callback: TabsProps['onTabScroll'] = (val) => {
  console.log(val)
}

const onSearch = (value: string) => {
  console.log(value)
}
</script>
<style scoped>
:deep(.ant-tabs-tab) {
  display: block !important;
  padding: 8px 0;
}
</style>
