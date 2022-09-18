<script setup>
import { ref } from '@vue/reactivity';

const props = defineProps(['LoginModal', 'RegisterModal']);

const status = ref(false);

const headerList = ['關於', '挖寶', '我有個大膽的想法'];

const toggleMenu = () => {
  status.value = !status.value;
};
</script>

<template>
  <header :class="['flex', 'py-4', 'border-b-[5px] border-photo-primary']">
    <div
      :class="[
        'w-full max-w-[1115px]',
        'flex flex-wrap items-center',
        'mx-auto',
      ]"
    >
      <div class="flex">
        <img
          src="../assets/logo.jpg"
          alt="Logo"
          :class="['w-[111px]', 'ml-4 mr-6 sm:ml-0', 'object-cover']"
        />
        <ul class="hidden items-center sm:flex">
          <template v-for="li in headerList" :key="li">
            <li
              :class="[
                'mx-6',
                'text-photo-secondary hover:text-photo-font',
                'cursor-pointer',
              ]"
            >
              {{ li }}
            </li>
          </template>
        </ul>
      </div>
      <button :class="['h-8 w-8', 'ml-auto mr-3']" @click="toggleMenu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          :class="['h-8 w-8', 'inline-flex lg:hidden', 'text-photo-button']"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <div class="ml-auto hidden lg:flex">
        <button
          :class="[
            'yellow-btn',
            'h-[38px] w-[96px]',
            'mr-4 ',
            'rounded-[19px]',
          ]"
          @click="LoginModal?.open"
        >
          登入
        </button>
        <button
          :class="['gray-btn', 'h-[38px] w-[96px]', 'rounded-[19px]']"
          @click="RegisterModal?.open"
        >
          註冊
        </button>
      </div>
      <div
        :class="[
          [' w-full', 'block', 'duration-700', 'overflow-hidden'],
          status ? 'max-h-[300px]' : 'max-h-0',
        ]"
      >
        <ul :class="['items-center sm:flex', 'px-3 pt-4']">
          <template v-for="li in headerList" :key="li">
            <li
              :class="[
                'w-full',
                'py-2 lg:mx-6',
                'items-center justify-center',
                'rounded',
                'text-photo-secondary hover:text-photo-font',
                'cursor-pointer',
              ]"
            >
              {{ li }}
            </li>
          </template>
        </ul>
        <div :class="['flex flex-col', 'my-1 ml-auto px-3']">
          <button
            :class="['yellow-btn', 'h-[38px] w-full', 'my-2', 'rounded-[19px]']"
            @click="LoginModal?.open"
          >
            登入
          </button>
          <button
            :class="['gray-btn', 'h-[38px] w-full', 'my-2', 'rounded-[19px]']"
            @click="RegisterModal?.open"
          >
            註冊
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
