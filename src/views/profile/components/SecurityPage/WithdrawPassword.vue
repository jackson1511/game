<template>
  <StickyHeader>
    <template #back-icon>
      <a-button type="text" @click="$router.go(-1)">
        <ion-icon name="chevron-back-outline"></ion-icon>
      </a-button>
    </template>
    <template #title> Withdraw Password</template>
  </StickyHeader>
  <div class="contianer m-4">
    <p class="text-center text-xs font-thin text-green-500">
      For the safely of your funds, you need to setup withdraw password first
    </p>
    <h5 class="mb-4">Setup withdraw password</h5>

    <div class="flex flex-col gap-2">
      <div class="flex justify-between w-full">
        <div class="text-xs">New Withdraw Password</div>
        <div class="text-xs text-green-300">Show</div>
      </div>

      <div class="flex flex-row w-full">
        <a-input
          v-for="(digit, index) in pinCode"
          :key="index"
          class="basis-1/6 h-12 text-center border rounded-none focus:ring-2 focus:ring-blue-500 focus:outline-none"
          maxlength="1"
          v-model:value="pinCode[index]"
          @input="handleInput(index)"
          @keydown="handleKeydown($event, index)"
          ref="inputs"
        />
      </div>

      <div class="flex justify-between w-full">
        <div class="text-xs">Confirm New Withdraw Password</div>
        <div class="text-xs text-green-300">Show</div>
      </div>

      <div class="flex flex-row w-full">
            <a-input
              v-for="(digit, index) in confirmPinCode"
              :key="`confirm-${index}`"
              class="basis-1/6 h-12 text-center border focus:ring-2 focus:ring-blue-500 focus:outline-none"
              maxlength="1"
              v-model:value="confirmPinCode[index]"
              @input="handleInputConfirm(index)"
              @keydown="handleKeydownConfirm($event, index)"
              ref="confirmInputs"
            />
          </div>
      <p class="text-xs font-thin text-[#FFAA09]">
        Attention: The withdrawal password protects your funds and is extremely important. Keep it
        to yourself to prevent any financial loss.
      </p>
    </div>

    <div class="sticky-footer bottom-0 bg-white border my-3 p-3">
      <a-button type="default" class="block-green-button" size="large" block>Next</a-button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import StickyHeader from '../StickyHeader.vue'
import { ref, onMounted } from 'vue'

const pinCode = ref(Array(6).fill(''))
const confirmPinCode = ref(Array(6).fill(''))
const inputs = ref<(HTMLInputElement | null)[]>([])
const confirmInputs = ref<(HTMLInputElement | null)[]>([])


const handleInput = (index: number) => {
  pinCode.value[index] = pinCode.value[index].replace(/\s+/g, '')
  if (index < pinCode.value.length - 1 && pinCode.value[index]) {
    inputs.value[index + 1]?.focus()
  }
}
const handleInputConfirm = (index: number) => {
  confirmPinCode.value[index] = confirmPinCode.value[index].replace(/\s+/g, '')
  if (index < confirmPinCode.value.length - 1 && confirmPinCode.value[index]) {
    confirmInputs.value[index + 1]?.focus()
  }
}


const handleKeydownConfirm = (event: KeyboardEvent, index: number) => {
  if (event.key === 'Backspace' && !confirmPinCode.value[index] && index > 0) {
    confirmInputs.value[index - 1]?.focus()
  }
}
const handleKeydown = (event: KeyboardEvent, index: number) => {
  if (event.key === 'Backspace' && !pinCode.value[index] && index > 0) {
    inputs.value[index - 1]?.focus()
  }
}

onMounted(() => {
  inputs.value = Array.from(document.querySelectorAll('input'))
  confirmInputs.value = Array.from(document.querySelectorAll('input'))
})
</script>
