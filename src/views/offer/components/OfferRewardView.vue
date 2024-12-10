<template>
  <div class="flex mr-2 ml-2 flex-col h-screen font-sans text-gray-400">
    <div class="flex flex-1 bg-[#F8F8F8]">
      <div class="flex-1">
        <!-- Balance Section -->
        <section>
          <div class="flex justify-between iphone6:text-xs">
            <div class="flex items-center gap-2 border border-amber-500 rounded-full p-2 h-6">
              <img src="/public/icons/usdt.avif" alt="USDT Icon" class="w-5 h-5">
              <span class="text-amber-500 font-semibold underline">0.00</span>
              <SyncOutlined class="text-green-600 rotate-[120deg]" />
            </div>
            <div class="text-gray-500 h-6 text-md">
              Current Active Level 
              <ThunderboltFilled class="text-green-500" />
              <span class="text-green-500">0</span> 
            </div>
          </div>
        </section>

        <!-- No Record Section -->
        <div class="flex items-center justify-center h-full">
          <div class="flex flex-col items-center justify-center">
            <img 
              src="https://cdntoos.hwylaws.cc/siteadmin/skin/lobby_asset/1-0-common/common/common/img_none_sj.avif" 
              alt="No Record Image" 
              class="w-32 h-32">
            <p class="text-gray-400 mt-4">No Record</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>
