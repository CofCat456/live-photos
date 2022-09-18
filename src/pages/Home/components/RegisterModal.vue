<script setup>
import { ref, onMounted } from 'vue';
import { string, ref as yupRef } from 'yup';

import Modal from '@/components/Modal.vue';

const props = defineProps(['goToLoginModal']);

const emit = defineEmits(['pushRegisterModal']);

const RegisterModalDom = ref(null);

onMounted(() => {
  pushRegisterModal();
});

function pushRegisterModal() {
  let tempModal = {
    open() {
      RegisterModalDom.value?.open();
    },
    close() {
      RegisterModalDom.value?.close();
    },
  };

  emit('pushRegisterModal', tempModal);
}

const formSchema = {
  fields: [
    {
      label: '電子信箱',
      name: 'register_email',
      as: 'input',
      type: 'email',
      rules: string().email('請輸入正確的郵件格式').required('請輸入信箱'),
    },
    {
      label: '姓名',
      name: 'register_name',
      as: 'input',
      type: 'text',
      rules: string().required('請輸入姓名'),
    },
    {
      label: '密碼',
      name: 'register_password',
      as: 'input',
      type: 'password',
      rules: string().required('請輸入密碼'),
    },
    {
      label: '請再次輸入密碼',
      name: 'register_password2',
      as: 'input',
      type: 'password',
      rules: string()
        .required('請再次輸入密碼')
        .oneOf([yupRef('register_password')], '兩次密碼輸入不同，請重新確認'),
    },
  ],
};
</script>

<template>
  <Modal :formSchema="formSchema" button_text="註冊" ref="RegisterModalDom">
    <template v-slot:modalTitle>註冊</template>
    <template v-slot:modalFotter>
      <div :class="['w-full', 'mb-6', 'flex items-center']">
        <div class="h-[1px] flex-1 bg-[#E8E8DB]"></div>
        <p
          :class="['px-4', 'leading-5 text-photo-sp', 'cursor-pointer']"
          @click="goToLoginModal"
        >
          已有會員按此登入
        </p>
        <div class="h-[1px] flex-1 bg-[#E8E8DB]"></div>
      </div>
    </template>
  </Modal>
</template>
