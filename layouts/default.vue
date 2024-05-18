<template>
  <div class="base-layout p-5 flex flex-col">
    <Header />
    <main>
      <slot />
    </main>
    <Footer class="mt-auto" />
  </div>
</template>
<script lang="ts" setup>

</script>
<style lang="scss">
.base-layout {
  min-height: 100vh;
  position: relative;
  max-width: 52rem;
  margin-left: auto;
  margin-right: auto;
  
  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    right: 0.5rem;
    top: 0.5rem;
    left: 0.5rem;
    bottom: 0.5rem;
    border: 2px solid #BACD92;
    border-radius: 1rem;
  }
}
</style>