<script setup lang="ts">
const { profile } = usePortfolioData();
const mobileOpen = ref(false);

const navigation = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Awards", href: "#awards" },
  { label: "Contact", href: "#contact" },
];

const { $printResume } = useNuxtApp();

const printResume = () => {
  if (!import.meta.client) return;

  const resume = document.getElementById("resume-print-source");

  if (resume) {
    $printResume(resume);
  }
};

const closeMenu = () => {
  mobileOpen.value = false;
};
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b-2 border-[#181818] bg-[#F2F0EA]/95 backdrop-blur-sm"
  >
    <div
      class="editorial-container flex h-[72px] items-center justify-between gap-6"
    >
      <!-- =========================================
           BRAND
      ========================================== -->

      <a
        href="#home"
        class="group flex items-center gap-3"
        aria-label="Joselito Faylogna portfolio home"
      >
        <!-- JF MARK -->
        <span
          class="relative grid size-11 place-items-center overflow-hidden border-2 border-[#181818] bg-[#181818] text-sm font-black text-[#F2F0EA] shadow-[4px_4px_0_#E63B20] transition-transform duration-200 group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-[2px_2px_0_#E63B20]"
        >
          <!-- Signal indicator -->
          <span class="absolute right-0 top-0 size-3 bg-[#E63B20]" />

          <span class="relative"> JF </span>
        </span>

        <!-- NAME -->
        <span class="hidden leading-tight sm:block">
          <span
            class="block text-sm font-black uppercase tracking-tight text-[#181818]"
          >
            {{ profile.shortName }}
          </span>

          <span
            class="mono-label mt-0.5 block !text-[9px] !tracking-[0.08em] text-[#858585]"
          >
            Graphic Designer / IT Instructor
          </span>
        </span>
      </a>

      <!-- =========================================
           DESKTOP NAVIGATION
      ========================================== -->

      <nav
        class="hidden items-center gap-7 lg:flex"
        aria-label="Primary navigation"
      >
        <a
          v-for="(item, index) in navigation"
          :key="item.href"
          :href="item.href"
          class="group relative flex items-center gap-2 text-xs font-black uppercase tracking-[0.08em] text-[#181818]"
        >
          <!-- Section number -->
          <span class="font-mono text-[9px] font-bold text-[#858585]">
            0{{ index + 1 }}
          </span>

          {{ item.label }}

          <!-- Hover indicator -->
          <span
            class="absolute -bottom-2 left-0 h-0.5 w-0 bg-[#E63B20] transition-all duration-200 group-hover:w-full"
          />
        </a>
      </nav>

      <!-- =========================================
           ACTIONS
      ========================================== -->

      <div class="flex items-center gap-2">
        <!-- RESUME -->
        <UButton
          class="hidden !rounded-none !border-2 !border-[#181818] !bg-[#E63B20] !px-4 !font-black !text-[#F2F0EA] shadow-[4px_4px_0_#181818] transition-all duration-200 hover:translate-x-[2px] hover:translate-y-[2px] hover:!bg-[#181818] hover:shadow-none md:inline-flex"
          label="Résumé"
          trailing-icon="i-lucide-arrow-up-right"
          @click="printResume"
        />

        <!-- MOBILE MENU -->
        <button
          type="button"
          class="grid size-11 place-items-center border-2 border-[#181818] bg-[#F2F0EA] text-[#181818] transition-colors duration-200 hover:bg-[#E63B20] hover:text-[#F2F0EA] lg:hidden"
          :aria-expanded="mobileOpen"
          aria-label="Toggle navigation menu"
          @click="mobileOpen = !mobileOpen"
        >
          <UIcon
            :name="mobileOpen ? 'i-lucide-x' : 'i-lucide-menu'"
            class="size-5"
          />
        </button>
      </div>
    </div>

    <!-- =========================================
         MOBILE NAVIGATION
    ========================================== -->

    <div
      v-if="mobileOpen"
      class="border-t-2 border-[#181818] bg-[#E63B20] text-[#F2F0EA] lg:hidden"
    >
      <nav class="editorial-container grid py-4" aria-label="Mobile navigation">
        <a
          v-for="(item, index) in navigation"
          :key="item.href"
          :href="item.href"
          class="group flex items-center justify-between border-b border-[#F2F0EA]/30 py-4 text-xl font-black uppercase transition-all duration-200 hover:pl-3"
          @click="closeMenu"
        >
          <span class="flex items-center gap-3">
            <span class="font-mono text-[10px] text-[#F2F0EA]/60">
              0{{ index + 1 }}
            </span>

            {{ item.label }}
          </span>

          <UIcon
            name="i-lucide-arrow-up-right"
            class="size-5 transition-transform duration-200 group-hover:rotate-45"
          />
        </a>

        <!-- MOBILE RESUME -->
        <button
          class="mt-4 flex items-center justify-between border-2 border-[#181818] bg-[#F2F0EA] px-4 py-4 text-left text-lg font-black uppercase text-[#181818] shadow-[5px_5px_0_#181818] transition-all duration-200 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
          @click="
            printResume();
            closeMenu();
          "
        >
          <span>Print / Save Résumé</span>

          <UIcon name="i-lucide-printer" class="size-5" />
        </button>
      </nav>
    </div>
  </header>
</template>
