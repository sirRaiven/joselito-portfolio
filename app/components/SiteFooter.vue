<script setup lang="ts">
const { profile } = usePortfolioData();
const year = new Date().getFullYear();
</script>

<template>
  <footer class="border-t-2 border-[#181818] bg-[#F2F0EA] py-7 text-[#181818]">
    <div
      class="editorial-container flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"
    >
      <!-- Identity -->
      <div class="flex items-center gap-3">
        <span
          class="grid size-10 place-items-center border-2 border-[#181818] bg-[#E63B20] text-sm font-black text-[#F2F0EA] shadow-[4px_4px_0_#181818]"
        >
          JF
        </span>

        <div>
          <p class="text-sm font-black uppercase tracking-tight">
            {{ profile.shortName }}
          </p>

          <p class="mono-label !text-[8px] text-[#858585]">
            Graphic Designer / IT Instructor
          </p>
        </div>
      </div>

      <!-- Technical Footer Info -->
      <div class="flex flex-col gap-2 sm:items-end">
        <p class="mono-label !text-[9px] text-[#858585]">
          © {{ year }} • Portfolio built with Nuxt UI
        </p>

        <div class="flex items-center gap-2">
          <span class="size-2 bg-[#E63B20]" />
          <span class="mono-label !text-[8px] text-[#181818]">
            SYSTEM ONLINE
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>
