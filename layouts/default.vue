<template>
  <div class="base-layout relative max-layout p-6 flex flex-col overflow-hidden">
    <Header />
    <main class="my-6">
      <slot />
    </main>
    <hr class="mb-6"/>
    <Footer class="mt-auto" />
  </div>
</template>
<script lang="ts" setup>

</script>
<style lang="scss">
.base-layout {
  min-height: 100vh;
  position: relative;
  
  &::before {
    content: '';
    @apply bg-white;
    position: absolute;
    z-index: -1;
    right: 0.4rem;
    top: 0.4rem;
    left: 0.4rem;
    bottom: 0.4rem;
  }
}
</style>