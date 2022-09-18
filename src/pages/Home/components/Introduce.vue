<script setup>
import ProjectCard from './ProjectCard.vue';

import p1 from '@/assets/p1.jpg';
import p2 from '@/assets/p2.jpg';

const projectList = [
  {
    title: '施了魔法的照片',
    imgUrl: p1,
    text: '受就相法大夠局來畫師我只這然以放灣得的後人心年我物我年，或人有動與次出女親構算帶年行著所間女，外成認心香吸工並知日成展源大超時動為生葉衣致長山對精做英密差家他微熱建取示濟定心一，品定把別銀動，深青輪一物加，生明果。西業白老如天有表非民大條全那遊，李文遊、像香過元學須本致信校態麼資司媽人價在它，地他不我計孩廠然不大指勢生的華常簡岸然，人著母病石金萬得一果。',
  },
  {
    title: '留下當下的美好',
    imgUrl: p2,
    text: '受就相法大夠局來畫師我只這然以放灣得的後人心年我物我年，或人有動與次出女親構算帶年行著所間女，外成認心香吸工並知日成展源大超時動為生葉衣致長山對精做英密差家他微熱建取示濟定心一，品定把別銀動，深青輪一物加，生明果。西業白老如天有表非民大條全那遊，李文遊、像香過元學須本致信校態麼資司媽人價在它，地他不我計孩廠然不大指勢生的華常簡岸然，人著母病石金萬得一果。',
  },
];
</script>

<template>
  <div class="pb-4 sm:pb-0">
    <template v-for="project in projectList" :key="project.title">
      <ProjectCard v-bind="project" />
    </template>
  </div>
</template>
