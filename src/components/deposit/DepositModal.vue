<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue'
import { LeftOutlined, CloseCircleFilled, SwapOutlined } from '@ant-design/icons-vue'
import DepositRecordsModal from '@/components/deposit/DepositRecordsModal.vue'

defineProps({
  open: {
    type: Boolean,
    default: false,
  },
})
const showRecords = ref(false)

const openRecords = () => {
  showRecords.value = true
}

const emit = defineEmits(['update:open'])
const activeTab = ref('digital') // 'digital' or 'huione'
const selectedPayment = ref('huiwang') // 'huiwang' or 'usdt'
const selectedCurrency = ref('usdt') // 'usdt' or 'usd'
const depositAmount = ref('')

const handleClose = () => {
  emit('update:open', false)
}

const switchTab = (tab: string) => {
  activeTab.value = tab
}

const selectPayment = (payment: string) => {
  selectedPayment.value = payment
}

const selectCurrency = (currency: string) => {
  selectedCurrency.value = currency
}

const setAmount = (amount: string) => {
  depositAmount.value = amount
}
</script>

<template>
  <a-drawer
    :open="open"
    placement="bottom"
    height="93vh"
    :mask="false"
    :closable="false"
    :rootClassName="'deposit-drawer'"
    @close="handleClose"
  >
    <div class="deposit-container">
      <div class="flex flex-col">
        <div class="drawer-header">
          <button class="back-btn" @click="handleClose">
            <LeftOutlined style="font-size: 24px" />
          </button>
          <h2 class="text-2xl font-normal">Deposit</h2>
          <div class="header-icons">
            <router-link :to="{ path: '/message-center', query: { tab: 1 } }">
              <ion-icon name="headset-outline" size="large" style="color: #26a17b"></ion-icon>
            </router-link>
            <ion-icon
              name="time-outline"
              size="large"
              style="color: #26a17b; cursor: pointer"
              @click="openRecords"
            ></ion-icon>
            <DepositRecordsModal v-model:open="showRecords" />
          </div>
        </div>

        <!-- Payment Method Tabs -->
        <div class="method-tabs">
          <div
            class="method-tab"
            :class="{ active: activeTab === 'digital' }"
            @click="switchTab('digital')"
          >
            <span class="text-primary">
              <img src="/public/icons/huione.png" class="w-6 h-6" alt="crypto" />
            </span>
            <span>Digital currency/Huiwang payment</span>
          </div>
          <div
            class="method-tab"
            :class="{ active: activeTab === 'huione' }"
            @click="switchTab('huione')"
          >
            <span class="text-primary">
              <SwapOutlined style="font-size: 24px; color: #26a17b" />
            </span>
            <span>Huione Transfer</span>
          </div>
        </div>

        <!-- Digital Currency Content -->
        <div v-if="activeTab === 'digital'" class="tab-content">
          <!-- Payment Options -->
          <div class="payment-options">
            <div
              class="payment-option"
              :class="{ active: selectedPayment === 'huiwang' }"
              @click="selectPayment('huiwang')"
            >
              <img src="/public/icons/huiwang.avif" class="w-8 h-8" alt="Huiwang" />
              <span>汇旺扫码</span>
              <div class="hot-tag">火热</div>
            </div>
            <div
              class="payment-option"
              :class="{ active: selectedPayment === 'usdt' }"
              @click="selectPayment('usdt')"
            >
              <img src="/public/icons/usdt.avif" class="w-8 h-8" alt="USDT" />
              <span>USDT</span>
              <div class="hot-tag">火热</div>
            </div>
          </div>
          <a-divider />
          <!-- Currency Selection -->
          <div class="currency-options" v-if="selectedPayment === 'huiwang'">
            <div
              class="currency-option"
              :class="{ active: selectedCurrency === 'usdt' }"
              @click="selectCurrency('usdt')"
            >
              USDT
            </div>
            <div
              class="currency-option"
              :class="{ active: selectedCurrency === 'usd' }"
              @click="selectCurrency('usd')"
            >
              USD
            </div>
          </div>
          <a-divider />

          <!-- Deposit Amount -->
          <div class="quick-amounts" v-if="selectedPayment !== 'huiwang'">
            <button class="amount-btn" @click="setAmount('100')">100</button>
            <button class="amount-btn" @click="setAmount('200')">200</button>
            <button class="amount-btn" @click="setAmount('500')">500</button>
            <button class="amount-btn" @click="setAmount('1000')">1000</button>
            <button class="amount-btn" @click="setAmount('2000')">2000</button>
            <button class="amount-btn" @click="setAmount('5000')">5000</button>
            <button class="amount-btn" @click="setAmount('10000')">10000</button>
            <button class="amount-btn" @click="setAmount('100000')">100000</button>
          </div>

          <div class="amount-input">
            <label v-if="selectedPayment === 'huiwang'" class="text-lg text-[#333] block mb-3"
              >Deposit amount</label
            >
            <a-input
              prefix="U"
              v-model:value="depositAmount"
              placeholder="Min 10, Max 100000"
              :maxLength="10"
              :min="10"
              :max="100000"
              style="height: 50px"
              :allow-clear="true"
              :bordered="true"
            >
              <template #clearIcon>
                <CloseCircleFilled @click="setAmount('')" />
              </template>
            </a-input>
          </div>

          <p class="reminder">仅支持汇旺扫码，无需手续费自动上分。</p>
        </div>

        <!-- Huione Transfer Content -->
        <div v-if="activeTab === 'huione'" class="tab-content">
          <div class="transfer-option active w-[250px] h-[50px]">
            <img src="/public/icons/huione.png" class="w-8 h-8" alt="Huione" />
            <span>Huione Transfer</span>
            <div class="check-icon">✓</div>
          </div>

          <div class="account-info active w-[250px] h-[50px]">
            <span>娱乐上分(**** 1234)</span>
            <div class="check-icon">✓</div>
          </div>

          <!-- Quick Amount Selection -->
          <div class="quick-amounts">
            <button class="amount-btn" @click="setAmount('100')">100</button>
            <button class="amount-btn" @click="setAmount('200')">200</button>
            <button class="amount-btn" @click="setAmount('500')">500</button>
            <button class="amount-btn" @click="setAmount('1000')">1000</button>
            <button class="amount-btn" @click="setAmount('2000')">2000</button>
            <button class="amount-btn" @click="setAmount('5000')">5000</button>
            <button class="amount-btn" @click="setAmount('10000')">10000</button>
            <button class="amount-btn" @click="setAmount('50000')">50000</button>
          </div>

          <!-- Custom Amount Input -->
          <div class="amount-input">
            <a-input
              prefix="U"
              v-model:value="depositAmount"
              placeholder="Min 50, Max 100000"
              :maxLength="10"
              :min="50"
              :max="100000"
              style="height: 50px"
              :allow-clear="true"
              :bordered="true"
            >
              <template #clearIcon>
                <CloseCircleFilled @click="setAmount('')" />
              </template>
            </a-input>
          </div>

          <p class="reminder">Reminder: 汇旺账单请备注【游戏账号】</p>
        </div>

        <!-- Submit Button -->
        <button class="submit-btn">Deposit Now</button>
      </div>
    </div>
  </a-drawer>
</template>

<style scoped>
:global(.ant-drawer-content-wrapper) {
  box-shadow: none !important;
  transform: translateY(0) !important;
}
:global(.ant-drawer-content) {
  width: 530px !important;
  margin: 0 auto;
  border-radius: 16px;
  border: 1px solid #eee;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
}
:global(.ant-drawer-body) {
  padding: 0 10px !important;
}
:global(.ant-input-affix-wrapper:hover),
:global(.ant-input-affix-wrapper:focus),
:global(.ant-input-affix-wrapper-focused) {
  border-color: #26a17b !important;
}

.deposit-drawer {
  max-width: 530px;
  margin: 0 auto;
}

.deposit-container {
  padding: 0 5px;
}

.drawer-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding: 16px 0;
}

.header-icons {
  display: flex;
  gap: 12px;
}

.back-btn {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
}

.method-tabs {
  display: flex;
  gap: 24px;
  margin-bottom: 24px;
  border-bottom: 1px solid #eee;
}

.method-tab {
  display: flex;
  align-items: center;
  font-size: 16px;
  gap: 8px;
  padding-bottom: 8px;
  cursor: pointer;
  position: relative;
}

.method-tab.active {
  color: #26a17b;
}

.method-tab.active::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 2px;
  background: #26a17b;
}

.quick-amounts {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  margin-bottom: 24px;
}

.amount-btn {
  padding: 12px;
  border: 1px solid #eee;
  border-radius: 8px;
  background: white;
  cursor: pointer;
}

.amount-btn:hover {
  border-color: #26a17b;
  color: #26a17b;
}

.transfer-option,
.account-info {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px;
  border: 1px solid #eee;
  border-radius: 8px;
  margin-bottom: 16px;
  position: relative;
}

.transfer-option.active,
.account-info.active {
  border-color: #26a17b;
}

.check-icon {
  position: absolute;
  right: 16px;
  color: #26a17b;
}

.payment-options {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 24px;
}

.payment-option {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px;
  border: 1px solid #eee;
  border-radius: 8px;
  position: relative;
  cursor: pointer;
}

.payment-option.active {
  border-color: #26a17b;
  position: relative;
}
.currency-option.active::after,
.payment-option.active::after {
  content: '✓';
  position: absolute;
  bottom: 0;
  right: 0;
  color: white;
  font-size: 12px;
  background: #26a17b;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 100%);
  border-bottom-right-radius: 7px;
}

.hot-tag {
  position: absolute;
  top: -12px;
  right: 0px;
  background: #ff4d4f;
  color: white;
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transform: scale(0.9);
}

.currency-options {
  width: 160px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 24px;
}

.currency-option {
  width: 160px;
  padding: 16px;
  border: 1px solid #eee;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
}

.currency-option.active {
  border-color: #26a17b;
  color: #26a17b;
  position: relative;
}

.amount-input {
  margin-bottom: 24px;
}
.reminder {
  font-size: 16px;
  color: #666;
  margin-bottom: 50px;
}

.submit-btn {
  width: 100%;
  background: #26a17b;
  font-size: 16px;
  color: white;
  padding: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.submit-btn:hover {
  background: #5aa38c;
}

:deep(.ant-drawer-body) {
  padding: 24px 0 0 0;
}

.text-primary {
  color: #65b49c;
}
</style>
