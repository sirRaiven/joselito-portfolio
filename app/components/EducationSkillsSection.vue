<script setup lang="ts">
const { education, skillGroups } = usePortfolioData();
</script>

<template>
  <section
    class="relative overflow-hidden border-b border-[#343434] bg-[#181818] py-16 text-[#F2F0EA] sm:py-20 lg:py-24"
  >
    <!-- Technical Grid -->
    <div
      class="pointer-events-none absolute inset-0 opacity-30"
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
      class="pointer-events-none absolute -left-40 bottom-[-10rem] size-[30rem] rounded-full border border-[#343434]"
    />

    <div
      class="pointer-events-none absolute -left-24 bottom-[-6rem] size-[18rem] rounded-full border border-[#E63B20]"
    />

    <div class="editorial-container relative z-10">
      <!-- SECTION HEADER -->
      <div
        class="flex items-center justify-between border-b border-[#343434] pb-4"
      >
        <div class="flex items-center gap-3">
          <span class="size-2 bg-[#E63B20]" />

          <p class="mono-label text-[#E63B20]">Education / 06</p>
        </div>

        <p class="mono-label hidden text-[#858585] sm:block">
          SYSTEM / FOUNDATION
        </p>
      </div>

      <div class="mt-10 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <!-- =================================================
             EDUCATION
        ================================================== -->

        <div>
          <p class="mono-label text-[#858585]">01 / Academic Foundation</p>

          <h2
            class="mt-5 text-5xl font-black uppercase leading-[0.82] tracking-[-0.06em] sm:text-6xl"
          >
            Academic
            <br />

            <span class="text-[#E63B20]"> foundation. </span>
          </h2>

          <!-- Education Card -->
          <div
            class="relative mt-10 border border-[#F2F0EA] bg-[#222222] p-6 shadow-[10px_10px_0_#E63B20] transition-transform duration-300 hover:-translate-x-1 hover:-translate-y-1 sm:p-8"
          >
            <!-- Card Header -->
            <div
              class="flex items-center justify-between border-b border-[#343434] pb-4"
            >
              <span
                class="font-mono text-xs font-bold uppercase tracking-[0.12em] text-[#E63B20]"
              >
                {{ education.duration }}
              </span>

              <span
                class="font-mono text-[10px] uppercase tracking-[0.1em] text-[#858585]"
              >
                EDU / 01
              </span>
            </div>

            <!-- Degree -->
            <h3
              class="mt-6 text-2xl font-black uppercase leading-tight tracking-[-0.03em] sm:text-3xl"
            >
              {{ education.degree }}
            </h3>

            <!-- School -->
            <p
              class="mt-3 font-mono text-xs uppercase tracking-[0.08em] text-[#858585]"
            >
              {{ education.school }}
            </p>

            <!-- Divider -->
            <div class="my-6 h-px bg-[#343434]" />

            <!-- Achievements -->
            <div>
              <p class="mono-label text-[#858585]">Achievements</p>

              <div class="mt-4 flex flex-wrap gap-2">
                <span
                  v-for="item in education.achievements"
                  :key="item"
                  class="border border-[#E63B20] px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.05em] text-[#E63B20] transition-colors hover:bg-[#E63B20] hover:text-white"
                >
                  {{ item }}
                </span>
              </div>
            </div>

            <!-- Card Footer -->
            <div
              class="mt-8 flex items-center justify-between border-t border-[#343434] pt-4"
            >
              <span
                class="font-mono text-[9px] uppercase tracking-[0.12em] text-[#858585]"
              >
                VERIFIED
              </span>

              <span
                class="flex items-center gap-2 font-mono text-[9px] font-bold uppercase tracking-[0.12em]"
              >
                <span class="size-2 bg-[#E63B20]" />
                COMPLETE
              </span>
            </div>
          </div>
        </div>

        <!-- =================================================
             SKILLS
        ================================================== -->

        <div>
          <div
            class="flex items-end justify-between border-b border-[#343434] pb-4"
          >
            <div>
              <p class="mono-label text-[#E63B20]">02 / Tools & Skills</p>

              <h2
                class="mt-3 text-3xl font-black uppercase tracking-[-0.04em] sm:text-4xl"
              >
                Working
                <span class="text-[#E63B20]"> toolkit. </span>
              </h2>
            </div>

            <span
              class="hidden font-mono text-[10px] uppercase tracking-[0.1em] text-[#858585] sm:block"
            >
              {{ skillGroups.length }} MODULES
            </span>
          </div>

          <!-- Skill Matrix -->
          <div
            class="mt-6 grid border-l border-t border-[#343434] sm:grid-cols-2"
          >
            <div
              v-for="(group, index) in skillGroups"
              :key="group.name"
              class="group relative border-b border-r border-[#343434] bg-[#181818] p-6 transition-all duration-200 hover:bg-[#222222]"
            >
              <!-- Module Number -->
              <div class="flex items-center justify-between">
                <span class="font-mono text-[10px] font-bold text-[#858585]">
                  {{ String(index + 1).padStart(2, "0") }}
                </span>

                <span
                  class="size-2 bg-[#343434] transition-colors group-hover:bg-[#E63B20]"
                />
              </div>

              <!-- Skill Group -->
              <h3 class="mt-8 text-xl font-black uppercase tracking-[-0.02em]">
                {{ group.name }}
              </h3>

              <!-- Skills -->
              <div class="mt-5 flex flex-wrap gap-2">
                <span
                  v-for="item in group.items"
                  :key="item"
                  class="border border-[#343434] bg-[#222222] px-2.5 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.04em] text-[#F2F0EA] transition-all duration-150 hover:border-[#E63B20] hover:bg-[#E63B20] hover:text-white"
                >
                  {{ item }}
                </span>
              </div>

              <!-- Module Line -->
              <div class="mt-6 h-px w-full bg-[#343434]" />

              <p
                class="mt-3 font-mono text-[9px] uppercase tracking-[0.1em] text-[#858585]"
              >
                MODULE / {{ String(index + 1).padStart(2, "0") }}
              </p>
            </div>
          </div>

          <!-- Explanation -->
          <div class="mt-6 border-l-2 border-[#E63B20] pl-4">
            <p class="font-mono text-xs leading-6 text-[#858585]">
              Skills are presented as working tools rather than percentage
              ratings. The toolkit evolves alongside new projects, technologies,
              and stronger evidence of practice.
            </p>
          </div>
        </div>
      </div>

      <!-- BOTTOM SYSTEM STATUS -->
      <div
        class="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-[#343434] pt-5"
      >
        <p
          class="font-mono text-[10px] uppercase tracking-[0.12em] text-[#858585]"
        >
          EDUCATION + TECHNOLOGY + PRACTICE
        </p>

        <p class="font-mono text-[10px] font-bold uppercase tracking-[0.12em]">
          SYSTEM STATUS:
          <span class="text-[#E63B20]"> OPERATIONAL </span>
        </p>
      </div>
    </div>
  </section>
</template>
