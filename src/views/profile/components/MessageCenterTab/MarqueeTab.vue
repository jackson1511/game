<template>
  <!-- it is like marquee, like breking news -->
  <!-- <div>
    <a-empty description="No breaking news available" />
  </div> -->
  <div class="mr-3">
    <a-card size="small">
      <router-link to="" class="flex justify-between items-center w-full">
        <div class="flex items-center w-full ">
          <div class="iconbox mr-3 text-green-600">
            <ion-icon name="volume-high" size="large"></ion-icon>
          </div>
          <div class="flex flex-col ">
            <div class="truncate">
              First launch on the entire network: fully support Huiwang,
            </div>
            <div class="mail-date text-gray-400">10/18/2025 23:00:00</div>
          </div>
        </div>

        <div class="iconbox">
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </div>
      </router-link>
    </a-card>
  </div>
</template>
