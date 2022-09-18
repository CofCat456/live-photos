<script setup>
import { computed, ref } from 'vue';

import { string } from 'yup';
import Swal from 'sweetalert2';

import Introduct from './components/Introduce.vue';
import Questions from './components/Questions.vue';
import Schedule from './components/Schedule.vue';
import Message from './components/Message.vue';

import Header from '@/components/Header.vue';
import Fotter from '@/components/Fotter.vue';
import Form from '@/components/Form.vue';

import Navbar from '@/pages/Home/components/Navbar.vue';
import PlanCard from './components/PlanCard.vue';
import LoginModal from './components/LoginModal.vue';
import RegisterModal from './components/RegisterModal.vue';

import icon_good01 from '@/assets/icon_good01.svg';
import icon_good02 from '@/assets/icon_good02.svg';
import icon_good03 from '@/assets/icon_good03.svg';
import icon_good04 from '@/assets/icon_good04.svg';

import plan_img from '@/assets/plan_img.jpg';

const currNav = ref('專案介紹');
const follow_status = ref(false);
const sponsorInfo = ref({
  plan: '請選擇一個方案',
  name: '',
  phone: '',
  email: '',
  pay: '信用卡付款',
});
const LoginModalObject = ref({});
const RegisterModalObject = ref({});

const product_svgList = [
  {
    title: '認證標章',
    imgUrl: icon_good01,
  },
  {
    title: '品質保證',
    imgUrl: icon_good02,
  },
  {
    title: '原生創意',
    imgUrl: icon_good03,
  },
  {
    title: '人氣王',
    imgUrl: icon_good04,
  },
];

const formSchema = {
  fields: [
    {
      label: '贊助方案',
      name: 'plan',
      value: '',
      as: 'select',
      children: [
        {
          tag: 'option',
          preset: true,
          disabled: true,
          value: '',
          text: '請選擇一個方案',
        },
        {
          tag: 'option',
          value: '買一送一，只有兩百組別錯過',
          text: '買一送一，只有兩百組別錯過',
        },
      ],
      rules: string().required('請至少選擇一種贊助方案'),
    },
    {
      label: '收件人姓名',
      name: 'name',
      as: 'input',
      type: 'text',
      rules: string().required('請輸入收件人姓名'),
    },
    {
      label: '聯絡電話',
      name: 'phone',
      as: 'input',
      type: 'number',
      rules: string().required('請輸入聯絡電話'),
    },
    {
      label: '聯絡信箱',
      name: 'email',
      as: 'input',
      type: 'email',
      rules: string().email('請輸入正確的郵件格式').required('請輸入聯絡信箱'),
    },
    {
      label: '付款方式',
      name: 'pay',
      value: '信用卡付款',
      as: 'select',
      children: [
        {
          tag: 'option',
          preset: true,
          value: '信用卡付款',
          text: '信用卡付款',
        },
      ],
      rules: string().required('請至少選擇一種付款方式'),
    },
  ],
};

const planList = [
  {
    title: '買一送一，只有兩百組別錯過',
    price: 'NT$ 1600',
    imgUrl: plan_img,
    donate_count: 88,
    quantity: 200,
    text: '受就相法大夠局來畫師我只這然以放灣得的後人心年我物我年，或人有動與次出女親構算帶年行著所間女。',
    flash_sale: '2 days 20:05:20',
  },
  {
    title: '買一送一，只有兩百組別錯過',
    price: 'NT$ 1600',
    imgUrl: plan_img,
    donate_count: 88,
    quantity: 200,
    text: '受就相法大夠局來畫師我只這然以放灣得的後人心年我物我年，或人有動與次出女親構算帶年行著所間女。',
    flash_sale: '2 days 20:05:20',
  },
  {
    title: '買一送一，只有兩百組別錯過',
    price: 'NT$ 1600',
    imgUrl: plan_img,
    donate_count: 88,
    quantity: 200,
    text: '受就相法大夠局來畫師我只這然以放灣得的後人心年我物我年，或人有動與次出女親構算帶年行著所間女。',
    flash_sale: '2 days 20:05:20',
  },
];

function changeNav(navItem) {
  currNav.value = navItem;
}

const changeFollowStatus = () => {
  follow_status.value = !follow_status.value;
  Swal.fire({
    toast: true,
    position: 'top-end',
    icon: follow_status.value ? 'success' : 'error',
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    title: follow_status.value ? '已開始追蹤！' : '已取消追蹤',
  });
};

const Component = computed(() => {
  switch (currNav.value) {
    case '專案介紹':
      return Introduct;
    case '常見問答':
      return Questions;
    case '目前進度':
      return Schedule;
    case '留言':
      return Message;
    default:
      return Introduct;
  }
});

const getLoginModal = (modal) => {
  LoginModalObject.value = {
    ...modal,
  };
};

const getRegisterModal = (modal) => {
  RegisterModalObject.value = {
    ...modal,
  };
};

const goToRegisterModal = () => {
  LoginModalObject?.value?.close();

  setTimeout(() => {
    RegisterModalObject?.value?.open();
  }, 400);
};

const goToLoginModal = () => {
  RegisterModalObject?.value?.close();

  setTimeout(() => {
    LoginModalObject?.value?.open();
  }, 400);
};
</script>

<template>
  <Header :LoginModal="LoginModalObject" :RegisterModal="RegisterModalObject" />
  <section class="bg-[#F8F9FA]">
    <div
      :class="[
        'w-full max-w-[1117px]',
        'mx-auto px-3 pt-4 pb-8 sm:px-0 sm:py-[47.9px]',
      ]"
    >
      <p
        :class="[
          'inline-block',
          'mb-2 px-4 py-[3px] sm:mb-1',
          'rounded-[4px] bg-photo-button',
          'text-xs text-white',
        ]"
      >
        魔法科技
      </p>
      <h1
        class="text-2xl font-bold tracking-[3px] text-photo-font sm:text-[32px] sm:leading-[47px]"
      >
        拍出會動的照片｜LivePhotos 魔法拍立得
      </h1>
      <div :class="['flex flex-col  sm:flex-row', 'mt-4 sm:mt-6']">
        <div :class="['w-full sm:w-7/12', 'mb-4 sm:mb-0 sm:pr-3']">
          <div
            :class="[
              'w-full',
              'rounded-2xl sm:rounded-[30px]',
              'overflow-hidden',
            ]"
          >
            <img
              src="@/assets/produt_image.jpg"
              alt="LivePhotos 魔法拍立得"
              class="w-full object-cover"
            />
          </div>
        </div>
        <div class="w-full sm:w-5/12 sm:pl-3">
          <p class="text-sm text-photo-secondary">目標 $600,000</p>
          <h3 class="text-[32px] font-bold leading-[56px] text-photo-font">
            $280,047
          </h3>
          <div
            :class="[
              'w-full',
              'mb-5',
              'rounded-lg bg-[#EEEEEE]',
              'overflow-hidden',
            ]"
          >
            <div
              :class="[
                'w-[41%]',
                'bg-photo-primary',
                'text-center text-xs font-bold text-photo-button',
              ]"
            >
              41%
            </div>
          </div>
          <div class="mb-2 flex">
            <div class="flex-1">
              <p class="text-sm text-photo-secondary">贊助人數</p>
              <h2 class="text-[32px] font-bold leading-[56px] text-photo-font">
                1374 人
              </h2>
            </div>
            <div class="flex-1">
              <p class="text-sm text-photo-secondary">募資倒數</p>
              <h2 class="text-[32px] font-bold leading-[56px] text-photo-font">
                27 天
              </h2>
            </div>
          </div>
          <div
            :class="[
              'h-6',
              'flex ',
              '-mx-[calc(20px/2)] mb-4 sm:-mx-[calc(25px/2)]',
            ]"
          >
            <template v-for="{ title, imgUrl } in product_svgList" :key="title">
              <div
                :class="[
                  'flex-1',
                  'relative',
                  'flex items-center justify-between',
                  'px-[calc(20px/2)] sm:flex-none sm:px-[calc(25px/2)]',
                  'cursor-pointer',
                ]"
              >
                <img
                  :src="imgUrl"
                  :alt="title + '的 icon'"
                  :class="['w-5 sm:w-6', 'sm:mr-0', 'object-cover', 'peer']"
                />
                <p
                  :class="[
                    'sm:hidden',
                    'text-xs leading-[18px] text-photo-secondary',
                  ]"
                >
                  {{ title }}
                </p>
                <div
                  :class="[
                    'w-[88px]',
                    'absolute left-1/2 bottom-8',
                    'hidden',
                    'p-1',
                    '-translate-x-1/2 rounded bg-photo-font',
                    'text-center text-sm tracking-[2px] text-photo-primary',
                    'sm:peer-hover:block',
                  ]"
                >
                  <div
                    :class="[
                      'w-4',
                      'absolute left-1/2 -bottom-2',
                      'inline-block',
                      '-translate-x-1/2',
                      'overflow-hidden',
                    ]"
                  >
                    <div
                      :class="[
                        'h-2 w-2',
                        'origin-top-left -rotate-45 bg-photo-font',
                        'z-50',
                      ]"
                    ></div>
                  </div>
                  {{ title }}
                </div>
              </div>
            </template>
          </div>
          <div
            :class="[
              'mb-4 p-4 py-[14px] sm:mb-6 sm:pl-4',
              'rounded-lg border-l-[3px] border-photo-primary bg-white',
              'text-sm text-photo-secondary sm:text-base',
            ]"
          >
            專案募資中！
            <br />
            在 2021/06/14 23:59 募資結束前，您都可以贊助我們！
          </div>
          <button
            :class="[
              'yellow-btn',
              'w-full',
              'block',
              'mx-auto mb-2 py-[8.5px] sm:py-3 ',
              'rounded-[26px]',
              'text-lg sm:text-xl',
            ]"
          >
            贊助專案
          </button>
          <div class="flex">
            <button
              :class="[
                [
                  'gray-btn',
                  'w-[59%]',
                  'flex items-center justify-center',
                  'mr-2 py-[8.5px] sm:py-3',
                  'rounded-[26px]',
                  'text-lg sm:text-xl',
                  'group',
                ],
                follow_status && 'border-photo-primary bg-photo-primary',
              ]"
              @click="changeFollowStatus"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                :class="[
                  [
                    'h-6 w-6',
                    'mr-2 ',
                    'duration-200',
                    'group-hover:fill-red-600',
                  ],
                  follow_status && 'fill-red-600',
                ]"
              >
                <path
                  d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"
                />
              </svg>

              追蹤專案
            </button>
            <button
              :class="[
                'gray-btn',
                'flex items-center justify-center',
                'w-[38%]',
                'mr-2 py-[8.5px] sm:py-3',
                'rounded-[26px]',
                'text-lg sm:text-xl',
                'group',
              ]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                :class="[
                  'h-6 w-6',
                  'mr-2',
                  'duration-300',
                  'group-hover:fill-blue-600',
                ]"
              >
                <path
                  fill-rule="evenodd"
                  d="M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z"
                  clip-rule="evenodd"
                />
              </svg>
              分享
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <Navbar :currNav="currNav" :changeNav="changeNav" />
    <div
      :class="[
        'w-full max-w-[1115px]',
        'flex flex-col sm:flex-row',
        'mx-auto px-3 sm:px-0',
      ]"
    >
      <div class="w-full sm:w-2/3 sm:pr-5">
        <component :is="Component" />
        <div :class="['w-full', 'hidden sm:block', 'pt-6']">
          <img
            src="@/assets/icon_heart.svg"
            alt="贊助"
            class="mx-auto mb-1 object-cover"
          />
          <div :class="['w-full', 'flex items-center', 'mb-6']">
            <div class="h-[3px] flex-1 bg-photo-primary"></div>
            <h3
              class="px-4 text-2xl font-bold tracking-[1.92px] text-photo-font"
            >
              贊助專案
            </h3>
            <div class="h-[3px] flex-1 bg-photo-primary"></div>
          </div>
          <Form
            :formSchema="formSchema"
            button_width="smail"
            button_text="贊助專案"
          />
        </div>
      </div>
      <div class="w-full sm:w-1/3 sm:pl-7">
        <div
          :class="['w-full', 'mb-8 p-4', 'rounded-lg border border-[#E5E5E5]']"
        >
          <div :class="['mb-4 sm:mb-0', 'flex items-center']">
            <div
              :class="[
                'mr-4',
                'rounded-full border-[3px] border-photo-primary',
                'overflow-hidden',
              ]"
            >
              <img
                src="@/assets/store_img.jpg"
                alt="store"
                class="w-[70px] object-cover sm:w-full"
              />
            </div>
            <p
              :class="[
                'flex-1',
                'text-lg font-medium tracking-[1.8px] text-photo-font sm:text-xl sm:tracking-[2px]',
              ]"
            >
              缺錢事務所
              <br />
              <span
                class="text-sm font-normal tracking-[0.61px] text-photo-font2 sm:text-base sm:leading-5"
              >
                已發起 1 個專案
              </span>
            </p>
          </div>
          <p
            :class="[
              'hidden',
              'my-4 sm:block',
              'text-justify tracking-[0.7px] text-photo-font2',
            ]"
          >
            需要點錢錢做些酷酷的東西，拜託各位乾爹乾媽囉！
          </p>
          <div class="flex justify-between">
            <div class="flex">
              <div
                :class="[
                  'h-[30px] w-[30px]',
                  'relative',
                  'mr-2 ',
                  'rounded-full bg-photo-button',
                ]"
              >
                <font-awesome-icon
                  icon="fa-brands fa-facebook-f"
                  :class="[
                    'absolute left-1/2 top-1/2',
                    '-translate-x-1/2 -translate-y-1/2',
                    'text-white',
                  ]"
                />
              </div>
              <div
                :class="[
                  'h-[30px] w-[30px]',
                  'relative',
                  'rounded-full bg-photo-button',
                ]"
              >
                <font-awesome-icon
                  icon="fa-brands fa-youtube"
                  :class="[
                    'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
                    'text-white',
                  ]"
                />
              </div>
            </div>

            <div
              :class="[
                'h-[30px] w-[101px]',
                'flex items-center justify-center',
                'rounded-[15px] border border-photo-button',
                'text-xs text-photo-button',
              ]"
            >
              <font-awesome-icon
                icon="fa-regular fa-comment-dots"
                class="mr-[5px] text-photo-button"
              />
              聯絡我們
            </div>
          </div>
        </div>
        <div
          :class="[
            'mb-4 py-[6px]',
            'rounded-lg border-x-4 border-photo-primary bg-[#F8F9FA]',
            'text-center text-xl tracking-[2px] text-photo-font',
          ]"
        >
          選擇一個方案來支持
        </div>
        <template v-for="plan in planList" :key="plan.title">
          <PlanCard v-bind="plan" />
        </template>
      </div>
      <div :class="['w-full', 'block sm:hidden', 'pt-4']">
        <img
          src="@/assets/icon_heart.svg"
          alt="贊助"
          class="mx-auto mb-1 object-cover"
        />
        <div :class="['w-full', 'flex items-center', 'mb-4 sm:mb-6']">
          <div class="h-[3px] flex-1 bg-photo-primary"></div>
          <h3
            :class="[
              'px-4',
              'text-xl font-bold tracking-[1.6px] text-photo-font sm:text-2xl sm:tracking-[1.92px]',
            ]"
          >
            贊助專案
          </h3>
          <div class="h-[3px] flex-1 bg-photo-primary"></div>
        </div>
        <Form
          :formSchema="formSchema"
          button_width="smail"
          button_text="贊助專案"
        />
      </div>
    </div>
  </section>
  <Fotter />
  <LoginModal
    :goToRegisterModal="goToRegisterModal"
    @pushLoginModal="getLoginModal"
  />
  <RegisterModal
    :goToLoginModal="goToLoginModal"
    @pushRegisterModal="getRegisterModal"
  />
</template>
