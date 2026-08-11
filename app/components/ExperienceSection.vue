<script setup lang="ts">
const { experience, extracurricular } = usePortfolioData();
</script>

<template>
  <section id="experience" class="border-b-2 border-black bg-white py-16 sm:py-20 lg:py-24">
    <div class="editorial-container">
      <div class="grid gap-10 lg:grid-cols-[0.35fr_1fr] lg:gap-16">
        <div class="lg:sticky lg:top-28 lg:self-start">
          <p class="mono-label text-[#7D39EB]">Experience / 04</p>
          <h2 class="mt-4 text-5xl font-black uppercase tracking-[-0.05em] sm:text-6xl">Work<br>history.</h2>
          <p class="mt-5 max-w-xs text-sm leading-6 text-neutral-600">A mix of creative practice, technology instruction, office support, and data-oriented internship experience.</p>
        </div>

        <div>
          <article v-for="(item, index) in experience" :key="item.id" class="grid gap-4 border-t-2 border-black py-7 sm:grid-cols-[110px_1fr] sm:gap-7">
            <div><span class="text-4xl font-black" :class="index % 2 === 0 ? 'text-[#7D39EB]' : 'text-black'">0{{ index + 1 }}</span></div>
            <div>
              <div class="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div><h3 class="text-xl font-black uppercase tracking-tight sm:text-2xl">{{ item.title }}</h3><p class="mt-1 font-bold text-[#7D39EB]">{{ item.company }}</p></div>
                <span class="mono-label w-fit bg-[#C6FF33] px-2 py-1 text-black">{{ item.duration }}</span>
              </div>
              <p class="mt-4 max-w-3xl leading-7 text-neutral-700">{{ item.description }}</p>
              <ul class="mt-4 grid gap-2 md:grid-cols-2">
                <li v-for="highlight in item.highlights" :key="highlight" class="flex gap-2 text-sm leading-6 text-neutral-700"><span class="mt-2 size-2 shrink-0 bg-black" />{{ highlight }}</li>
              </ul>
            </div>
          </article>

          <div class="mt-10 border-2 border-black bg-[#F2F2F2] p-6 sm:p-8">
            <p class="mono-label text-[#7D39EB]">Community & entrepreneurship</p>
            <div class="mt-5 grid gap-6 md:grid-cols-2">
              <div v-for="item in extracurricular" :key="item.role" class="border-t-2 border-black pt-4">
                <p class="text-xl font-black uppercase">{{ item.role }}</p>
                <p class="mt-1 font-bold text-[#7D39EB]">{{ item.organization }}</p>
                <p class="mono-label mt-2 !text-[9px] text-neutral-500">{{ item.duration }}</p>
                <p class="mt-3 text-sm leading-6 text-neutral-700">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
