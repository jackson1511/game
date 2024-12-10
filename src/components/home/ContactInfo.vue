<script setup lang="ts">
import { Typography } from 'ant-design-vue'

const { Title } = Typography

const contacts = [
  {
    id: 1,
    icon: 'https://cdntoos.hwylaws.cc/siteadmin/upload/img/telegram.avif',
    link: 'https://t.me/hwyx8',
  },
  {
    id: 2,
    icon: 'https://cdntoos.hwylaws.cc/siteadmin/upload/img/telegram.avif',
    link: 'https://t.me/hwyx7',
  },
]

const partners = [
  {
    id: 1,
    image: 'https://cdntoos.hwylaws.cc/siteadmin/upload/img/1735961786617348098.avif',
    alt: 'BBN',
  },
  {
    id: 2,
    image: 'https://cdntoos.hwylaws.cc/siteadmin/upload/img/1735961832447713282.avif',
    alt: 'Asia Gaming',
  },
  {
    id: 3,
    image: 'https://cdntoos.hwylaws.cc/siteadmin/upload/img/1735964081103446017.avif',
    alt: 'PG Soft',
  },
  {
    id: 4,
    image: 'https://cdntoos.hwylaws.cc/siteadmin/upload/img/1815739974640013314.avif',
    alt: 'FA Chai',
  },
  {
    id: 5,
    image: 'https://cdntoos.hwylaws.cc/siteadmin/upload/img/1735961938187395073.avif',
    alt: 'Panda Sports',
  },
]

const licenses = [
  {
    id: 1,
    image: 'https://pubsgppp.c1oudfront.com/siteadmin/template/img_license_plate1.png',
    alt: 'MGA License',
  },
  {
    id: 2,
    image: 'https://pubsgppp.c1oudfront.com/siteadmin/template/img_license_plate2.png',
    alt: 'GLI Certificate',
  },
  {
    id: 3,
    image: 'https://pubsgppp.c1oudfront.com/siteadmin/template/img_license_plate4.png',
    alt: 'PAGCOR License',
  },
  {
    id: 4,
    image: 'https://pubsgppp.c1oudfront.com/siteadmin/template/img_license_plate3.png',
    alt: 'GC License',
  },
]
</script>

<template>
  <div class="contact-info">
    <div class="contact-section">
      <div class="contact-block">
        <Title :level="3" class="section-title">Contact Us</Title>
        <div class="contact-icons">
          <a-space size="middle">
            <a v-for="contact in contacts" :key="contact.id" :href="contact.link" target="_blank">
              <a-image :src="contact.icon" :width="50" :preview="false" />
            </a>
            <a-image
              src="https://cdntoos.hwylaws.cc/siteadmin/skin/lobby_asset/common/common/common/18plus.avif"
              :width="50"
              :preview="false"
            />
          </a-space>
        </div>
      </div>
      <div class="contact-block">
        <Title :level="3" class="section-title">Official channel</Title>
        <a-image
          src="https://cdntoos.hwylaws.cc/siteadmin/officialcommunity/img_gfpd_telegram.png"
          :width="50"
          :preview="false"
        />
      </div>
    </div>

    <!-- Partners -->
    <div class="partners">
      <a-image
        v-for="partner in partners"
        :key="partner.id"
        :src="partner.image"
        :alt="partner.alt"
        :preview="false"
        :width="60"
      />
    </div>

    <!-- Licenses -->
    <div class="licenses">
      <a-image
        v-for="license in licenses"
        :key="license.id"
        :src="license.image"
        :alt="license.alt"
        :preview="false"
        :width="80"
      />
    </div>

    <!-- Description -->
    <div class="description">
      <span class="description-text">
        汇旺娱乐是针对海外游戏爱好者开设的线上综合娱乐平台，主要运营游戏真人视讯,电子游艺,棋牌扑克,捕鱼达人,彩票竞猜,体育赛事等。公司对接正规官方品牌游戏商，公平诚信，高效存取，安全隐私，诚信打造全球知名线上博彩品牌。千万资金秒下分，上下分无忧；24小时客服Telegram账号
      </span>
      <a-button type="link" size="small" style="color: #26a17b"> @hwyx8 </a-button>
      <a-button type="link" size="small" style="color: #26a17b"> @hwyx7 </a-button>
    </div>

    <!-- Footer Section -->
    <div class="footer-section">
      <div class="disclaimer">
        本站面向海外用户，只支持美金和USDT充值，不支持人民币充值，请中国用户不要违法赌博。
      </div>
      <a-divider type="vertical" style="height: 65px" />
      <div class="copyright">@汇旺娱乐 版权所有 2002-2024</div>
    </div>
  </div>
</template>

<style scoped>
.contact-info {
  padding: 48px 24px;
  background: #f8f8f8;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 30px;
}

.contact-section {
  display: flex;
  justify-content: space-between;
  gap: 24px;
}

.contact-block {
  flex: 1;
}

.section-title {
  font-size: 16px;
  margin-bottom: 24px !important;
  color: #666;
}

.partners,
.licenses {
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.description-text {
  color: #666;
  font-size: 12px;
}

.footer-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}

.disclaimer {
  flex: 1;
  color: #666;
  font-size: 12px;
  text-align: right;
}

.copyright {
  flex: 1;
  color: #999;
  font-size: 12px;
  text-align: left;
}
</style>
