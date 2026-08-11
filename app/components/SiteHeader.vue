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

const printResume = () => {
  if (import.meta.client) window.print();
};

const closeMenu = () => {
  mobileOpen.value = false;
};
</script>

<template>
  <header class="sticky top-0 z-50 border-b-2 border-black bg-white/95 backdrop-blur-sm">
    <div class="editorial-container flex h-[72px] items-center justify-between gap-6">
      <a href="#home" class="group flex items-center gap-3" aria-label="Joselito Faylogna portfolio home">
        <span class="relative grid size-11 place-items-center overflow-hidden bg-black text-sm font-black text-white">
          <span class="absolute right-0 top-0 size-4 bg-[#C6FF33]" />
          <span class="relative">JF</span>
        </span>
        <span class="hidden leading-tight sm:block">
          <span class="block text-sm font-black uppercase tracking-tight">{{ profile.shortName }}</span>
          <span class="mono-label mt-0.5 block !text-[9px] !tracking-[0.08em] text-neutral-500">
            Graphic Designer / IT Instructor
          </span>
        </span>
      </a>

      <nav class="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
        <a
          v-for="item in navigation"
          :key="item.href"
          :href="item.href"
          class="group relative text-xs font-black uppercase tracking-[0.08em]"
        >
          {{ item.label }}
          <span class="absolute -bottom-2 left-0 h-0.5 w-0 bg-[#7D39EB] transition-all duration-200 group-hover:w-full" />
        </a>
      </nav>

      <div class="flex items-center gap-2">
        <UButton
          class="hidden !rounded-none !border-2 !border-black !bg-[#C6FF33] !px-4 !font-black !text-black hover:!bg-black hover:!text-white md:inline-flex"
          label="Résumé"
          trailing-icon="i-lucide-arrow-up-right"
          @click="printResume"
        />

        <button
          type="button"
          class="grid size-11 place-items-center border-2 border-black bg-white lg:hidden"
          :aria-expanded="mobileOpen"
          aria-label="Toggle navigation menu"
          @click="mobileOpen = !mobileOpen"
        >
          <UIcon :name="mobileOpen ? 'i-lucide-x' : 'i-lucide-menu'" class="size-5" />
        </button>
      </div>
    </div>

    <div v-if="mobileOpen" class="border-t-2 border-black bg-[#C6FF33] lg:hidden">
      <nav class="editorial-container grid py-4" aria-label="Mobile navigation">
        <a
          v-for="item in navigation"
          :key="item.href"
          :href="item.href"
          class="flex items-center justify-between border-b border-black/25 py-4 text-xl font-black uppercase"
          @click="closeMenu"
        >
          {{ item.label }}
          <UIcon name="i-lucide-arrow-down-right" class="size-5" />
        </a>
        <button
          class="mt-4 flex items-center justify-between bg-black px-4 py-4 text-left text-lg font-black uppercase text-white"
          @click="printResume(); closeMenu()"
        >
          Print / Save Résumé
          <UIcon name="i-lucide-printer" class="size-5" />
        </button>
      </nav>
    </div>
  </header>
</template>
