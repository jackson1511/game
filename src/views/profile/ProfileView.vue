<template>
  <!-- <div class="bg-[url('/src/assets/images/green_bg.avif')]"> -->
    <div class="">
    <div class="cover-bg-profile">
      <div class="flex justify-end items-center space-x-3 p-3 text-white">
        <router-link to="/message-center?tab=1">
          <ion-icon name="headset-outline" size="large"></ion-icon>
        </router-link>

        <router-link :to="{ path: '/message-center', query: { tab: 3 } }">
          <a-badge count="1" show-zero style="color:white">
            <ion-icon name="mail-outline" size="large"></ion-icon
          ></a-badge>
        </router-link>

        <router-link to="/profile-view">
          <ion-icon name="settings-outline" size="large"></ion-icon>
        </router-link>

        <!-- <img src="/src/assets/icon/headphone-svgrepo-com.svg" alt="Headphone" class="w-5" />
       <img src="/src/assets/icon/headphone-svgrepo-com.svg" alt="Headphone" class="w-5" /> -->
      </div>
      <div class="bg-[url('/src/assets/images/gold_bg.avif')] mmmbg">
        <div class="flex justify-between items-center p-5">
          <div class="flex justify-start ml-3">
            <div
              alt="Headphone"
              class="w-14 h-14 rounded-full border bg-[url('/src/assets/images/color1.png')] bg-contain bg-no-repeat bg-center"
            >
              <div
                alt="Headphone"
                class="w-14 h-14 rounded-full items-center justify-center flex border bg-[url('/src/assets/images/color2.png')] bg-contain bg-no-repeat bg-center"
              >
                <span class="gold-text"> 1</span>
              </div>
            </div>
          </div>
          <div class="flex flex-col w-full ml-5 items-center">
            <div class="flex justify-between w-full">
              <div class="text-yellow-600 text-xs font-light">
                Remaining <span class="text-black">VIP 2</span> valid bet
                <span class="text-black">200000</span>
              </div>
              <router-link to="/offerVIP">
                <ion-icon name="chevron-forward"></ion-icon>
              </router-link>
            </div>
            <div class="flex w-full items-center mt-2">
              <div class="text-xs w-2/6 text-yellow-600">Bet for promotion</div>
              <div class="w-4/6 h-3 w-full bg-gray-300 rounded-full overflow-hidden mr-3">
                <div
                  class="h-full w-4/4 bg-yellow-500 text-[8px] text-center text-white items-center"
                >
                  100/2000
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col curve-box text-white font-thin">
      <div class="flex justify-between items-center w-full p-3">
        <div class="flex items-center mr-10">
          <div class="mr-2">
            <router-link to="/profile-view">
              <div class="relative border rounded-md shadow-sm">
                <img
                  src="https://cdntoos.hwylaws.com/siteadmin/default/2D/img_txn18.png"
                  shape="square"
                  width="60px"
                />
                <div class="absolute bottom-0 right-0 bg-blue-300 vip-pop">
                  <div class="flex items-center">
                    <img src="/src/assets/icon/img_vip.avif" alt="VIP" width="30px" />
                    <span class="gold-text"> 1 </span>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
          <div class="flex flex-col">
            <div class="text-xs mb-2">Account : mgmg</div>
            <div class="flex items-center">
              ID : 283923829 <ion-icon name="copy-outline"></ion-icon>
            </div>
          </div>
        </div>
        <div class="flex text-lg justify-evenly items-center flex-grow mr-5">
          <div class="flex items-center">
            <ion-icon name="logo-usd"></ion-icon>
          </div>
          <div class="flex items-center">982392.32</div>
          <div class="flex items-center">
            <ion-icon name="reload-outline"></ion-icon>
          </div>
        </div>
      </div>
      <div class="flex justify-evenly items-center w-full p-3 text-sm">
        <router-link to="/withdraw" class="flex flex-col items-center space-y-2">
          <ion-icon name="cash-outline" size="large"></ion-icon>
          <span>Withdraw</span>
        </router-link>
        <a-divider type="vertical" style="border-color: white;height: 30px;" />
        <div class="flex flex-col items-center space-y-2 hover:cursor-pointer" @click="openDepositModal">
          <ion-icon name="wallet-outline" size="large"></ion-icon>
          <span>Deposit</span>
        </div>
        <a-divider type="vertical" style="border-color: white;height: 30px;" />
        <router-link to="/offer-interest" class="flex flex-col items-center space-y-2">
          <ion-icon name="folder-outline" size="large"></ion-icon>
          <span>Interset</span>
        </router-link>
      </div>
    </div>
  </div>

  <div class="m-5 list flex flex-col space-y-2 mb-20 font-light text-sm">
    <div v-for="menu in menus" :key="menu.title">
      <router-link v-if="menu.url" :to="menu.url">
        <div
          class="flex justify-between items-center w-full py-2 px-3 rounded-md border bg-gray-50 shadow-sm"
        >
          <div class="flex items-center">
            <ion-icon :name="`${menu.icon}`" class="text-green-600 list-icon-size"></ion-icon>
            <div class="ml-2">{{ menu.title }}</div>
          </div>
          <div class="flex items-center">
            <div class="text-xs text-green-300">{{ menu.helpText }}</div>
            <div class="">{{ menu.value }}</div>

            <ion-icon name="chevron-forward"></ion-icon>
          </div>
        </div>
      </router-link>
      <div v-if="menu.onClick" @click="menu.onClick">
        <div
          class="flex justify-between items-center w-full py-2 px-3 rounded-md border bg-gray-50 shadow-sm hover:cursor-pointer"
        >
          <div class="flex items-center">
            <!-- <i :class="`hgi-stroke ${menu.icon}`"></i> -->
            <!-- <ion-icon name="browsers"></ion-icon> -->
            <ion-icon :name="`${menu.icon}`" class="text-green-600 list-icon-size"></ion-icon>
            <div class="ml-2">{{ menu.title }}</div>
          </div>
          <div class="flex items-center">
            <div class="text-xs text-green-300">{{ menu.helpText }}</div>
            <div class="">{{ menu.value }}</div>

            <ion-icon name="chevron-forward"></ion-icon>
          </div>
        </div>
      </div>
    </div>

  </div>
  <MusicPlayer v-model:open="showMusicPlayer" />
  <LanguageModal v-model:open="showLanguageModal" />
  <DepositModal v-model:open="showDepositModel" />

</template>
<script setup lang="ts">
import { ref, watch } from 'vue'
import { RouterLink } from 'vue-router'
import MusicPlayer from '../../components/music/MusicPlayer.vue'
import LanguageModal from '@/components/home/LanguageModal.vue';
import { locale } from '@/utils/i18n';
import { Modal } from 'ant-design-vue';
import { createVNode } from 'vue';
import { useAuthStore } from '@/stores/auth';
import router from '@/router';
import DepositModal from '@/components/deposit/DepositModal.vue';
const showMusicPlayer = ref(false)
const showLanguageModal = ref(false)
const authStore = useAuthStore();
const showDepositModel = ref(false);
const  openDepositModal = () => {
  showDepositModel.value = true
}
const showLogoutConfirm = () => {
  Modal.confirm({
    title: createVNode('div', { style: 'text-align: center;' }, 'Reminder'),
    // icon: createVNode(ExclamationCircleFilled),
    content: createVNode('div', { style: 'color:red;' }, 'do you want to logout from current system account?'),
    okText: 'Confirm Exit',
    onOk()  {
      console.log('OK');
      router.push('/');
     authStore.logout();

    },
    onCancel() {
      console.log('Cancel');
    },
    class: 'test',
  });
};
const openMusicPlayer = () => {
  showMusicPlayer.value = true
}
const openLanguageModal = () => {
  showLanguageModal.value = true
}
watch(locale, (newVal) => {
  selectedLang.value = newVal
})
const selectedLang = ref(locale.value)
const menus = ref([
  {
    icon: 'search-circle',
    title: 'Retirive balance',
    url: '/center-wallet',
  },
  {
    icon: 'document-text-outline', //<ion-icon name="document-text-outline"></ion-icon>
    title: 'Statement',
    url: '/report?tab=1',
  },
  {
    icon: 'document-outline',
    title: 'Bet records',
    url: '/report?tab=2',
  },
  {
    icon: 'document-text-outline',
    title: 'Report',
    url: '/report?tab=3',
  },
  {
    icon: 'card-outline',
    title: 'Withdraw management',
    onClick: () => {
      console.log('Withdraw management')
    },
  },
  {
    icon: 'arrow-redo-circle-outline',
    title: 'Agent',
    helpText: 'Monthly income of 1 million',
    url: '/agent',
  },
  {
    icon: 'id-card',
    title: 'Profile',
    url: '/profile-view',
  },
  {
    icon: 'shield-half-outline',
    title: 'Security Center',
    url: '/security',
  },
  {
    icon: 'musical-notes-outline', //<ion-icon name="musical-notes-outline"></ion-icon>
    title: 'Music',
    onClick: () => openMusicPlayer(),
  },
  {
    icon: 'language-outline',
    title: 'Language',
    value: selectedLang.value === 'en-US' ? 'English' : selectedLang.value === 'zh-TW' ? '繁體中文' : '简体中文',
    onClick: () => openLanguageModal(),
  },
  {
    icon: 'help-circle-outline',
    title: 'FAQ',
    url: '/message-center?tab=1',
  },
  {
    icon: 'gift-outline',
    title: 'Reward Feedback',
    url: '/message-center?tab=5',
  },
  {
    icon: 'desktop-outline',
    title: 'Login into device',
    url: '/device-info',
  },

  {
    icon: 'exit-outline',
    title: 'Quit',
    onClick: () => showLogoutConfirm(),
  },
])
</script>
<style scoped>
.curve-box {
  /* background: -webkit-gradient(linear, left top, left bottom, from(#3AC79A), to(#2FB188)); */
  background: linear-gradient(to bottom, #3ac79a, #2fb188);
}
.mmmbg {
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: 1px 1px;
}
.cover-bg-profile{
  background-position: 0px 0px;
  background-size: 100% 100%;
  background-image: url('/src/assets/images/green_bg.avif');
  background-color: #3ac79a;
}
.list-icon-size {
  font-size: 20px;
}
.gold-text {
  color: #e5b952;
  font-weight: bolder;
}
.vip-pop {
  background-color: rgb(36, 178, 153);

  padding: 4px;
  height: 20px;
  border-top-left-radius: 10px;
}
</style>
