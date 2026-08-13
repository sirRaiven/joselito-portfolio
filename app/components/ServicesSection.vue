<script setup lang="ts">
const { services } = usePortfolioData();
</script>

<template>
  <section
    id="services"
    class="services-section relative overflow-hidden border-b-2 border-[#181818] bg-[#F2F0EA] py-16 text-[#181818] sm:py-20 lg:py-28"
  >
    <!-- TECHNICAL BACKGROUND -->
    <div
      class="services-grid pointer-events-none absolute inset-0 opacity-30"
    />

    <div class="editorial-container relative z-10">
      <!-- =========================================
           HEADER
      ========================================== -->

      <div
        class="mb-12 grid gap-8 border-b-2 border-[#181818] pb-8 lg:grid-cols-[0.55fr_1fr]"
      >
        <div>
          <div class="flex flex-wrap items-center gap-3">
            <span
              class="mono-label border-2 border-[#181818] bg-[#E63B20] px-3 py-2 text-[#F2F0EA]"
            >
              WHAT I DO / 03
            </span>

            <span class="mono-label text-[#858585]"> SERVICE MATRIX </span>
          </div>

          <h2
            class="display-type mt-6 text-[clamp(4rem,9vw,8rem)] uppercase leading-[0.8]"
          >
            Useful
            <br />
            creative
            <br />
            <span class="text-[#E63B20]">work.</span>
          </h2>
        </div>

        <div
          class="flex flex-col justify-end lg:border-l-2 lg:border-[#181818] lg:pl-8"
        >
          <p class="mono-label text-[#E63B20]">
            Design × Technology × Education
          </p>

          <p
            class="mt-4 max-w-xl text-base leading-7 text-[#858585] sm:text-lg"
          >
            I combine visual design, digital technology, and instruction to
            create work that is not only visually strong, but useful,
            understandable, and practical.
          </p>

          <div class="mt-6 flex items-center gap-3">
            <span class="size-3 bg-[#E63B20]" />

            <span class="mono-label"> AVAILABLE FOR SELECTED PROJECTS </span>
          </div>
        </div>
      </div>

      <!-- =========================================
           SERVICE MATRIX
      ========================================== -->

      <div class="grid border-2 border-[#181818] bg-[#181818] sm:grid-cols-2">
        <article
          v-for="(service, index) in services"
          :key="service.number"
          class="service-card group relative min-h-[300px] overflow-hidden border-b-2 border-[#181818] bg-[#F2F0EA] p-6 transition-all duration-200 sm:p-8"
          :class="[
            index % 2 === 0 ? 'sm:border-r-2' : '',
            index >= services.length - 2 ? 'sm:border-b-0' : '',
          ]"
        >
          <!-- CARD GRID -->

          <div
            class="service-card-grid pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />

          <!-- LARGE NUMBER -->

          <span
            class="absolute -right-4 -top-7 select-none text-[9rem] font-black leading-none text-[#181818]/5 transition-colors duration-300 group-hover:text-[#E63B20]/15"
          >
            {{ service.number }}
          </span>

          <!-- TOP -->

          <div class="relative z-10 flex items-start justify-between">
            <!-- NUMBER -->

            <div
              class="flex size-12 items-center justify-center border-2 border-[#181818] bg-[#E63B20] text-[#F2F0EA] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            >
              <span class="font-mono text-sm font-black">
                {{ service.number }}
              </span>
            </div>

            <!-- ICON -->

            <div
              class="flex size-12 items-center justify-center border-2 border-[#181818] bg-[#F2F0EA] transition-all duration-300 group-hover:bg-[#181818] group-hover:text-[#F2F0EA]"
            >
              <UIcon :name="service.icon" class="size-6" />
            </div>
          </div>

          <!-- CONTENT -->

          <div class="relative z-10 mt-14">
            <div class="mb-3 flex items-center gap-3">
              <span class="h-1 w-8 bg-[#E63B20]" />

              <span class="mono-label text-[#858585]">
                SERVICE / 0{{ index + 1 }}
              </span>
            </div>

            <h3
              class="text-2xl font-black uppercase tracking-[-0.03em] sm:text-3xl"
            >
              {{ service.title }}
            </h3>

            <p class="mt-4 max-w-lg text-sm leading-7 text-[#858585]">
              {{ service.description }}
            </p>
          </div>

          <!-- BOTTOM TECHNICAL LABEL -->

          <div
            class="absolute bottom-5 left-6 right-6 flex items-center justify-between border-t border-[#181818]/30 pt-3"
          >
            <span class="font-mono text-[9px] font-bold text-[#858585]">
              SYSTEM / ACTIVE
            </span>

            <UIcon
              name="i-lucide-arrow-up-right"
              class="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </div>
        </article>
      </div>

      <!-- =========================================
           SERVICE FOOTER
      ========================================== -->

      <div
        class="mt-8 grid gap-px border-2 border-[#181818] bg-[#181818] sm:grid-cols-3"
      >
        <!-- APPROACH -->

        <div class="bg-[#181818] p-5 text-[#F2F0EA]">
          <span class="mono-label text-[#E63B20]"> APPROACH </span>

          <p class="mt-2 font-black uppercase">Purpose First</p>
        </div>

        <!-- PROCESS -->

        <div class="bg-[#F2F0EA] p-5 text-[#181818]">
          <span class="mono-label text-[#E63B20]"> PROCESS </span>

          <p class="mt-2 font-black uppercase">Design → Build → Refine</p>
        </div>

        <!-- OUTPUT -->

        <div class="bg-[#E63B20] p-5 text-[#F2F0EA]">
          <span class="mono-label"> OUTPUT </span>

          <p class="mt-2 font-black uppercase">Useful Systems</p>
        </div>
      </div>
    </div>
  </section>
</template>
