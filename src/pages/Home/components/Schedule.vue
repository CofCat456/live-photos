<script setup>
import ScheduleCard from './ScheduleCard.vue';

import news01 from '@/assets/news01.jpg';
import news02 from '@/assets/news02.jpg';
import news03 from '@/assets/news03.jpg';

const scheduleList = [
  {
    title: '高雄體驗會｜免費參加送帆布袋',
    date: '2021-6-20',
    text: '大家安安！謝謝每位贊助者的熱情支持，讓我們離夢想更進一步，我們將於下個月舉辦體驗會，歡迎各位踴躍參與！',
    imgUrl: news01,
  },
  {
    title: '高雄體驗會｜免費參加送帆布袋',
    date: '2021-6-20',
    text: '大家安安！謝謝每位贊助者的熱情支持，讓我們離夢想更進一步，我們將於下個月舉辦體驗會，歡迎各位踴躍參與！',
    imgUrl: news02,
  },
  {
    title: '高雄體驗會｜免費參加送帆布袋',
    date: '2021-6-20',
    text: '大家安安！謝謝每位贊助者的熱情支持，讓我們離夢想更進一步，我們將於下個月舉辦體驗會，歡迎各位踴躍參與！',
    imgUrl: news03,
  },
];
</script>

<template>
  <div class="pb-4 sm:pb-2">
    <template v-for="schedule in scheduleList" :key="schedule.title">
      <ScheduleCard v-bind="schedule" />
    </template>
  </div>
</template>
