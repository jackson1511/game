<template>
  <div>
    <!-- <a-button type="primary" @click="handleShowModal">Open Modal</a-button> -->

    <a-modal
      v-if="props.modalVisible"
      :open="open"
      :footer="null"
      :maskClosable="false"
      :closable="false"
      :width="400"
    >
      <div>
        <a-tabs
          destroyInactiveTabPane
          v-model:activeKey="activeKey"
          centered
          class="flex justify-between form-tabs"
        >
          <a-tab-pane key="1">
            <template #tab>
              <span class="flex items-center justify-center">
                <UserAddOutlined />
                註冊
              </span>
            </template>
            <div class="components-input-demo-presuffix">
              <!-- form -->
              <FormInput />
              <!-- term and policy -->
              <div class="space-x-2 mt-4 flex items-center">
                <a-checkbox class="checkbox"></a-checkbox>
                <span>
                  我已滿18歲 已閱讀且同意
                  <span class="text-[#26a17b]">《用戶協議》</span>
                </span>
              </div>
              <!-- button - singup -->
              <div class="mt-4">
                <button class="w-full p-2 rounded-md text-white bg-[#26a17b]">註冊</button>
              </div>
              <!-- service -->
              <div class="mt-2 text-[#26a17b]">
                <ul class="flex justify-evenly items-center mb-0">
                  <li class="cursor-pointer">忘記密碼</li>
                  <li class="cursor-pointer">聯繫客服</li>
                </ul>
              </div>
            </div>
          </a-tab-pane>
          <a-tab-pane key="2">
            <template #tab>
              <span class="flex items-center justify-center">
                <LoginOutlined />
                登入
              </span>
            </template>
            <FormSignin @submit="handleLogin" />
            <!-- ... -->
            <div class="mt-2 text-[#26a17b]">
              <ul class="flex justify-evenly items-center mb-0">
                <li class="cursor-pointer">聯繫客服</li>
                <li class="cursor-pointer">免費試玩</li>
                <li class="cursor-pointer">忘記密碼</li>
              </ul>
            </div>
          </a-tab-pane>
        </a-tabs>
      </div>

      <div class="flex justify-center relative top-16">
        <img
          src="@/assets/close.png"
          width="28px"
          alt=""
          class="cursor-pointer"
          @click="handleCloseModal"
        />
      </div>
    </a-modal>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { LoginOutlined, UserAddOutlined } from '@ant-design/icons-vue'
import FormInput from './FormSignup.vue'
import FormSignin from './FormSignin.vue'

const props = defineProps({
  open: Boolean,
  modalVisible: Boolean,
  initialTab: String,
})

const emits = defineEmits(['close-modal', 'login-success'])

const activeKey = ref('1')

watch(
  () => props.initialTab,
  (newTab) => {
    if (newTab === 'login') {
      activeKey.value = '2'
    } else if (newTab === 'register') {
      activeKey.value = '1'
    }
  },
  { immediate: true },
)

const handleCloseModal = () => {
  emits('close-modal')
}

const handleLogin = (username: string, password: string) => {
  console.log('username:', username)
  if (username === 'demo' && password === 'demo123456') {
    emits('login-success')
    handleCloseModal()
  } else {
    alert('Invalid credentials. Try demo/demo123456')
  }
}
</script>
<style scoped>
.form-tabs {
  :global(.ant-tabs-tab-btn) {
    color: #666 !important;
    font-size: 16px;
  }

  :global(.ant-tabs-tab-btn:hover) {
    color: #666 !important;
  }

  :global(.ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn) {
    color: #26a17b !important;
  }

  :global(.ant-tabs-ink-bar) {
    background: #26a17b;
  }
}
/* Global styles to override default checkbox styles */
:global(.ant-checkbox-checked .ant-checkbox-inner) {
  background-color: #26a17b !important;
  border-color: #26a17b !important;
}

:global(.ant-checkbox-checked .ant-checkbox-inner:after) {
  border-color: white !important;
}

:global(.ant-checkbox-inner) {
  border-color: #26a17b !important;
}

:global(.ant-checkbox:hover .ant-checkbox-inner) {
  border-color: #26a17b !important;
}
</style>
