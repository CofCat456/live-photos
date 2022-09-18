<script setup>
import Accordion from '@/components/Accordion.vue';

const questionList = [
  {
    title: '影片拍完之後可以編輯嗎？',
    text: '可以進行簡易的編輯，內建 5 種濾鏡，影片秒數有3秒、5秒、10秒可以選擇，拍完的當下可以編輯要印出來的影片範圍哦！',
  },
  {
    title: '有提供保固或維修服務嗎？',
    text: '商品在購買日算起，提供為期三個月的商品保固服務 保固卡為本公司提供維修服務依據，若遺失則不提供保固期間內免費維修服務，請客戶妥善保存該商品之保固卡。',
  },
  {
    title: '補充包底片要去哪裡購買呢？',
    text: '到專門的底向商店購買就可以囉！之後在線上商城中也可以直接購買補充包。',
  },
  {
    title: '印出來的拍立得照片需要充電嗎？',
    text: '不用，照片拍出後需等待 3~5 分鐘才能完全顯影，在顯影前，請避免陽光直射、勿揮舞、彎折、按壓或摩擦照片。',
  },
  {
    title: '運送方式及付款方式有哪些呢？',
    text: '提供 超商貨到付款 及 宅配貨到付款。',
  },
  {
    title: '退換貨方式及規則',
    text: '收到商品當日請立即查核相關配件與主體外觀及數量，在未確認商品使用無虞前，請務必保留發票及商品原包裝 ( 如：外包裝紙箱、使用手冊、產品保證書、周邊配件...等,交付商品時之ㄧ切配備 )， 收到商品當日查核相關配件與主體外觀及數量有異常時，要立即停止使用商品並立即通知本公司處理退貨換貨程序。',
  },
];
</script>

<template>
  <div class="pb-4 sm:pb-2">
    <template v-for="(question, index) in questionList" :key="question.title">
      <Accordion v-bind="question" :index="index" />
    </template>
  </div>
</template>
