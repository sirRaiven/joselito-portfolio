<script setup lang="ts">
const { projects } = usePortfolioData();
const featured = projects[0];
const secondary = projects.slice(1);
</script>

<template>
  <section id="work" class="border-b-2 border-black bg-black py-16 text-white sm:py-20 lg:py-24">
    <div class="editorial-container">
      <div class="mb-10 flex flex-col gap-5 border-b border-white/30 pb-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p class="mono-label text-[#C6FF33]">Selected work / 01—03</p>
          <h2 class="display-type mt-3 text-5xl uppercase sm:text-7xl lg:text-8xl">Work that<br>connects ideas.</h2>
        </div>
        <p class="max-w-xl text-sm leading-6 text-white/65 sm:text-base">
          Selected academic, product, and freelance work showing how design, technology, and practical problem-solving come together.
        </p>
      </div>

      <article v-if="featured" class="grid border-2 border-white lg:grid-cols-[0.92fr_1.08fr]">
        <div class="relative min-h-[430px] overflow-hidden bg-[#7D39EB] p-6 sm:p-9">
          <div class="absolute inset-0 diagonal-pattern opacity-30" />
          <div class="relative z-10 flex h-full flex-col justify-between">
            <div class="flex items-start justify-between gap-5">
              <span class="text-7xl font-black sm:text-9xl">{{ featured.number }}</span>
              <span class="mono-label border border-white/60 px-3 py-2">{{ featured.year }}</span>
            </div>
            <div class="project-device max-w-sm border-2 border-black bg-white p-3 text-black">
              <div class="border-2 border-black bg-[#C6FF33] p-4">
                <div class="flex items-center justify-between border-b-2 border-black pb-3">
                  <span class="text-sm font-black uppercase">AquaArdent</span>
                  <UIcon name="i-lucide-waves" class="size-5" />
                </div>
                <div class="grid grid-cols-2 gap-3 pt-4">
                  <div class="border-2 border-black bg-white p-3"><p class="mono-label !text-[9px]">Feeder</p><p class="mt-4 text-2xl font-black">AUTO</p></div>
                  <div class="border-2 border-black bg-black p-3 text-white"><p class="mono-label !text-[9px] text-[#C6FF33]">Status</p><p class="mt-4 text-2xl font-black">LIVE</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-between bg-white p-7 text-black sm:p-10 lg:p-12">
          <div>
            <p class="mono-label text-[#7D39EB]">{{ featured.category }}</p>
            <h3 class="mt-4 text-4xl font-black uppercase tracking-[-0.04em] sm:text-5xl">{{ featured.title }}</h3>
            <p class="mt-2 text-lg font-bold">{{ featured.subtitle }}</p>
            <p class="mt-6 max-w-2xl text-base leading-7 text-neutral-700">{{ featured.description }}</p>
            <div class="mt-7 grid gap-3 sm:grid-cols-2">
              <div v-for="highlight in featured.highlights" :key="highlight" class="border-t-2 border-black pt-3 text-sm leading-6">
                {{ highlight }}
              </div>
            </div>
          </div>
          <div class="mt-8 flex flex-wrap items-end justify-between gap-5 border-t-2 border-black pt-5">
            <div><p class="mono-label text-neutral-500">Role</p><p class="mt-1 font-black">{{ featured.role }}</p></div>
            <div class="flex flex-wrap gap-2">
              <span v-for="tool in featured.tools" :key="tool" class="border border-black px-2.5 py-1 text-xs font-bold uppercase">{{ tool }}</span>
            </div>
          </div>
        </div>
      </article>

      <div class="mt-6 grid gap-6 lg:grid-cols-2">
        <article v-for="project in secondary" :key="project.id" class="group border-2 border-white bg-white text-black">
          <div :class="project.accent === 'lime' ? 'bg-[#C6FF33]' : 'bg-white'" class="relative min-h-64 overflow-hidden border-b-2 border-black p-6">
            <div class="flex items-start justify-between"><span class="text-7xl font-black">{{ project.number }}</span><span class="mono-label">{{ project.year }}</span></div>
            <div v-if="project.id === 2" class="absolute bottom-7 right-8 w-44 border-2 border-black bg-black p-3 text-white shadow-[10px_10px_0_#7D39EB]">
              <div class="mb-10 flex items-center justify-between"><span class="mono-label !text-[9px]">NeatApp</span><UIcon name="i-lucide-box" class="size-4 text-[#C6FF33]" /></div>
              <div class="space-y-2"><div class="h-2 bg-[#7D39EB]"/><div class="h-2 w-3/4 bg-white"/><div class="h-2 w-1/2 bg-[#C6FF33]"/></div>
            </div>
            <div v-else class="absolute bottom-7 right-8 grid grid-cols-2 gap-2">
              <div class="size-16 bg-[#7D39EB]"/><div class="size-16 bg-[#C6FF33]"/><div class="size-16 border-2 border-black bg-white"/><div class="size-16 bg-black"/>
            </div>
          </div>
          <div class="p-6 sm:p-8">
            <p class="mono-label text-[#7D39EB]">{{ project.category }}</p>
            <h3 class="mt-3 text-3xl font-black uppercase tracking-[-0.03em]">{{ project.title }}</h3>
            <p class="mt-4 leading-7 text-neutral-700">{{ project.description }}</p>
            <div class="mt-6 flex flex-wrap gap-2"><span v-for="tool in project.tools" :key="tool" class="bg-black px-2.5 py-1 text-xs font-bold uppercase text-white">{{ tool }}</span></div>
          </div>
        </article>
      </div>

      <div class="mt-8 border border-dashed border-white/40 p-5 text-sm leading-6 text-white/60">
        <span class="font-black text-[#C6FF33]">Portfolio note:</span> Additional client-approved logos, social media graphics, posters, videos, and 3D work can be added here later without changing the layout system.
      </div>
    </div>
  </section>
</template>
