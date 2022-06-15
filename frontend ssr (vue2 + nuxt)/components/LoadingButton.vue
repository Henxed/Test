<template>
<!-- Поставлю заглушку btn-default, обычно её не пишем, потому что цвет может быть любой -->
  <button :disabled="loading" class="flex btn-default items-center justify-center">
    <div v-if="loading" class="btn-spinner mr-2" />
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    loading: Boolean,
  },
}
</script>

<style lang="postcss" scoped>
.btn-default {
    @apply bg-indigo-500 text-white p-2 px-4 rounded-xl text-center hover:bg-indigo-600 cursor-pointer;
}

.btn-spinner,
.btn-spinner:after {
  border-radius: 50%;
  width: 1.5em;
  height: 1.5em;
}

.btn-spinner {
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 0.2em solid white;
  border-right: 0.2em solid white;
  border-bottom: 0.2em solid white;
  border-left: 0.2em solid transparent;
  transform: translateZ(0);
  animation: spinning 1s infinite linear;
}

@keyframes spinning {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
