<template>

    <StickyHeader>
      <template #back-icon>
        <a-button type="text" @click="handleBack">
          <ion-icon name="chevron-back-outline"></ion-icon>
        </a-button>
      </template>
      <template #title> Profile </template>
    </StickyHeader>

  <div class="bg-gray text-thin">
    <div class="flex m-3 items-center">
      <div class="image mr-3">
        <router-link to="/profile-avator">
              <div class="relative border rounded-md shadow-sm">
                <img
                  src="https://cdntoos.hwylaws.com/siteadmin/default/2D/img_txn18.png"
                  shape="square"
                  width="60px"
                />
                <div class="absolute bottom-0 right-0 bg-blue-300 vip-pop">
                  <div class="flex items-center">
                    <img src="/src/assets/icon/img_vip.avif" alt="VIP" width="30px" />
                    <span class="gold-text-vip"> 1 </span>
                  </div>
                </div>
              </div>
            </router-link>
      </div>
      <div class="flex flex-col">
        <router-link to="/profile-avator" class="text-sm font-thin">Set up</router-link>
        <div class="flex items-center">
          <div>ID : 3928392329</div>
          <div><ion-icon name="copy-outline"></ion-icon></div>
        </div>
      </div>
    </div>

    <div class="form m-4">
      <a-form
        layout="vertical"
        :model="formState"
        v-bind="formItemLayout"
        :label-col="{ span: 8 }"
        :wrapper-col="{ span: 16 }"
      >
        <a-space direction="vertical" size="large" style="width: 100%">
          <!-- Field A -->
          <a-input v-model:value="formState.username" placeholder="Enter username" disabled="true">
            <template #prefix>
              <UserOutlined />
            </template>
          </a-input>

          <!-- Field B (WhatsApp) -->
          <a-input v-model:value="formState.whatAppId" placeholder="Please enter WhatsApp ID" clearIcon>
            <template #prefix>
              <img src="/src/assets/icon/input_icon_whatsapp.svg" alt="WhatsApp" width="20px"  />
            </template>
          </a-input>

          <!-- Field C (Telegram) -->
          <a-input v-model:value="formState.telegramId" placeholder="Telegram" clearIcon>
            <template #prefix>
              <img src="/src/assets/icon/input_icon_telegram.svg" alt="Telegram" width="20px" />
            </template>
          </a-input>

          <!-- Date of Birth -->
          <label label="Date of Birth(unchageable once set)" class="w-full">
            Date of Birth(unchageable once set)
            <a-input v-model:value="formState.dateOfBirth" placeholder="input placeholder"  clearIcon/>
          </label>
          <p class="text-yellow-600 text-xs">
            The system requires users to be at least 18 years old to use it, i.e., born before 10-12-2006!
          </p>



          <!-- Submit Button -->

        </a-space>
        <div class="sticky-footer flex justify-between space-x-2">
          <a-button  block >Back</a-button>
          <a-button type="primary" block>Save</a-button>
        </div>
      </a-form>
    </div>
  </div>
</template>
<script setup lang="ts">
import StickyHeader from './StickyHeader.vue'
import { UserOutlined } from '@ant-design/icons-vue'
import { ref } from 'vue'

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 14 },
}
const handleBack = () => {
  console.log('Back button clicked')
window.history.back()
}


const formState = ref({
  username: 'mgmg',
  whatAppId: '',
  telegramId: '',
  dateOfBirth: '',
})
</script>
