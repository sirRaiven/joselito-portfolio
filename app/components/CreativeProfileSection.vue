<script setup lang="ts">
const { profile } = usePortfolioData();

const rotatingWords = [
  "GRAPHIC DESIGN",
  "DIGITAL TECHNOLOGY",
  "EDUCATION",
  "VISUAL COMMUNICATION",
  "CREATIVE SYSTEMS",
];

const activeWord = ref("");
const isDeleting = ref(false);

let wordIndex = 0;
let typingTimer: ReturnType<typeof setTimeout>;

const typeWord = () => {
  const currentWord = rotatingWords[wordIndex];

  if (!isDeleting.value) {
    // TYPE LETTER BY LETTER
    activeWord.value = currentWord.slice(0, activeWord.value.length + 1);

    if (activeWord.value === currentWord) {
      // Pause when the word is completely typed
      typingTimer = setTimeout(() => {
        isDeleting.value = true;
        typeWord();
      }, 1800);

      return;
    }

    typingTimer = setTimeout(typeWord, 75);
  } else {
    // DELETE LETTER BY LETTER
    activeWord.value = currentWord.slice(0, activeWord.value.length - 1);

    if (activeWord.value === "") {
      isDeleting.value = false;
      wordIndex = (wordIndex + 1) % rotatingWords.length;

      // Small pause before typing the next word
      typingTimer = setTimeout(typeWord, 350);

      return;
    }

    typingTimer = setTimeout(typeWord, 45);
  }
};

onMounted(() => {
  typeWord();
});

onBeforeUnmount(() => {
  clearTimeout(typingTimer);
});
</script>

<template>
  <section
    id="about"
    class="relative overflow-hidden border-b border-[#343434] bg-[#F2F0EA] py-16 sm:py-20 lg:py-24"
  >
    <!-- Technical Grid -->
    <div
      class="pointer-events-none absolute inset-0 opacity-40"
      style="
        background-image:
          linear-gradient(to right, rgb(0 0 0 / 0.045) 1px, transparent 1px),
          linear-gradient(to bottom, rgb(0 0 0 / 0.045) 1px, transparent 1px);
        background-size: 32px 32px;
      "
    />

    <div class="editorial-container relative z-10">
      <!-- SECTION HEADER -->
      <div
        class="flex items-center justify-between border-b-2 border-[#181818] pb-4"
      >
        <div class="flex items-center gap-3">
          <span class="size-2 bg-[#E63B20]" />

          <p class="mono-label text-[#E63B20]">Creative Profile / 02</p>
        </div>

        <p class="mono-label hidden text-[#858585] sm:block">
          SYSTEM / IDENTITY
        </p>
      </div>

      <!-- MAIN CONTENT -->
      <div class="mt-10">
        <!-- STATEMENT -->
        <div
          class="max-w-6xl text-balance text-4xl font-black leading-[0.95] tracking-[-0.045em] sm:text-5xl lg:text-7xl"
        >
          <p>I work across</p>

          <!-- TYPEWRITER WORD -->
          <div
            class="mt-4 inline-flex min-h-[1.15em] items-center overflow-hidden bg-[#E63B20] px-4 py-3 text-white"
          >
            <span class="inline-block whitespace-nowrap">
              {{ activeWord }}
            </span>

            <!-- Cursor -->
            <span
              class="ml-3 inline-block h-[0.8em] w-[3px] shrink-0 animate-pulse bg-white"
            />
          </div>

          <p class="mt-4">
            through technology, education, and practical problem-solving.
          </p>
        </div>

        <!-- MOTION INDICATOR -->
        <div class="mt-6 flex items-center gap-3">
          <div class="flex gap-1">
            <span
              v-for="(word, index) in rotatingWords"
              :key="word"
              class="size-1.5 transition-colors duration-300"
              :class="index === wordIndex ? 'bg-[#E63B20]' : 'bg-[#858585]/40'"
            />
          </div>

          <span
            class="font-mono text-[9px] font-bold uppercase tracking-[0.12em] text-[#858585]"
          >
            FOCUS /
            {{ String(wordIndex + 1).padStart(2, "0") }}
          </span>
        </div>

        <!-- DESCRIPTION -->
        <div
          class="mt-12 grid gap-8 border-t-2 border-[#181818] pt-8 md:grid-cols-2"
        >
          <div>
            <p class="mono-label mb-3 text-[#858585]">Introduction</p>

            <p class="max-w-2xl text-base leading-7 text-[#181818] sm:text-lg">
              {{ profile.intro }}
            </p>
          </div>

          <div>
            <p class="mono-label mb-3 text-[#858585]">About</p>

            <p class="max-w-2xl text-base leading-7 text-[#181818] sm:text-lg">
              {{ profile.about }}
            </p>
          </div>
        </div>

        <!-- CAPABILITY MATRIX -->
        <div class="mt-12">
          <div class="mb-3 flex items-center justify-between">
            <p class="mono-label text-[#858585]">Capability Matrix</p>

            <p class="mono-label text-[#858585]">04 / 04</p>
          </div>

          <div
            class="grid grid-cols-2 gap-px border-2 border-[#181818] bg-[#181818] sm:grid-cols-4"
          >
            <!-- VISUAL DESIGN -->
            <div
              class="group bg-[#F2F0EA] p-5 text-[#181818] transition-all duration-200 hover:-translate-y-1 hover:bg-[#181818] hover:text-white"
            >
              <div class="flex items-center justify-between">
                <p class="mono-label text-[#858585]">01</p>

                <span class="size-2 bg-[#E63B20]" />
              </div>

              <p class="mt-8 text-2xl font-black uppercase">Visual</p>

              <p class="mt-1 font-mono text-[10px] uppercase text-[#858585]">
                Design
              </p>
            </div>

            <!-- TECHNOLOGY -->
            <div
              class="group bg-[#181818] p-5 text-[#F2F0EA] transition-all duration-200 hover:-translate-y-1 hover:bg-[#E63B20]"
            >
              <div class="flex items-center justify-between">
                <p class="mono-label text-[#858585]">02</p>

                <span class="size-2 bg-[#E63B20] group-hover:bg-white" />
              </div>

              <p class="mt-8 text-2xl font-black uppercase">Digital</p>

              <p class="mt-1 font-mono text-[10px] uppercase text-[#858585]">
                Technology
              </p>
            </div>

            <!-- TEACHING -->
            <div
              class="group bg-[#E63B20] p-5 text-white transition-all duration-200 hover:-translate-y-1 hover:bg-[#181818]"
            >
              <div class="flex items-center justify-between">
                <p class="mono-label text-white/60">03</p>

                <span class="size-2 bg-white" />
              </div>

              <p class="mt-8 text-2xl font-black uppercase">Practical</p>

              <p class="mt-1 font-mono text-[10px] uppercase text-white/60">
                Teaching
              </p>
            </div>

            <!-- APPROACH -->
            <div
              class="group bg-[#181818] p-5 text-[#F2F0EA] transition-all duration-200 hover:-translate-y-1 hover:bg-[#E63B20]"
            >
              <div class="flex items-center justify-between">
                <p class="mono-label text-[#858585]">04</p>

                <span class="size-2 bg-[#E63B20] group-hover:bg-white" />
              </div>

              <p class="mt-8 text-2xl font-black uppercase">Clear</p>

              <p class="mt-1 font-mono text-[10px] uppercase text-[#858585]">
                Approach
              </p>
            </div>
          </div>
        </div>

        <!-- SYSTEM FOOTER -->
        <div
          class="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-[#181818] pt-4"
        >
          <p
            class="font-mono text-[10px] uppercase tracking-[0.12em] text-[#858585]"
          >
            Graphic Design + Technology + Education
          </p>

          <p
            class="font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-[#181818]"
          >
            STATUS:
            <span class="text-[#E63B20]"> ACTIVE </span>
          </p>
        </div>
      </div>
    </div>

    <!-- Bottom Accent -->
    <div class="absolute bottom-0 left-0 h-1 w-full bg-[#E63B20]" />
  </section>
</template>
