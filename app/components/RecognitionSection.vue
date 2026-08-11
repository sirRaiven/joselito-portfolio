<script setup lang="ts">
const { recognition } = usePortfolioData();
</script>

<template>
  <section id="awards" class="border-b-2 border-black bg-[#C6FF33] py-16 sm:py-20 lg:py-24">
    <div class="editorial-container">
      <div class="grid gap-10 lg:grid-cols-[0.5fr_1fr]">
        <div><p class="mono-label">Recognition / 05</p><h2 class="display-type mt-4 text-6xl uppercase sm:text-8xl">Awards<br>& milestones.</h2></div>
        <div class="border-t-2 border-black">
          <article v-for="(item, index) in recognition" :key="item.title" class="grid gap-4 border-b-2 border-black py-7 sm:grid-cols-[90px_100px_1fr] sm:items-start">
            <span class="text-4xl font-black">0{{ index + 1 }}</span>
            <span class="mono-label pt-2">{{ item.year }}</span>
            <div><h3 class="text-2xl font-black uppercase tracking-tight">{{ item.title }}</h3><p class="mt-2 max-w-2xl leading-7 text-black/70">{{ item.description }}</p></div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
