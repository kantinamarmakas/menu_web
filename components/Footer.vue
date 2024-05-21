<template>
  <footer class="flex flex-col items-center font-primary">
    <div class="flex items-center gap-1 text-primary">
      <Icon class="fill-primary" name="mdi:phone"/>
      <a target="_blank" href="tel:+306947327102">+30 694 732 7102</a>
    </div>
    <div class="flex items-center gap-1 text-primary">
      <Icon class="fill-primary" name="mdi:location"/>
      <a target="_blank" rel="noopener noreferrer" href="https://maps.app.goo.gl/9PQZ6tC2BLQWHVB37">Location</a>
    </div>
    <div class="flex items-center">
      <select v-model="lang" class="p-2 text-sm">
        <option value="en_US">🇺🇸 English</option>
        <option value="el_GR">🇬🇷 Ελληνικά</option>
        <option value="it_IT">🇮🇹 Italiano</option>
      </select>
    </div>
  </footer>
</template>
<script lang="ts" setup>
const { getLocale, setLocale } = useLang();
const lang = ref(getLocale.value);

watch(lang, (newValue) => {
  setLocale(newValue);
})
</script>