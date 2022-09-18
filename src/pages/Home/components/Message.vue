<script setup>
import MessageCard from './MessageCard.vue';

import user_img01 from '@/assets/user_img01.jpg';
import user_img02 from '@/assets/user_img02.jpg';
import user_img03 from '@/assets/user_img03.jpg';
import user_img04 from '@/assets/user_img04.jpg';

const messageList = [
  {
    user: '廖小杰',
    userImgUrl: user_img01,
    message:
      '晚上起床上廁所看到照片裡的人一直動其實有點恐怖，希望可以有暫停或是定時的功能！',
    time: '2020年5月22日 11:32',
    isResponse: true,
    responseText: '你要嘛起床的時候開燈，要嘛給我們更多錢開發阿',
  },
  {
    user: '卡阿伯',
    userImgUrl: user_img02,
    message: '希望有更多花色可以選擇！我女兒最近喜歡綠色',
    time: '2020年5月22日 11:32',
    isResponse: false,
  },
  {
    user: '賈師',
    userImgUrl: user_img03,
    message: '可以做個相簿功能嗎？拍出好看的影片再讓我們選擇要印出哪一張這樣',
    time: '2020年5月22日 11:32',
    isResponse: false,
  },
  {
    user: '俊俊',
    userImgUrl: user_img04,
    message: 'test123 看一下我是不是真的可以留言',
    time: '2020年5月22日 11:32',
    isResponse: false,
  },
];
</script>

<template>
  <div class="pb-4 sm:pb-2">
    <div
      :class="[
        'mb-8 p-4',
        'rounded border-l-[3px] border-photo-primary bg-[#FEFEFE]',
      ]"
    >
      <p class="text-justify text-sm tracking-[0.7px] text-photo-font">
        只有本專案的贊助者才可以留言哦，如果有任何專案相關的問題，歡迎
        <span class="text-photo-sp">聯絡提案人</span>
        ！
      </p>
    </div>
    <template v-for="message in messageList" :key="message.name">
      <MessageCard v-bind="message" />
    </template>
  </div>
</template>
