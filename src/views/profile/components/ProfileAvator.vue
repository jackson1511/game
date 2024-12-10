<template>
  <StickyHeader>
    <template #back-icon>
      <a-button type="text" @click="$router.go(-1)">
        <ion-icon name="chevron-back-outline"></ion-icon>
      </a-button>
    </template>
    <template #title> Change Avator </template>
  </StickyHeader>
  <a-card class="m-3">
    <div class="flex justify-center items-center space-x-2">
      <a-button :type="selectedIndex === 'male' ? 'primary' : 'default'" class="more-rounded-btn" @click="changeSelectedTab('male')">
        <template #icon>
          <ion-icon name="male"></ion-icon>
        </template>
        Male
      </a-button>

      <a-button :type="selectedIndex === 'female' ? 'primary' : 'default'" class="more-rounded-btn" @click="changeSelectedTab('female')">
        <template #icon>
          <ion-icon name="female"></ion-icon>
        </template>
        Female
      </a-button>
    </div>
    <div class="h-[500px] overflow-y-auto">
    <div class="flex w-full flex-wrap ">
      <template v-for="image in filteredData" :key="image.id">
        <div v-if="image.type === selectedIndex" class="w-1/4 p-2">
          <img :src="image.image_url" class="w-full h-auto rounded-lg" />
        </div>
      </template>
    </div>
  </div>
  </a-card>
  <div class="sticky-footer">
    <a-button type="primary" block>Save</a-button>
  </div>
</template>
<script setup lang="ts">
import { ref ,computed} from 'vue'
import StickyHeader from './StickyHeader.vue'
const selectedIndex = ref('male')

const imageDataList = ref([
  {
    id: 1,
    image_url: 'https://cdntoos.hwylaws.cc/siteadmin/default/2D/img_txn1.png',
    type: 'male',
  },
  {
    id: 2,
    image_url: 'https://cdntoos.hwylaws.cc/siteadmin/default/2D/img_txn2.png',
    type: 'male',
  },
  {
    id: 3,
    image_url: 'https://cdntoos.hwylaws.cc/siteadmin/default/2D/img_txn3.png',
    type: 'male',
  },
  {
    id: 4,
    image_url: 'https://cdntoos.hwylaws.cc/siteadmin/default/2D/img_txn4.png',
    type: 'male',
  },
  {
    id: 5,
    image_url: 'https://cdntoos.hwylaws.cc/siteadmin/default/2D/img_txn5.png',
    type: 'male',
  },
  {
    id: 6,
    image_url: 'https://cdntoos.hwylaws.cc/siteadmin/default/2D/img_txn6.png',
    type: 'male',
  },
  {
    id: 7,
    image_url: 'https://cdntoos.hwylaws.cc/siteadmin/default/2D/img_txn7.png',
    type: 'male',
  },
  {
    id: 8,
    image_url: 'https://cdntoos.hwylaws.cc/siteadmin/default/2D/img_txn8.png',
    type: 'male',
  },
  {
    id: 9,
    image_url: 'https://cdntoos.hwylaws.cc/siteadmin/default/2D/img_txn9.png',
    type: 'male',
  },
  {
    id: 10,
    image_url: 'https://cdntoos.hwylaws.cc/siteadmin/default/2D/img_txn10.png',
    type: 'male',
  },
  {
    id: 11,
    image_url: 'https://cdntoos.hwylaws.cc/siteadmin/default/2D/img_txn11.png',
    type: 'male',
  },
  {
    id: 12,
    image_url: 'https://cdntoos.hwylaws.cc/siteadmin/default/2D/img_txn12.png',
    type: 'male',
  },
  {
    id: 13,
    image_url: 'https://cdntoos.hwylaws.cc/siteadmin/default/2D/img_txn13.png',
    type: 'male',
  },
  {
    id: 14,
    image_url: 'https://cdntoos.hwylaws.cc/siteadmin/default/2D/img_txn14.png',
    type: 'male',
  },
  {
    id: 15,
    image_url: 'https://cdntoos.hwylaws.cc/siteadmin/default/2D/img_txn15.png',
    type: 'male',
  },
  {
    id: 16,
    image_url: 'https://cdntoos.hwylaws.cc/siteadmin/default/2D/img_txn16.png',
    type: 'male',
  },
  {
    id: 17,
    image_url: 'https://cdntoos.hwylaws.cc/siteadmin/default/2D/img_txn17.png',
    type: 'male',
  },
  {
    id: 18,
    image_url: 'https://cdntoos.hwylaws.cc/siteadmin/default/2D/img_txn18.png',
    type: 'male',
  },
  {
    id: 19,
    image_url: 'https://cdntoos.hwylaws.cc/siteadmin/default/2D/img_txn19.png',
    type: 'male',
  },
  {
    id: 20,
    image_url: 'https://cdntoos.hwylaws.cc/siteadmin/default/2D/img_txn20.png',
    type: 'male',
  },
  {
    id: 21,
    image_url: 'https://cdntoos.hwylaws.cc/siteadmin/default/2D/img_txn21.png',
    type: 'male',
  },
  {
    id: 22,
    image_url: 'https://cdntoos.hwylaws.cc/siteadmin/default/2D/img_txn22.png',
    type: 'male',
  },
  {
    id: 23,
    image_url: 'https://cdntoos.hwylaws.cc/siteadmin/default/2D/img_txn23.png',
    type: 'male',
  },
  {
    id: 24,
    image_url: 'https://cdntoos.hwylaws.cc/siteadmin/default/2D/img_txn24.png',
    type: 'male',
  },
  {
    id: 25,
    image_url: 'https://cdntoos.hwylaws.cc/siteadmin/default/2D/img_txn25.png',
    type: 'male',
  },
  {
    id: 26,
    image_url: 'https://cdntoos.hwylaws.cc/siteadmin/default/2D/img_txn26.png',
    type: 'male',
  },
  {
    id: 'my-img-20ac493c-6a7b-4ce6-83f5-df916e616578',
    image_url: 'https://cdntoos.hwylaws.cc/siteadmin/default/2D/img_ntx1.png',
    type: 'female',
  },
  {
    id: 'my-img-8547a1e4-2172-4279-a632-289c634196bf',
    image_url: 'https://cdntoos.hwylaws.cc/siteadmin/default/2D/img_ntx2.png',
    type: 'female',
  },
  {
    id: 'my-img-06d687cf-5f13-4e64-8dd2-665bafac9dc6',
    image_url: 'https://cdntoos.hwylaws.cc/siteadmin/default/2D/img_ntx3.png',
    type: 'female',
  },
  {
    id: 'my-img-45b38ff6-5495-4305-9577-9dc2fc1d143e',
    image_url: 'https://cdntoos.hwylaws.cc/siteadmin/default/2D/img_ntx4.png',
    type: 'female',
  },
  {
    id: 'my-img-5d4ee857-f1b5-4666-922f-cd5074655657',
    image_url: 'https://cdntoos.hwylaws.cc/siteadmin/default/2D/img_ntx5.png',
    type: 'female',
  },
  {
    id: 'my-img-eff895cc-c2e1-43ac-ad7c-5d3ef99c95e9',
    image_url: 'https://cdntoos.hwylaws.cc/siteadmin/default/2D/img_ntx6.png',
    type: 'female',
  },
  {
    id: 'my-img-4ceca59f-bbd5-48a6-98bd-318850a6554d',
    image_url: 'https://cdntoos.hwylaws.cc/siteadmin/default/2D/img_ntx7.png',
    type: 'female',
  },
  {
    id: 'my-img-eb71260e-d7a1-4d4b-acb7-a61fb4144dc4',
    image_url: 'https://cdntoos.hwylaws.cc/siteadmin/default/2D/img_ntx8.png',
    type: 'female',
  },
  {
    id: 'my-img-82e6f693-0210-40f5-b4f6-84b355454025',
    image_url: 'https://cdntoos.hwylaws.cc/siteadmin/default/2D/img_ntx9.png',
    type: 'female',
  },
  {
    id: 'my-img-a3f1c49e-54a5-4e1e-8690-790a49506ac2',
    image_url: 'https://cdntoos.hwylaws.cc/siteadmin/default/2D/img_ntx10.png',
    type: 'female',
  },
  {
    id: 'my-img-116744aa-23db-464e-9a40-d50961b3d145',
    image_url: 'https://cdntoos.hwylaws.cc/siteadmin/default/2D/img_ntx11.png',
    type: 'female',
  },
  {
    id: 'my-img-91cd681d-2a83-443d-9646-d7bd92cf94e5',
    image_url: 'https://cdntoos.hwylaws.cc/siteadmin/default/2D/img_ntx12.png',
    type: 'female',
  },
  {
    id: 'my-img-a8c95243-a673-4ffc-a96f-a848a9c78043',
    image_url: 'https://cdntoos.hwylaws.cc/siteadmin/default/2D/img_ntx13.png',
    type: 'female',
  },
  {
    id: 'my-img-fbdf0fd6-d38d-454b-947f-e23bb1d679fe',
    image_url: 'https://cdntoos.hwylaws.cc/siteadmin/default/2D/img_ntx14.png',
    type: 'female',
  },
  {
    id: 'my-img-320b6680-1d98-4c83-af39-03a10d4603af',
    image_url: 'https://cdntoos.hwylaws.cc/siteadmin/default/2D/img_ntx15.png',
    type: 'female',
  },
  {
    id: 'my-img-acb98e10-c65d-400a-9c73-189f72f6142c',
    image_url: 'https://cdntoos.hwylaws.cc/siteadmin/default/2D/img_ntx16.png',
    type: 'female',
  },
  {
    id: 'my-img-90485f18-776b-4d22-ac6f-54384056d178',
    image_url: 'https://cdntoos.hwylaws.cc/siteadmin/default/2D/img_ntx17.png',
    type: 'female',
  },
  {
    id: 'my-img-b3193afe-d5bd-4e0e-a38a-1aad04c8a6ed',
    image_url: 'https://cdntoos.hwylaws.cc/siteadmin/default/2D/img_ntx18.png',
    type: 'female',
  },
  {
    id: 'my-img-870084a3-d3d9-4f86-9e5a-c4a970855205',
    image_url: 'https://cdntoos.hwylaws.cc/siteadmin/default/2D/img_ntx19.png',
    type: 'female',
  },
  {
    id: 'my-img-65499044-631e-4308-a1f0-39e9da241f05',
    image_url: 'https://cdntoos.hwylaws.cc/siteadmin/default/2D/img_ntx20.png',
    type: 'female',
  },
  {
    id: 'my-img-bbd3b986-04c1-4aa0-b6d1-c195953efdc2',
    image_url: 'https://cdntoos.hwylaws.cc/siteadmin/default/2D/img_ntx21.png',
    type: 'female',
  },
  {
    id: 'my-img-ff03d4cd-6258-47f2-a5fe-df5d21ef4243',
    image_url: 'https://cdntoos.hwylaws.cc/siteadmin/default/2D/img_ntx22.png',
    type: 'female',
  },
  {
    id: 'my-img-860dd989-25b7-4711-9a52-7bab275082da',
    image_url: 'https://cdntoos.hwylaws.cc/siteadmin/default/2D/img_ntx23.png',
    type: 'female',
  },
  {
    id: 'my-img-83bd0124-ac7f-4670-bb7c-18d6ff7ebc9c',
    image_url: 'https://cdntoos.hwylaws.cc/siteadmin/default/2D/img_ntx24.png',
    type: 'female',
  },
  {
    id: 'my-img-948003df-7313-4506-acf0-be22c51c6af4',
    image_url: 'https://cdntoos.hwylaws.cc/siteadmin/default/2D/img_ntx25.png',
    type: 'female',
  },
])
const filteredData = computed(() => {
  return imageDataList.value.filter((data) => data.type === selectedIndex.value)
});

const changeSelectedTab = (index: string) => {
  selectedIndex.value = index
}
</script>
