<script setup lang="ts">
import { onMounted, ref } from 'vue'
import LanguageModal from '../home/LanguageModal.vue'

defineProps({
  open: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:open'])
const showLanguageModal = ref(false)

onMounted(() => {
  document.addEventListener('click', (e: Event) => {
    const target = e.target as HTMLElement
    if (!target.closest('.popup-menu') && !target.closest('.more-trigger')) {
      emit('update:open', false)
    }
  })
})
</script>

<template>
  <Teleport to="body">
    <div v-show="open" class="popup-menu">
      <div class="grid-menu">
        <div class="menu-row">
          <div class="menu-item">
            <a-image src="/public/icons/interest.avif" :width="40" :preview="false" />
            <span>Interest</span>
          </div>
          <div class="menu-item">
            <a-image src="/public/icons/agent.avif" :width="40" :preview="false" />
            <span>Agent</span>
          </div>
          <div class="menu-item">
            <a-image src="/public/icons/withdraw.avif" :width="40" :preview="false" />
            <span>Withdraw</span>
          </div>
          <div class="menu-item">
            <a-image src="/public/icons/deposit.avif" :width="40" :preview="false" />
            <span>Deposit</span>
          </div>
          <router-link to="/offer" class="menu-item">
            <a-image src="/public/icons/event.avif" :width="40" :preview="false" />
            <span>Event</span>
          </router-link>
        </div>

        <div class="menu-row">
          <div class="menu-item">
            <a-image src="/public/icons/rebate.avif" :width="40" :preview="false" />
            <span>Rebate</span>
          </div>
          <div class="menu-item">
            <a-image src="/public/icons/feedback.avif" :width="40" :preview="false" />
            <span>Reward Feedback</span>
          </div>
          <div class="menu-item">
            <a-image src="/public/icons/security.avif" :width="40" :preview="false" />
            <span>Security Center</span>
          </div>
          <router-link to="/profile-view" class="menu-item">
            <a-image src="/public/icons/profile.avif" :width="40" :preview="false" />
            <span>Profile</span>
          </router-link>
          <div class="menu-item">
            <a-image src="/public/icons/statement.avif" :width="40" :preview="false" />
            <span>Statement</span>
          </div>
        </div>

        <div class="menu-row">
          <div class="menu-item">
            <a-image src="/public/icons/bet-records.avif" :width="40" :preview="false" />
            <span>Bet Records</span>
          </div>
          <div class="menu-item">
            <a-image src="/public/icons/report.avif" :width="40" :preview="false" />
            <span>Report</span>
          </div>
          <div class="menu-item">
            <a-image src="/public/icons/reward.avif" :width="40" :preview="false" />
            <span>Reward</span>
          </div>
          <div class="menu-item">
            <a-image src="/public/icons/withdrawal.avif" :width="40" :preview="false" />
            <span>Withdrawal management</span>
          </div>
          <div class="menu-item" @click="showLanguageModal = true">
            <a-image src="/public/icons/language.avif" :width="40" :preview="false" />
            <span>Language</span>
          </div>
        </div>

        <div class="menu-row">
          <div class="menu-item">
            <a-image src="/public/icons/betting.avif" :width="40" :preview="false" />
            <span>Betting missions</span>
          </div>
          <div class="menu-item">
            <a-image src="/public/icons/history.avif" :width="40" :preview="false" />
            <span>History</span>
          </div>
          <div class="menu-item">
            <a-image src="/public/icons/telegram.png" :width="40" :preview="false" />
            <span>汇旺福利频道</span>
          </div>
        </div>
      </div>
    </div>
  </Teleport>

  <LanguageModal v-model:open="showLanguageModal" />
</template>

<style scoped>
.popup-menu {
  position: fixed;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  background: white;
  border-radius: 12px;
  padding: 24px;
  z-index: 1000;
  box-shadow:
    0 3px 6px -4px rgba(0, 0, 0, 0.12),
    0 6px 16px 0 rgba(0, 0, 0, 0.08);
}

.grid-menu {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.menu-row {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 12px;
}

.menu-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.menu-item span {
  font-size: 14px;
  color: #666;
  text-align: center;
}
</style>
