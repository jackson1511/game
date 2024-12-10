<template>
  <div class="m-2 bg-white border shadow-sm rounded-sm">
      <div class="flex mx-3 px-3">
         <div class="image">
            <div class="relative">
               <img src="/src/assets/icon/agent_lvl_1.avif" alt="agent" class="rounded-sm w-20 " />
               <div class="absolute top-0 right-0 text-green-600  p-1">
                <ion-icon name="help-circle" size="small"></ion-icon>
               </div>
            </div>
         </div>
         <div class="info my-2">
          <div class="flex justify-between w-full items-center">
            <div>Collectable : <span class="text-yellow-600">0.00</span></div>
            <div class="flex space-x-2">
              <a-button type="primary">Claim</a-button>
              <a-button type="primary">History</a-button>
            </div>
          </div>
          <div class="flex flex-col">
             <div>My Superior <span class="text-gray-500 text-sm">None</span></div>
             <div>Agent Mode <span class="text-gray-500 text-sm"> Level 1 net profit(Monthly Settlement)</span></div>
          </div>

         </div>
      </div>
      <a-divider />
  </div>
</template>
<script lang="ts" setup>
</script>
