<template>
  <h4 class="font-md">僅支援帳號註冊</h4>
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
      <a-form-item :validate-status="validateStatusUsername" class="inputForm">
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
          class="inputForm"
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

      <!-- password strength -->
      <div class="flex items-center space-x-2 mt-2">
        <span>強度</span>

        <div
          class="w-[40px] h-[6px] rounded"
          :class="
            passwordStrength === 'weak'
              ? 'bg-red-500'
              : passwordStrength === 'medium'
                ? 'bg-yellow-500'
                : passwordStrength === 'strong'
                  ? 'bg-[#26a17b]'
                  : passwordStrength === 'perfect'
                    ? 'bg-[#26a17b]'
                    : 'bg-gray-400'
          "
        ></div>
        <div
          class="w-[40px] h-[6px] rounded"
          :class="
            passwordStrength === 'medium'
              ? 'bg-yellow-500'
              : passwordStrength === 'strong'
                ? 'bg-[#26a17b]'
                : passwordStrength === 'perfect'
                  ? 'bg-[#26a17b]'
                  : 'bg-gray-400'
          "
        ></div>
        <div
          class="w-[40px] h-[6px] rounded"
          :class="
            passwordStrength === 'strong'
              ? 'bg-[#26a17b]'
              : passwordStrength === 'perfect'
                ? 'bg-[#26a17b]'
                : 'bg-gray-400'
          "
        ></div>
        <div
          class="w-[40px] h-[6px] rounded"
          :class="passwordStrength === 'perfect' ? 'bg-[#26a17b]' : 'bg-gray-400'"
        ></div>

        <span class="flex items-center text-xs" :class="is8to16 ? '' : 'text-red-500'">
          <CloseCircleOutlined class="mr-1" v-if="!is8to16" />
          8-16位
        </span>
      </div>

      <!-- password rule -->
      <div class="flex items-center space-x-4">
        <span
          class="flex items-center text-[10px]"
          :class="isUpperCase ? 'text-blue-500' : 'text-red-500'"
        >
          <!-- binding icon :: true or false -->
          <CheckCircleOutlined v-if="isUpperCase" class="mr-1" />
          <CloseCircleOutlined v-else class="mr-1" />
          大寫字母
        </span>
        <span
          class="flex items-center text-[10px]"
          :class="isLowerCase ? 'text-blue-500' : 'text-red-500'"
        >
          <!-- binding icon :: true or false -->
          <CheckCircleOutlined v-if="isLowerCase" class="mr-1" />
          <CloseCircleOutlined v-else class="mr-1" />
          小寫字母
        </span>
        <span
          class="flex items-center text-[10px]"
          :class="isNumber ? 'text-blue-500' : 'text-red-500'"
        >
          <!-- binding icon :: true or false -->
          <CheckCircleOutlined v-if="isNumber" class="mr-1" />
          <CloseCircleOutlined v-else class="mr-1" />
          數字
        </span>
        <span
          class="flex items-center text-[10px]"
          :class="isSymbol ? 'text-blue-500' : 'text-red-500'"
        >
          <!-- binding icon :: true or false -->
          <CheckCircleOutlined v-if="isSymbol" class="mr-1" />
          <CloseCircleOutlined v-else class="mr-1" />
          符號
        </span>
      </div>

      <!-- confirm password -->
      <a-form-item :validate-status="validateStatusConfirmPassword">
        <template #help>
          <div v-if="confirmPasswordMessage" style="display: flex; align-items: center; color: red">
            <ExclamationCircleOutlined style="margin-right: 8px" />
            {{ confirmPasswordMessage }}
          </div>
        </template>
        <a-input-password
          ref="confirmPasswordInputRef"
          v-model:value="confirmPassword"
          placeholder="請再次確認密碼，和密碼相同哦!"
          @input="validateInputConfirmPassword"
          @blur="validateInputConfirmPassword"
          :maxlength="16"
        >
          <template #prefix>
            <lock-outlined />
            <span v-if="!confirmPassword">*</span>
          </template>

          <template #suffix>
            <a-tooltip>
              <CloseCircleOutlined class="cursor-pointer" @click="handleClearPassword" />
            </a-tooltip>
          </template>
        </a-input-password>
      </a-form-item>

      <!-- dropdown -->
      <a-dropdown>
        <a-space
          style="cursor: pointer; width: 100%"
          class="border px-4 py-1 rounded-md flex justify-between items-center"
        >
          <div class="flex items-center">
            <!-- <img :src="imgSrc" alt="" width="16px" class="mr-2" /> -->
            <template v-if="selectedOption === 'USTD'">
              <img src="../../assets/ustd.webp" alt="" width="16px" height="10px" class="mr-2" />
            </template>
            <template v-else>
              <img src="../../assets/cyn-flag.webp" alt="" width="16px" class="mr-2" />
            </template>
            {{ selectedOption }}
          </div>
          <DownOutlined />
        </a-space>

        <template #overlay>
          <a-menu @click="handleMenuClick" style="width: 100%">
            <a-menu-item key="USTD">
              <div class="flex items-center">
                <img src="../../assets/ustd.webp" alt="" width="16px" class="mr-2" />
                USDT
              </div>
            </a-menu-item>

            <a-menu-item key="CNY">
              <div class="flex items-center">
                <img src="../../assets/cyn-flag.webp" alt="" width="16px" class="mr-2" />
                CYN(中國元)
              </div>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
      <p class="text-yellow-500">幣種決定三方遊戲和支付，且不能修改哦！</p>

      <!-- Button Submit -->
      <!-- <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
        <a-button type="primary" html-type="submit">Submit</a-button>
      </a-form-item> -->
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
  CheckCircleOutlined,
  DownOutlined,
} from '@ant-design/icons-vue'
import { computed, reactive, ref, watch } from 'vue'

const errorMessageUsername = ref('')
const validateStatusUsername = ref('')
const usernameInputRef = ref<HTMLElement | null>(null)

const validateStatusPassword = ref('')
const passwordErrorMessage = ref('')
const passwordInputRef = ref<HTMLElement | null>(null)
const passwordVisible = ref(false)

const validateStatusConfirmPassword = ref('')
const confirmPasswordInputRef = ref<HTMLElement | null>(null)
const confirmPassword = ref('')
const confirmPasswordMessage = ref('')

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

// watch password and confirmPassword
watch(
  () => formState.password,
  () => {
    validateInputConfirmPassword()
  },
)

const validateInputConfirmPassword = () => {
  if (formState.password !== confirmPassword.value) {
    validateStatusConfirmPassword.value = 'error'
    confirmPasswordMessage.value = '密碼不一致，請重新輸入!'
  } else if (confirmPassword.value.length < 8 || confirmPassword.value.length >= 16) {
    validateStatusConfirmPassword.value = 'error'
    confirmPasswordMessage.value = '8-16 位，至少包含 小寫字母/大寫字母/數字/符號'
  } else {
    validateStatusConfirmPassword.value = 'success'
    confirmPasswordMessage.value = ''
  }
}

const onFinish = () => {
  console.log('data:', formState)
}

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo)
}

// State to store the selected option
const selectedOption = ref('USTD')

// Event handler for menu item clicks
const handleMenuClick = ({ key }: { key: string }) => {
  const optionsMap: Record<string, string> = {
    USTD: 'USTD',
    CNY: 'CNY(中國元)',
  }
  selectedOption.value = optionsMap[key] || 'Unknown Option'
}
// Dynamic image URL binding based on the selected option
const imgSrc = computed(() => {
  if (selectedOption.value === 'USTD') {
    return '../assets/ustd.webp'
  } else if (selectedOption.value === 'CNY(中國元)') {
    return '../assets/cyn-flag.webp'
  }
})

// isUpperCase
const isUpperCase = computed(() => {
  return /[A-Z]/.test(formState.password)
})

// isLowerCase
const isLowerCase = computed(() => {
  return /[a-z]/.test(formState.password)
})

// isNumber
const isNumber = computed(() => {
  return /[0-9]/.test(formState.password)
})

// isSymbol
const isSymbol = computed(() => {
  return /[^A-Za-z0-9]/.test(formState.password)
})

// is8to16
const is8to16 = computed(() => {
  return formState.password.length >= 8
})

// password :: weak, medium, strong, perfect
/**
 * weak : lower + upper + symbol + number
 * medium : lower,upper && length >= 8
 * strong : lower,upper,number && length >= 12
 * perfect: lower,upper,number,symbol && lenght >= 12
 */
const passwordStrength = computed(() => {
  // weak, medium, strong, perfect
  if (
    isLowerCase.value &&
    isUpperCase.value &&
    isSymbol.value &&
    isNumber.value &&
    formState.password.length >= 12
  ) {
    return 'perfect'
  }

  if (
    [isLowerCase.value, isUpperCase.value, isNumber.value, isSymbol.value].filter(Boolean).length >=
      3 &&
    formState.password.length >= 12
  ) {
    return 'strong'
  }
  if (
    [isLowerCase.value, isUpperCase.value, isNumber.value, isSymbol.value].filter(Boolean).length >=
      2 &&
    formState.password.length >= 8
  ) {
    return 'medium'
  }

  if (isLowerCase.value || isUpperCase.value || isNumber.value || isSymbol.value) {
    return 'weak'
  }
})
</script>
<style scoped>
/* Customize the border color of the input */
.inputForm {
  :global(.ant-input:focus) {
    border-color: #1e8e69 !important;
    box-shadow: 0 0 0 2px rgba(38, 161, 123, 0.2) !important;
  }
  :global(.ant-input:hover) {
    border-color: #1e8e69 !important;
  }
}
</style>
