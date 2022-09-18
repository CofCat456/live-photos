<script setup>
import { ref, onMounted } from 'vue';

import { useForm, Form, Field, ErrorMessage } from 'vee-validate';

const props = defineProps(['formSchema', 'button_width', 'button_text']);

const onSubmit = (values) => {
  console.log(JSON.stringify(values, null, 2));
};
</script>

<template>
  <Form @submit="onSubmit" v-slot="{ values, errors }">
    <div
      v-for="{ as, name, label, children, ...attrs } in formSchema.fields"
      :key="name"
      class="mb-4"
    >
      <label :for="name" class="text-sm text-photo-font2 sm:text-base">
        {{ label }}
      </label>
      <Field
        :class="[
          ['input', 'mt-2'],
          errors.hasOwnProperty(name) &&
            'border border-[#FF785E] text-[#FF785E]',
          children && values?.[name] === children[0].value
            ? 'text-[#999999]'
            : '',
        ]"
        :as="as"
        :name="name"
        v-bind="attrs"
      >
        <template v-if="children && children.length">
          <component
            v-for="({ tag, text, ...childAttrs }, idx) in children"
            :key="idx"
            :is="tag"
            v-bind="childAttrs"
          >
            {{ text }}
          </component>
        </template>
      </Field>
      <template v-if="name === 'login_password'">
        <p :class="['mt-2', 'text-sm text-photo-button', 'cursor-pointer']">
          忘記密碼？
        </p>
      </template>
      <ErrorMessage :name="name" class="mt-1 text-sm text-[#F48263]" />
    </div>
    <button
      :disabled="Object.keys(errors).length > 0"
      :class="[
        [
          'yellow-btn',
          'h-[52px] w-full sm:max-w-[176px]',
          'block',
          'mx-auto',
          'rounded-[26px]',
          'text-xl',
          'disabled:opacity-90',
        ],
        button_width === 'full' && 'w-full',
      ]"
    >
      {{ button_text }}
    </button>
  </Form>
</template>
