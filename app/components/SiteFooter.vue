<script setup lang="ts">
const { profile } = usePortfolioData();
const year = new Date().getFullYear();
</script>

<template>
  <footer class="bg-white py-7 text-black">
    <div class="editorial-container flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div class="flex items-center gap-3"><span class="grid size-9 place-items-center bg-black text-xs font-black text-white">JF</span><div><p class="text-sm font-black uppercase">{{ profile.shortName }}</p><p class="mono-label !text-[8px] text-neutral-500">Graphic Designer / IT Instructor</p></div></div>
      <p class="mono-label !text-[9px] text-neutral-500">© {{ year }} • Portfolio built with Nuxt UI</p>
    </div>
  </footer>
</template>
