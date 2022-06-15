<template>
  <div :class="$attrs.class">
    <label v-if="label" class="form-label" :class="{'label-error' : error}" :for="id">{{ label }}:</label>
    <textarea :id="id" ref="input" v-bind="$attrs" class="form-textarea" :class="{ error: error }" :value="value" @input="$emit('input', $event.target.value)" />
    <div  class="form-error" v-for="e in error" :key="e">{{ e }}</div>
  </div>
</template>

<script>
import { v4 as uuid } from 'uuid'
export default {
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      default() {
        return `textarea-input-${uuid()}`
      },
    },
    error: Array,
    label: String,
    value: String,
  },
  emits: ['input'],
  methods: {
    focus() {
      this.$refs.input.focus()
    },
    select() {
      this.$refs.input.select()
    },
  },
}
</script>

<style lang="postcss" scoped>
.form-label {
  @apply mb-1 block text-slate-600 dark:text-slate-400 select-none;
    &.label-error{
     @apply text-red-600;
  }
}

.form-textarea {
  @apply text-slate-600 border p-1 dark:text-slate-200 bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600 focus:border-slate-300 focus:ring focus:ring-transparent rounded-md shadow-sm w-full;

  &::placeholder {
    @apply text-slate-400 opacity-100;
  }
}

.form-textarea.error {
  @apply border-red-600 focus:ring focus:outline-none;
}

.form-error {
  @apply text-red-600 text-sm;
}
</style>
