<script setup lang="ts">
const { profile } = usePortfolioData();
</script>

<template>
  <section id="about" class="grid-paper border-b-2 border-black bg-white py-16 sm:py-20 lg:py-24">
    <div class="editorial-container grid gap-10 lg:grid-cols-[0.42fr_1fr] lg:gap-16">
      <div>
        <p class="mono-label text-[#7D39EB]">Creative profile / 02</p>
        <h2 class="mt-4 text-4xl font-black uppercase tracking-[-0.04em] sm:text-5xl">Design.<br>Teach.<br>Keep learning.</h2>
      </div>
      <div>
        <p class="text-balance text-3xl font-black leading-tight tracking-[-0.035em] sm:text-4xl lg:text-5xl">
          I work across <span class="bg-[#C6FF33] px-1">graphic design</span>, technology, and education.
        </p>
        <div class="mt-8 grid gap-6 md:grid-cols-2">
          <p class="text-base leading-7 text-neutral-700">{{ profile.intro }}</p>
          <p class="text-base leading-7 text-neutral-700">{{ profile.about }}</p>
        </div>
        <div class="mt-10 grid grid-cols-2 gap-px border-2 border-black bg-black sm:grid-cols-4">
          <div class="bg-white p-5"><p class="mono-label text-neutral-500">Design</p><p class="mt-2 text-2xl font-black">Visual</p></div>
          <div class="bg-[#7D39EB] p-5 text-white"><p class="mono-label text-white/70">Technology</p><p class="mt-2 text-2xl font-black">Digital</p></div>
          <div class="bg-[#C6FF33] p-5"><p class="mono-label text-black/60">Teaching</p><p class="mt-2 text-2xl font-black">Practical</p></div>
          <div class="bg-black p-5 text-white"><p class="mono-label text-white/60">Approach</p><p class="mt-2 text-2xl font-black">Clear</p></div>
        </div>
      </div>
    </div>
  </section>
</template>
