<script setup lang="ts">
const { profile } = usePortfolioData();
</script>

<template>
  <section
    id="contact"
    class="relative overflow-hidden border-b border-[#343434] bg-[#181818] py-16 text-[#F2F0EA] sm:py-20 lg:py-28"
  >
    <!-- Technical Grid -->
    <div
      class="pointer-events-none absolute inset-0 opacity-40"
      style="
        background-image:
          linear-gradient(
            to right,
            rgb(255 255 255 / 0.04) 1px,
            transparent 1px
          ),
          linear-gradient(
            to bottom,
            rgb(255 255 255 / 0.04) 1px,
            transparent 1px
          );
        background-size: 32px 32px;
      "
    />

    <!-- Decorative Technical Circle -->
    <div
      class="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full border-[2px] border-[#343434]"
    />

    <div
      class="pointer-events-none absolute -right-12 -top-12 size-56 rounded-full border-[1px] border-[#E63B20]"
    />

    <!-- Crosshair -->
    <div class="absolute right-[18%] top-[18%] hidden size-6 md:block">
      <span
        class="absolute left-1/2 top-0 h-6 w-px -translate-x-1/2 bg-[#E63B20]"
      />
      <span
        class="absolute left-0 top-1/2 h-px w-6 -translate-y-1/2 bg-[#E63B20]"
      />
    </div>

    <div class="editorial-container relative z-10">
      <!-- Section Meta -->
      <div class="flex items-center gap-3 border-b border-[#343434] pb-4">
        <span class="size-2 bg-[#E63B20]" />

        <p class="mono-label text-[#E63B20]">Contact / 07</p>

        <span class="ml-auto mono-label text-[#858585]">
          CONNECTION // AVAILABLE
        </span>
      </div>

      <div class="mt-8 grid gap-10 lg:grid-cols-[1fr_0.48fr] lg:items-end">
        <!-- Main Copy -->
        <div>
          <div class="mb-5 flex items-center gap-3">
            <span class="mono-label text-[#858585]"> Let's build </span>

            <span class="h-px w-16 bg-[#343434]" />
          </div>

          <h2 class="display-type text-[clamp(4rem,10vw,9rem)] uppercase">
            Let's make
            <br />

            <span class="text-[#E63B20]"> something </span>

            <br />

            useful.
          </h2>

          <p class="mt-8 max-w-2xl text-lg leading-8 text-[#858585] sm:text-xl">
            Open to conversations around graphic design, creative technology,
            instructional work, and practical digital projects.
          </p>

          <!-- Technical Metadata -->
          <div
            class="mt-8 grid max-w-xl grid-cols-2 border-l border-t border-[#343434] sm:grid-cols-3"
          >
            <div class="border-b border-r border-[#343434] p-4">
              <p class="mono-label text-[#858585]">MODE</p>

              <p class="mt-2 font-mono text-xs font-bold">CREATIVE</p>
            </div>

            <div class="border-b border-r border-[#343434] p-4">
              <p class="mono-label text-[#858585]">STATUS</p>

              <p class="mt-2 font-mono text-xs font-bold text-[#E63B20]">
                AVAILABLE
              </p>
            </div>

            <div class="border-b border-r border-[#343434] p-4">
              <p class="mono-label text-[#858585]">RESPONSE</p>

              <p class="mt-2 font-mono text-xs font-bold">24–48 H</p>
            </div>
          </div>
        </div>

        <!-- Contact Card -->
        <div
          class="relative border border-[#F2F0EA] bg-[#222222] p-6 shadow-[10px_10px_0_#E63B20] sm:p-8"
        >
          <!-- Card Header -->
          <div
            class="flex items-center justify-between border-b border-[#343434] pb-4"
          >
            <p class="mono-label text-[#E63B20]">Direct Contact</p>

            <span
              class="flex items-center gap-2 font-mono text-[10px] uppercase text-[#858585]"
            >
              <span class="size-2 bg-[#E63B20]" />
              Online
            </span>
          </div>

          <!-- Email -->
          <a
            :href="`mailto:${profile.email}`"
            class="mt-6 block break-all font-mono text-lg font-black text-[#F2F0EA] underline decoration-[#E63B20] decoration-2 underline-offset-4 transition-colors hover:text-[#E63B20]"
          >
            {{ profile.email }}
          </a>

          <!-- LinkedIn -->
          <a
            :href="profile.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-6 flex items-center justify-between border-t border-[#343434] pt-4 text-sm font-bold uppercase tracking-wide transition-colors hover:text-[#E63B20]"
          >
            <span>LinkedIn</span>

            <UIcon name="i-lucide-arrow-up-right" class="size-4" />
          </a>

          <!-- Email Button -->
          <UButton
            :to="`mailto:${profile.email}`"
            label="Send an email"
            trailing-icon="i-lucide-send"
            class="mt-6 w-full !rounded-none !border !border-[#E63B20] !bg-[#E63B20] !px-5 !py-3 !font-black !uppercase !text-white transition-all hover:!translate-x-1 hover:!translate-y-1 hover:!bg-[#F2F0EA] hover:!text-[#181818]"
          />

          <!-- Card Footer -->
          <div
            class="mt-6 flex justify-between border-t border-[#343434] pt-4 font-mono text-[9px] uppercase tracking-[0.12em] text-[#858585]"
          >
            <span>JDF / 07</span>
            <span>ENDPOINT: CONTACT</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Marquee -->
    <div
      class="relative mt-16 overflow-hidden border-y border-[#F2F0EA] bg-[#E63B20] py-3 text-white"
    >
      <div
        class="flex w-max animate-[contactMarquee_20s_linear_infinite] gap-8 whitespace-nowrap font-mono text-xs font-black uppercase tracking-[0.12em]"
      >
        <template v-for="copy in 3" :key="copy">
          <span>Let's Connect</span>
          <span>✦</span>
          <span>Design + Technology</span>
          <span>✦</span>
          <span>Build Something Useful</span>
          <span>✦</span>
        </template>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes contactMarquee {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-33.333%);
  }
}
</style>
