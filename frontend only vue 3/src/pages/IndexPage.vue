<template>
  <app-layout title="Test Work">
      <Hero/>
  </app-layout>
</template>

<script>
import AppLayout from '@/layouts/AppLayout';
import Hero from '@/components/HeroHome';

export default {
  components: {
    AppLayout,
    Hero
  },
}
</script>
