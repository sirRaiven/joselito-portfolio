<script setup lang="ts">
import portrait from "~/assets/images/joselito-portrait.png";

const { profile } = usePortfolioData();
</script>

<template>
  <section id="home" class="relative overflow-hidden border-b-2 border-black bg-white">
    <div class="editorial-container relative py-10 sm:py-14 lg:py-20">
      <div class="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <div class="relative z-10">
          <div class="mb-8 flex flex-wrap items-center gap-3">
            <span class="mono-label border-2 border-black bg-[#C6FF33] px-3 py-2 text-black">
              Graphic Design × Technology
            </span>
            <span class="mono-label text-neutral-500">Portfolio / 2026</span>
          </div>

          <p class="mono-label mb-3 text-[#7D39EB]">Creative educator</p>
          <h1 class="display-type text-[clamp(4.2rem,11vw,10.5rem)] uppercase text-black">
            Joselito
            <span class="block text-stroke">Faylogna</span>
          </h1>

          <div class="mt-9 grid max-w-4xl gap-7 border-t-2 border-black pt-6 md:grid-cols-[0.85fr_1.15fr]">
            <p class="text-xl font-black uppercase leading-tight sm:text-2xl">
              Graphic Designer<br>
              <span class="text-[#7D39EB]">& IT Instructor</span>
            </p>
            <div>
              <p class="max-w-2xl text-base leading-7 text-neutral-700 sm:text-lg">
                {{ profile.tagline }}
              </p>
              <div class="mt-5 flex flex-wrap gap-3">
                <UButton
                  to="#work"
                  label="View selected work"
                  trailing-icon="i-lucide-arrow-down-right"
                  class="!rounded-none !border-2 !border-black !bg-black !px-5 !py-3 !font-black !text-white hover:!bg-[#7D39EB]"
                />
                <UButton
                  :to="`mailto:${profile.email}`"
                  label="Start a conversation"
                  trailing-icon="i-lucide-arrow-up-right"
                  class="!rounded-none !border-2 !border-black !bg-white !px-5 !py-3 !font-black !text-black hover:!bg-[#C6FF33]"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="relative mx-auto w-full max-w-lg lg:mx-0 lg:ml-auto">
          <div class="absolute -left-5 -top-5 h-[78%] w-[78%] bg-[#7D39EB] sm:-left-8 sm:-top-8" />
          <div class="absolute -bottom-5 -right-5 h-32 w-32 bg-[#C6FF33] sm:-bottom-8 sm:-right-8 sm:h-40 sm:w-40" />

          <div class="relative border-2 border-black bg-white p-3 sm:p-4">
            <div class="relative aspect-[3/4] overflow-hidden bg-neutral-100">
              <img
                :src="portrait"
                :alt="`${profile.name} portrait`"
                class="h-full w-full object-cover object-center"
              >
              <div class="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 bg-black px-4 py-3 text-white">
                <span class="mono-label !text-[10px]">Portrait / Profile</span>
                <span class="size-3 bg-[#C6FF33]" />
              </div>
            </div>
          </div>

          <div class="absolute -left-7 bottom-8 hidden border-2 border-black bg-[#C6FF33] px-3 py-5 md:block">
            <span class="vertical-label mono-label text-black">Design / Teach / Create</span>
          </div>
        </div>
      </div>
    </div>

    <div class="overflow-hidden border-t-2 border-black bg-[#C6FF33] py-3">
      <div class="marquee-track flex w-max whitespace-nowrap">
        <div v-for="copy in 2" :key="copy" class="flex items-center gap-8 pr-8 text-sm font-black uppercase tracking-[0.09em]">
          <span>Visual Design</span><span>✦</span>
          <span>UI & Digital Products</span><span>✦</span>
          <span>IT Instruction</span><span>✦</span>
          <span>Creative Technology</span><span>✦</span>
          <span>Visual Design</span><span>✦</span>
          <span>UI & Digital Products</span><span>✦</span>
          <span>IT Instruction</span><span>✦</span>
          <span>Creative Technology</span><span>✦</span>
        </div>
      </div>
    </div>
  </section>
</template>
