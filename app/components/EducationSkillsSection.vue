<script setup lang="ts">
const { education, skillGroups } = usePortfolioData();
</script>

<template>
  <section class="border-b-2 border-black bg-black py-16 text-white sm:py-20 lg:py-24">
    <div class="editorial-container grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
      <div>
        <p class="mono-label text-[#C6FF33]">Education / 06</p>
        <h2 class="mt-4 text-4xl font-black uppercase tracking-[-0.04em] sm:text-5xl">Academic foundation.</h2>
        <div class="mt-8 border-2 border-white p-6 sm:p-8">
          <span class="mono-label text-[#C6FF33]">{{ education.duration }}</span>
          <h3 class="mt-4 text-2xl font-black">{{ education.degree }}</h3>
          <p class="mt-2 text-white/70">{{ education.school }}</p>
          <div class="mt-6 flex flex-wrap gap-2"><span v-for="item in education.achievements" :key="item" class="border border-[#C6FF33] px-3 py-2 text-xs font-black uppercase text-[#C6FF33]">{{ item }}</span></div>
        </div>
      </div>

      <div>
        <p class="mono-label text-[#7D39EB]">Tools & skills</p>
        <div class="mt-5 grid border-l border-t border-white/30 sm:grid-cols-2">
          <div v-for="group in skillGroups" :key="group.name" class="border-b border-r border-white/30 p-6">
            <h3 class="text-xl font-black uppercase">{{ group.name }}</h3>
            <div class="mt-4 flex flex-wrap gap-2"><span v-for="item in group.items" :key="item" class="bg-white px-2.5 py-1.5 text-xs font-bold uppercase text-black">{{ item }}</span></div>
          </div>
        </div>
        <p class="mt-5 text-sm leading-6 text-white/55">Skills are presented as working tools rather than percentage ratings. The portfolio can be updated as new tools and stronger project evidence are added.</p>
      </div>
    </div>
  </section>
</template>
