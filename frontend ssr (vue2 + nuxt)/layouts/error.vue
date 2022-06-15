<template>
  <app-layout>
    <div class="text-slate-900 p-6 max-w-screen-xl mx-auto text-center">
      <div v-if="error.statusCode === 404">
        <div class="text-3xl">Page not found</div>
        <div class="text-xl">Maybe you will find what you were looking for :)</div>
      </div>
      <h1 v-else>An error occurred</h1>
    </div>
  </app-layout>
</template>

<script>
  import AppLayout from '@/layouts/AppLayout';
  export default {
    props: ['error'],
    components: {
      AppLayout,
    },
  }
</script>
