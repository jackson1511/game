<template>
  <h4 class="font-md">僅支援帳號登入</h4>
  <div class="w-full max-w-md">
    <!-- Form -->
    <a-form
      :model="formState"
      name="basic"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 24 }"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
      class="space-y-2"
    >
      <!-- input Field :: username -->
      <a-form-item :validate-status="validateStatusUsername">
        <!-- validator message -->
        <template #help>
          <div v-if="errorMessageUsername" style="display: flex; align-items: center; color: red">
            <ExclamationCircleOutlined style="margin-right: 8px" />
            {{ errorMessageUsername }}
          </div>
        </template>
        <!-- input -->
        <a-input
          v-model:value="formState.username"
          ref="usernameInputRef"
          placeholder="請輸入帳號"
          @input="validateInputUsername"
          @blur="validateInputUsername"
        >
          <!-- prefix -->
          <template #prefix>
            <user-outlined />
            <span class="p-0 m-0" v-if="!formState.username">*</span>
          </template>
          <!-- suffix -->
          <template #suffix v-if="formState.username">
            <a-tooltip>
              <CloseCircleOutlined class="cursor-pointer" @click="handleClearUsername" />
            </a-tooltip>
          </template>
        </a-input>
      </a-form-item>

      <!-- input Field :: password -->
      <a-form-item :validate-status="validateStatusPassword">
        <template #help>
          <div v-if="passwordErrorMessage" style="display: flex; align-items: center; color: red">
            <ExclamationCircleOutlined style="margin-right: 8px" />
            {{ passwordErrorMessage }}
          </div>
        </template>
        <a-input-password
          ref="passwordInputRef"
          v-model:value="formState.password"
          placeholder="請輸入登入密碼"
          @input="validateInputPassword"
          @blur="validateInputPassword"
          :type="passwordVisible ? 'text' : 'password'"
          :maxlength="16"
        >
          <template #prefix>
            <lock-outlined />
            <span v-if="!formState.password">*</span>
          </template>

          <template #suffix>
            <a-tooltip>
              <CloseCircleOutlined
                class="cursor-pointer"
                v-if="formState.password"
                @click="handleClearPassword"
              />
            </a-tooltip>
            <!-- custom suffix :: toggle visible password -->
            <a-tooltip title="Toggle password visibility">
              <EyeOutlined class="cursor-pointer" @click="togglePasswordVisibility" />
            </a-tooltip>
          </template>
        </a-input-password>
      </a-form-item>

      <!-- term and policy -->
      <div class="space-x-2 mt-4 flex items-center">
        <a-checkbox v-model:checked="rememberMe" class="checkbox"></a-checkbox>
        <span>記住帳號密碼</span>
      </div>

      <!-- button - signin -->
      <div class="mt-4">
        <button type="submit" class="w-full p-2 rounded-md text-white bg-[#26a17b]">登入</button>
      </div>
    </a-form>
  </div>
</template>
<script lang="ts" setup>
import {
  UserOutlined,
  ExclamationCircleOutlined,
  CloseCircleOutlined,
  LockOutlined,
  EyeOutlined,
} from '@ant-design/icons-vue'
import { reactive, ref, onMounted } from 'vue'
import { useAuthStore } from '@/stores/auth'
import type { ValidateErrorEntity } from 'ant-design-vue/es/form/interface'
const authStore = useAuthStore()
const emit = defineEmits(['submit'])

const errorMessageUsername = ref('')
const validateStatusUsername = ref('')
const usernameInputRef = ref<HTMLElement | null>(null)

const validateStatusPassword = ref('')
const passwordErrorMessage = ref('')
const passwordInputRef = ref<HTMLElement | null>(null)
const passwordVisible = ref(false)
const rememberMe = ref(false)

interface FormState {
  username: string
  password: string
}
const formState = reactive<FormState>({
  username: '',
  password: '',
})

const handleClearUsername = () => {
  formState.username = ''
  validateStatusUsername.value = ''
  validateStatusUsername.value = ''
  usernameInputRef.value?.focus()
}

const validateInputUsername = () => {
  if (formState.username.length === 0) {
    validateStatusUsername.value = 'error'
    errorMessageUsername.value = '請輸入帳號'
  } else if (formState.username.length < 4 || formState.username.length > 16) {
    validateStatusUsername.value = 'error'
    errorMessageUsername.value = '帳號格式錯誤 4-16字符 支援英文/數字'
  } else {
    validateStatusUsername.value = 'success'
    errorMessageUsername.value = ''
  }
}

const togglePasswordVisibility = () => {
  passwordVisible.value = !passwordVisible.value
}

const handleClearPassword = () => {
  formState.password = ''
  validateStatusPassword.value = ''
  passwordInputRef.value?.focus()
}
const validateInputPassword = () => {
  if (formState.password.length === 0) {
    validateStatusPassword.value = 'error'
    passwordErrorMessage.value = '8-16 位，至少包含 小寫字母/大寫字母/數字/符號'
  } else if (formState.password.length < 8 || formState.password.length > 16) {
    validateStatusPassword.value = 'error'
    passwordErrorMessage.value = '8-16 位，至少包含 小寫字母/大寫字母/數字/符號'
  } else {
    validateStatusPassword.value = 'success'
    passwordErrorMessage.value = ''
  }
}

const onFinish = () => {
  if (validateStatusUsername.value === 'success' && validateStatusPassword.value === 'success') {
    const loginSuccess = authStore.login(formState.username, formState.password)

    if (loginSuccess) {
      if (rememberMe.value) {
        // Save credentials if remember me is checked
        localStorage.setItem('rememberedUsername', formState.username)
      } else {
        localStorage.removeItem('rememberedUsername')
      }
      emit('submit', formState.username, formState.password)
    } else {
      validateStatusPassword.value = 'error'
      passwordErrorMessage.value = '帳號或密碼錯誤 (demo/demo123)'
    }
  }
}

const onFinishFailed = (errorInfo: ValidateErrorEntity<FormState>) => {
  console.log('Failed:', errorInfo)
}

// Add mounted hook to check for remembered username
onMounted(() => {
  const rememberedUsername = localStorage.getItem('rememberedUsername')
  if (rememberedUsername) {
    formState.username = rememberedUsername
    rememberMe.value = true
  }
})
</script>
<style scoped></style>
