<template>
  <div class="app-layout font-sans text-gray-400">
    <div class="main-header-offer">
      <div class="flex h-[6.5vh]">
        <!-- First Column (10%) -->
        <div class="w-[11%] flex items-center justify-center">
          <RouterLink to="/">
            <LeftOutlined />
          </RouterLink>
        </div>

        <!-- Second Column (90%) -->
        <div class="w-[89%] overflow-x-auto overflow-y-hidden scroll-px-4 [&::-webkit-scrollbar]:hidden h-[7vh]">
          <ul class="flex space-x-10 items-center h-full text-[15.5px] text-gray-400 min-w-max">
            <li class="flex-shrink-0">
              <RouterLink to="/offer">Event</RouterLink>
            </li>
            <li class=" active-header flex-shrink-0">
              <RouterLink to="/offer-vip">VIP</RouterLink>
            </li>
            <li class="flex-shrink-0">
              <RouterLink to="/offer-rebate">Rebate</RouterLink>
            </li>
            <li class="flex-shrink-0">
              <RouterLink to="/offer-reward">Reward</RouterLink>
            </li>
            <li class=" flex-shrink-0">
              <RouterLink to="/offer-interest">Interest</RouterLink>
            </li>
            <li class="flex-shrink-0">
              <RouterLink to="/offer-history">History</RouterLink>
            </li>
          </ul>
        </div>

      </div>

    </div>
    <div class="main-container ">
      <div class="content mr-4 ml-4 flex-grow overflow-y-auto">
        <section class="bg-white mt-3">
          <!-- 1 Row, 3 Columns Layout -->
          <div class="flex bg-white justify-between pl-4 pr-1 py-2 rounded-lg shadow-md gap-2  ">

            <!-- Column 1 (48%) -->
            <div class="basis-[18%]">
              <!-- First Text -->
              <div class="flex relative items-center text-gray-400 w-full">
                <div
                  class="absolute iphone6:text-[9px] w-full h-[18px] -top-2 -left-4 bg-red-600 text-[11px] text-gray-200 rounded-t-md rounded-r-md pt-1 pl-1">
                  Current Level
                </div>
                <div class="relative w-16 h-16 mt-4">
                  <img src="https://cdntoos.hwylaws.com/siteadmin/active/img_dj10.png"
                    class="absolute top-0 left-0 w-full h-full">
                  <img src="https://cdntoos.hwylaws.com/siteadmin/active/color9.png" class="w-full h-full">
                </div>
              </div>
            </div>
            <!-- Column 2 (48%) -->
            <div class="basis-[62%] text-gray-300">
              <p class="text-md mt-5">Remaining <span class="text-lg font-bold italic text-red-500">VIP2</span></p>
              <p class="text-md -mt-5">Valid Bets: <span class="font-bold text-black">0.00</span></p>

            </div>
            <!-- Column 2 (48%) -->
            <div class="basis-[20%] pr-4">
              <div class="flex justify-end">
                <button class="bg-buttonColorGray hover:bg-blue-700 text-white text-xs h-8 py-2 px-4 w-20 rounded-lg">
                  Receive
                </button>
              </div>
              <div class="flex justify-end mt-2">
                <button class="bg-buttonColorGreen hover:bg-blue-700 text-white text-xs h-8 py-2 px-4 w-20 rounded-lg">
                  History
                </button>
              </div>
            </div>

          </div>
        </section>

        <section>
          <div class="mt-7">VIP Level List</div>
          <div class="">

            <a-tabs v-model="activeKey" class="fixed-header-tabs custom-tabs mt-2">
              <!-- Tab 1 -->
              <a-tab-pane key="1" tab="Promotion Bonus">
                  <PromotionBonusView/>
              </a-tab-pane>

              <!-- Tab 2 -->
              <a-tab-pane key="2" tab="Weekly Bonus">
               
                  <WeeklyBonusView/>
                
              </a-tab-pane>

              <!-- Tab 3 -->
              <a-tab-pane key="3" tab="Monthly Bonus">
               
                  <MonthlyBonusView/>
                
              </a-tab-pane>

              <!-- Tab 4 -->
              <a-tab-pane key="4" tab="VIP Privilege">
               
                  <VIPPrivilegeView/>
                
              </a-tab-pane>

            </a-tabs>

          </div>

        </section>


        <section>
          <div class="justify-items-start mt-3">
            <div class="text-lg text-gray-700">VIP Rules Explanation</div>
            <br />
            <div class="line"></div>
            <br />
            <div class="text-md leading-relaxed text-gray-400">1.Promotion standard: Meet the VIP promotion requirements
              (i.e., both
              deposit or valid bets meet the criteria) to upgrade to the corresponding VIP level and receive the
              corresponding promotion bonus. If you consecutively upgrade multiple levels, you can receive all the level
              promotion bonuses.Real-time bonuses can be claimed;<br>2.Daily Bonus: By meeting the current level's daily
              deposit and valid betting requirements, you can receive the corresponding daily bonus. If consecutively
              advancing across multiple levels, only the current level's daily bonus can be obtained.Real-time bonuses
              can be claimed;<br>3.Weekly Bonus: By meeting the deposit and valid betting requirements for the current
              level each week, one can receive the corresponding weekly bonus. If you are promoted to multiple levels,
              only the weekly bonus of the current level can be received,Real-time bonuses can be claimed;<br>4.Monthly
              Bonus: By meeting the deposit and valid betting requirements for the current level each month, one can
              receive the corresponding monthly salary bonus. If you are promoted to multiple levels, only the monthly
              bonus of the current level can be received,Real-time bonuses can be claimed;<br>5.Reward expiration time:
              The bonuses obtained are retained for a long time and need to be received manually;<br>6.Audit Note: VIP
              bonuses need to be wagered 1 times (i.e., audited, played through, or through valid bets) to be eligible
              for withdrawal, Wagering is not limited to any game platform;<br>7.Event Statement: This feature is only
              for the account owner's normal gaming betting. Renting accounts, risk-free betting (matching, brushing,
              low odds), malicious arbitrage, using plugins, bots, exploiting agreements, vulnerabilities, interfaces,
              group control, or other technical means are prohibited. Once verified, the platform reserves the right to
              terminate member logins, suspend member website usage, and confiscate bonuses and improper profits without
              prior notice;<br>8.Explanation: By claiming VIP rewards, the platform assumes that the member agrees to
              comply with the corresponding conditions and related regulations. To avoid misunderstandings in text
              interpretation, the platform reserves the final right to interpret this event.</div>
          </div>
        </section>
      </div>
    </div>

    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TheFooter from '@/components/layout/TheFooter.vue';
import PromotionBonusView from '@/components/offer/PromotionBonus.vue';
import WeeklyBonusView from '@/components/offer/WeeklyBonus.vue';
import MonthlyBonusView from '@/components/offer/MonthlyBonusView.vue';
import VIPPrivilegeView from '@/components/offer/VIPPrivilegeView.vue';

import { LeftOutlined, QuestionCircleFilled } from '@ant-design/icons-vue';

const activeKey = ref('1');

const levels = [
  { level: 1, betForPromotion: '-', promotionBonus: '-', rate: '' },
  { level: 2, betForPromotion: '10,000', promotionBonus: '8.00', rate: '0/1000,00' },
  { level: 3, betForPromotion: '40,000', promotionBonus: '18.00', rate: '' },
  { level: 2, betForPromotion: '10,000', promotionBonus: '8.00', rate: '' },
  { level: 3, betForPromotion: '40,000', promotionBonus: '18.00', rate: '' },
  { level: 2, betForPromotion: '10,000', promotionBonus: '8.00', rate: '' },
  { level: 3, betForPromotion: '40,000', promotionBonus: '18.00', rate: '' },
  { level: 2, betForPromotion: '10,000', promotionBonus: '8.00', rate: '' },
  { level: 3, betForPromotion: '40,000', promotionBonus: '18.00', rate: '' },
  { level: 2, betForPromotion: '10,000', promotionBonus: '8.00', rate: '' },
  { level: 3, betForPromotion: '40,000', promotionBonus: '18.00', rate: '' },
  { level: 3, betForPromotion: '40,000', promotionBonus: '18.00', rate: '' },
  { level: 2, betForPromotion: '10,000', promotionBonus: '8.00', rate: '' },
  { level: 3, betForPromotion: '40,000', promotionBonus: '18.00', rate: '' },
  { level: 2, betForPromotion: '10,000', promotionBonus: '8.00', rate: '' },
  { level: 3, betForPromotion: '40,000', promotionBonus: '18.00', rate: '' },
  { level: 2, betForPromotion: '10,000', promotionBonus: '8.00', rate: '' },
  { level: 3, betForPromotion: '40,000', promotionBonus: '18.00', rate: '' },
  { level: 2, betForPromotion: '10,000', promotionBonus: '8.00', rate: '' },
  { level: 3, betForPromotion: '40,000', promotionBonus: '18.00', rate: '' },
  { level: 2, betForPromotion: '10,000', promotionBonus: '8.00', rate: '' },
  { level: 3, betForPromotion: '40,000', promotionBonus: '18.00', rate: '' },
  { level: 2, betForPromotion: '10,000', promotionBonus: '8.00', rate: '' },
  { level: 3, betForPromotion: '40,000', promotionBonus: '18.00', rate: '' },
  { level: 2, betForPromotion: '10,000', promotionBonus: '8.00', rate: '' },
  { level: 3, betForPromotion: '40,000', promotionBonus: '18.00', rate: '' },
  { level: 2, betForPromotion: '10,000', promotionBonus: '8.00', rate: '' },
  { level: 3, betForPromotion: '40,000', promotionBonus: '18.00', rate: '' },
  { level: 2, betForPromotion: '10,000', promotionBonus: '8.00', rate: '' },
  { level: 3, betForPromotion: '40,000', promotionBonus: '18.00', rate: '' },
  { level: 2, betForPromotion: '10,000', promotionBonus: '8.00', rate: '' },

];
</script>

<style scoped>
.line {
  height: 1px;
  background-color: #cecdcd;
  width: 100%;
}

.app-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.main-header-offer {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 530px;
  z-index: 100;
  background: white;
  border-bottom: .01rem solid #e3e3e3;
}

.header-offer {
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.header-offer .back {
  font-size: 20px;
  flex: 0 0 10%;
  display: flex;
  justify-content: start;
  align-items: center;
  z-index: 1;
}

.header-offer .offer-tab {
  color: #666;
  flex: 0 0 90%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow-x: scroll;
  white-space: nowrap;
}

.header-offer .offer-tab::-webkit-scrollbar {
  display: none;
}

.header-offer .offer-tab ul {
  display: flex;
  padding: 0;
  margin: 0;
  list-style-type: none;
}

.header-offer .offer-tab ul li {
  display: inline-block;
  padding: 10px;
  margin-right: 20px;
  cursor: pointer;
}
.active-header {
  color: #06c08b;
  position: relative;
  /* This keeps ::after relative to the parent li */
}

.active-header::after {
  content: '';
  position: absolute;
  top:197%;
  bottom: 0;
  /* Positions the line below the tab */
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #06c08b;

}


.main-container {
  display: flex;
  flex: 1;
  margin-top: 60px;
  overflow-y: auto;
  background-color: #F8F8F8;
}

.content {
  flex-grow: 1;
}

footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  z-index: 10;
  padding: 10px;
  text-align: center;
}
</style>

<style>
/* For All Tabs */
.custom-tabs .ant-tabs-tab {
  @apply text-gray-500 hover:text-gray-800 font-medium;
  transition: all 0.3s ease-in-out;
}

/* For Active Tab */
.custom-tabs .ant-tabs-tab-active {
  @apply text-green-600 font-bold;
}

/* For Ink Bar (Underlining Active Tab) */
.custom-tabs .ant-tabs-ink-bar {
  background-color: #10b981;
  /* Tailwind Green-500 */
}
</style>
<style>
thead>tr:last-child>th:last-child {
    border-bottom-right-radius: .1rem;
    border-top-right-radius: .1rem;
}
thead>tr:first-child>th:first-child {
    border-bottom-left-radius: .1rem;
    border-top-left-radius: .1rem;
}
.custom-tabs .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
  color: #26a17b !important; /* Green color */
  font-weight: normal !important; /* Set font-weight to normal */
  font-size:12px  !important;
}
.custom-tabs .ant-tabs-tab.ant-tabs-tab {
  color: #333333 !important; /* Green color */
  font-weight: normal !important; /* Set font-weight to normal */
  font-size:12px  !important;
}
.custom-tabs .ant-tabs-ink-bar {
  background-color: #10b981;
  /* Tailwind Green-500 */
}
</style>

<style>
@media (max-height: 667px) {

  .active-header::after {
  top: 170%;
}
}
</style>
