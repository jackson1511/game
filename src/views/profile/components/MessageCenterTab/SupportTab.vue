<template>
  <div class="flex flex-col space-y-3 mx-3">
    <!-- 24/7 Customer Support Section -->
    <a-card class="shadow-md" bordered>
      <div class="flex items-top">
        <img src="/src/assets/images/24-7-support.avif" alt="24/7 Support" class="w-12 h-12" />
        <div class="ml-4">
          <div class="text-lg font-medium">24/7 Customer Support</div>
          <p class="text-sm text-gray-600">
            Chat with customer support online to solve your problems
          </p>
          <a-button type="primary" class="mt-2">Chat Now</a-button>
        </div>
      </div>
    </a-card>

    <!-- Telegram Support Section -->
    <a-card class="shadow-md" bordered>
      <template #title>
        <div class="flex items-center">
          <img src="/src/assets/images/telegram.avif" alt="Telegram" class="w-5 h-5" />
          <div class="ml-2 text-lg font-medium">Telegram Support</div>
        </div>
      </template>

      <div class="space-y-3">
        <!-- Telegram Support Card 1 -->
        <div class="flex justify-between items-center p-3 border rounded-lg">
          <div class="flex items-center">
            <img src="/src/assets/images/telegram.avif" alt="Telegram" class="w-10 h-10" />
            <div class="ml-4">
              <div class="font-medium text-gray-800">Telegram Support</div>
              <div class="text-sm text-gray-600">@huyxz</div>
            </div>
          </div>
          <a-button type="link">Contact Now</a-button>
        </div>

        <!-- Telegram Support Card 2 -->
        <div class="flex justify-between items-center p-3 border rounded-lg">
          <div class="flex items-center">
            <img src="/src/assets/images/telegram.avif" alt="Telegram" class="w-10 h-10" />
            <div class="ml-4">
              <div class="font-medium text-gray-800">Telegram Support</div>
              <div class="text-sm text-gray-600">@huyxz</div>
            </div>
          </div>
          <a-button type="link">Contact Now</a-button>
        </div>
      </div>
    </a-card>
  </div>
</template>
