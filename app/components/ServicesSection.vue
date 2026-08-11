<script setup lang="ts">
const { services } = usePortfolioData();
</script>

<template>
  <section class="border-b-2 border-black bg-[#7D39EB] py-16 text-white sm:py-20 lg:py-24">
    <div class="editorial-container">
      <div class="grid gap-8 lg:grid-cols-[0.55fr_1fr]">
        <div><p class="mono-label text-[#C6FF33]">What I do / 03</p><h2 class="display-type mt-4 text-6xl uppercase sm:text-8xl">Useful<br>creative<br>work.</h2></div>
        <div class="grid border-l-2 border-t-2 border-white/70 sm:grid-cols-2">
          <article v-for="service in services" :key="service.number" class="min-h-64 border-b-2 border-r-2 border-white/70 p-6 sm:p-8">
            <div class="flex items-start justify-between gap-4"><span class="text-5xl font-black text-[#C6FF33]">{{ service.number }}</span><UIcon :name="service.icon" class="size-7" /></div>
            <h3 class="mt-10 text-2xl font-black uppercase">{{ service.title }}</h3>
            <p class="mt-3 text-sm leading-6 text-white/75">{{ service.description }}</p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
