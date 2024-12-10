<template>
<div class="overflow-x-auto max-h-[550px] overflow-y-auto">
                  <table class="w-full border-collapse">
                    <!-- Table Header  border-collapse-->
                    <thead class="h-16">
                      <tr class="w-full border border-gray-300">
                        <!-- First Column with Top-Left Border Radius -->
                        <th class="px-2 py-2 font-thin rounded-tl-lg rounded-bl-lg border-l border-t border-b w-[15%]">
                          Level
                        </th>

                        <!-- Middle Column (No Radius) -->
                        <th class="px-2 py-2 font-thin w-[30%]">
                         Daily Withdrawal Total Limit
                        </th>

                        <!-- Middle Column (No Radius) -->
                        <th class="px-2 py-2 font-thin w-[30%]">
                          Daily Withdrawal Limit
                        </th>

                        <!-- Last Column with Top-Right Border Radius -->
                        <th class="px-2 py-2 font-thin w-[25%] rounded-tr-lg rounded-br-lg border-r border-t text-xs">
                          Number Of Daily Fee-Free Withdawal
                        </th>
                      </tr>
                    </thead>

                    <!-- Table Body -->
                    <tbody>
                      <tr v-for="(level, index) in levels" :key="level.level" :class="{
                        'border-2 border-green-500 rounded-lg overflow-hidden': index === 0,
                        'bg-white': index % 2 === 0,
                        ' text-white': index % 2 !== 0
                      }" class="align-center">

                        <!-- First Column -->
                        <td
                          class="px-3 border border-transparent first:rounded-l-lg last:rounded-r-lg text-center">
                          <div class="relative">
                            <img src="https://cdntoos.hwylaws.com/siteadmin/active/img_dj10.png"
                              class="absolute top-0 left-0 w-full h-full">
                            <img src="https://cdntoos.hwylaws.com/siteadmin/active/color9.png"  class="w-full h-full">
                          </div>
                        </td>

                        <td
                          class="px-2 py-2 border border-transparent first:rounded-l-lg last:rounded-r-lg text-center ">
                          <p :class="['text-gray-500 text-xs mt-4', level.rate == '' ? 'mt-2' : '']">
                            {{ level.dailyTotalWithdrawal }}
                          </p>
                        </td>
                        <!-- Second Column -->
                        <td
                          class="px-2 py-2 border border-transparent first:rounded-l-lg last:rounded-r-lg text-center ">
                          <p :class="['text-gray-500 text-xs mt-4', level.rate == '' ? 'mt-2' : '']">
                            {{ level.dailyWithdrawalLimit }}
                          </p>
                          
                        </td>

                        <!-- Third Column -->
                        <td
                          class="px-2 py-2 border border-transparent first:rounded-l-lg last:rounded-r-lg text-center text-xs text-yellow-400 ">
                          {{ level.promotionBonus }}
                        </td>

                      </tr>
                    </tbody>

                  </table>
                </div>
</template>

<script setup lang="ts">

const levels = [
{ level: 3, betForPromotion: '40,000', promotionBonus: '-', rate: '', dailyTotalWithdrawal: 'Unlimited', dailyWithdrawalLimit: "Unlimited" },
{ level: 3, betForPromotion: '40,000', promotionBonus: '-', rate: '', dailyTotalWithdrawal: 'Unlimited', dailyWithdrawalLimit: "Unlimited" },
{ level: 3, betForPromotion: '40,000', promotionBonus: '-', rate: '', dailyTotalWithdrawal: 'Unlimited', dailyWithdrawalLimit: "Unlimited" },
{ level: 3, betForPromotion: '40,000', promotionBonus: '-', rate: '', dailyTotalWithdrawal: 'Unlimited', dailyWithdrawalLimit: "Unlimited" },
{ level: 3, betForPromotion: '40,000', promotionBonus: '18.00', rate: '', dailyTotalWithdrawal: 'Unlimited', dailyWithdrawalLimit: "Unlimited" },
{ level: 3, betForPromotion: '40,000', promotionBonus: '18.00', rate: '', dailyTotalWithdrawal: 'Unlimited', dailyWithdrawalLimit: "Unlimited" },
{ level: 3, betForPromotion: '40,000', promotionBonus: '18.00', rate: '', dailyTotalWithdrawal: 'Unlimited', dailyWithdrawalLimit: "Unlimited" },
{ level: 3, betForPromotion: '40,000', promotionBonus: '18.00', rate: '', dailyTotalWithdrawal: 'Unlimited', dailyWithdrawalLimit: "Unlimited" },
{ level: 3, betForPromotion: '40,000', promotionBonus: '18.00', rate: '', dailyTotalWithdrawal: 'Unlimited', dailyWithdrawalLimit: "Unlimited" },
{ level: 3, betForPromotion: '40,000', promotionBonus: '18.00', rate: '', dailyTotalWithdrawal: 'Unlimited', dailyWithdrawalLimit: "Unlimited" },

{ level: 3, betForPromotion: '40,000', promotionBonus: '18.00', rate: '', dailyTotalWithdrawal: 'Unlimited', dailyWithdrawalLimit: "Unlimited" },
{ level: 3, betForPromotion: '40,000', promotionBonus: '18.00', rate: '', dailyTotalWithdrawal: 'Unlimited', dailyWithdrawalLimit: "Unlimited" },
{ level: 3, betForPromotion: '40,000', promotionBonus: '18.00', rate: '', dailyTotalWithdrawal: 'Unlimited', dailyWithdrawalLimit: "Unlimited" },
{ level: 3, betForPromotion: '40,000', promotionBonus: '18.00', rate: '', dailyTotalWithdrawal: 'Unlimited', dailyWithdrawalLimit: "Unlimited" },
{ level: 3, betForPromotion: '40,000', promotionBonus: '18.00', rate: '', dailyTotalWithdrawal: 'Unlimited', dailyWithdrawalLimit: "Unlimited" },
{ level: 3, betForPromotion: '40,000', promotionBonus: '18.00', rate: '', dailyTotalWithdrawal: 'Unlimited', dailyWithdrawalLimit: "Unlimited" },

{ level: 3, betForPromotion: '40,000', promotionBonus: '18.00', rate: '', dailyTotalWithdrawal: 'Unlimited', dailyWithdrawalLimit: "Unlimited" },

{ level: 3, betForPromotion: '40,000', promotionBonus: '18.00', rate: '', dailyTotalWithdrawal: 'Unlimited', dailyWithdrawalLimit: "Unlimited" },
];
</script>
