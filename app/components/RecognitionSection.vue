<script setup lang="ts">
const { recognition } = usePortfolioData();
</script>

<template>
  <section
    id="awards"
    class="relative overflow-hidden border-b-2 border-[#181818] bg-[#F2F0EA] py-16 text-[#181818] sm:py-20 lg:py-24"
  >
    <!-- =========================================
         TECHNICAL GRID
    ========================================== -->

    <div
      class="pointer-events-none absolute inset-0 opacity-30"
      style="
        background-image:
          linear-gradient(to right, rgb(24 24 24 / 0.06) 1px, transparent 1px),
          linear-gradient(to bottom, rgb(24 24 24 / 0.06) 1px, transparent 1px);
        background-size: 32px 32px;
      "
    />

    <!-- =========================================
         DECORATIVE CIRCLE
    ========================================== -->

    <div
      class="pointer-events-none absolute -right-32 -top-32 size-[28rem] rounded-full border-[3rem] border-[#E63B20] opacity-10"
    />

    <div class="editorial-container relative z-10">
      <!-- =========================================
           SECTION HEADER
      ========================================== -->

      <div
        class="flex items-center justify-between border-b-2 border-[#181818] pb-4"
      >
        <div class="flex items-center gap-3">
          <span class="size-2 bg-[#E63B20]" />

          <p class="mono-label text-[#181818]">Recognition / 05</p>
        </div>

        <p class="mono-label hidden text-[#858585] sm:block">
          ARCHIVE / ACHIEVEMENTS
        </p>
      </div>

      <!-- =========================================
           MAIN CONTENT
      ========================================== -->

      <div class="mt-10 grid gap-10 lg:grid-cols-[0.5fr_1fr] lg:gap-16">
        <!-- =====================================
             LEFT COLUMN
        ====================================== -->

        <div>
          <p class="mono-label text-[#858585]">
            01 / Recognition & Achievement Archive
          </p>

          <h2
            class="display-type mt-5 text-5xl uppercase leading-[0.8] sm:text-6xl lg:text-5xl"
          >
            Recognition
            <br />

            <span class="text-[#E63B20]">&milestones. </span>
          </h2>

          <div class="mt-8 max-w-sm border-l-2 border-[#E63B20] pl-4">
            <p class="font-mono text-xs leading-6 text-[#858585]">
              Selected achievements, research contributions, and competitive
              milestones reflecting creative practice, academic work, and
              technical development.
            </p>
          </div>

          <!-- =====================================
               ARCHIVE STATUS
          ====================================== -->

          <div
            class="mt-8 hidden border-2 border-[#181818] bg-[#181818] p-5 text-[#F2F0EA] lg:block"
          >
            <div class="flex items-center justify-between">
              <span class="mono-label text-[#E63B20]"> ARCHIVE STATUS </span>

              <span class="size-2 bg-[#E63B20]" />
            </div>

            <p class="mt-5 font-mono text-3xl font-black">
              {{ recognition.length + 2 }}
            </p>

            <p class="mono-label mt-1 text-[#858585]">
              DOCUMENTED ACHIEVEMENTS
            </p>
          </div>

          <!-- =====================================
               FEATURED MILESTONE
          ====================================== -->

          <div
            class="mt-8 border-2 border-[#181818] bg-[#E63B20] p-5 text-[#F2F0EA]"
          >
            <span class="mono-label text-[#181818]"> FEATURED MILESTONE </span>

            <p class="mt-4 text-xl font-black uppercase leading-tight">
              Top 12
            </p>

            <p class="mt-1 text-sm font-bold uppercase">
              BayaniJuan Info Design Competition
            </p>
          </div>
        </div>

        <!-- =====================================
             RIGHT COLUMN
        ====================================== -->

        <div>
          <!-- Archive Header -->

          <div
            class="grid grid-cols-[70px_80px_1fr] border-b-2 border-[#181818] pb-3 sm:grid-cols-[90px_100px_1fr]"
          >
            <span class="mono-label text-[#858585]"> ID </span>

            <span class="mono-label text-[#858585]"> YEAR </span>

            <span class="mono-label text-[#858585]"> RECOGNITION </span>
          </div>

          <!-- =====================================
               EXISTING RECOGNITION ITEMS
          ====================================== -->

          <article
            v-for="(item, index) in recognition"
            :key="item.title"
            class="group grid gap-4 border-b-2 border-[#181818] py-7 sm:grid-cols-[90px_100px_1fr] sm:items-start"
          >
            <!-- Number -->

            <div>
              <span
                class="inline-flex size-12 items-center justify-center border-2 border-[#181818] bg-[#F2F0EA] font-mono text-sm font-black text-[#181818] transition-all duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:bg-[#E63B20] group-hover:text-[#F2F0EA]"
              >
                {{ String(index + 1).padStart(2, "0") }}
              </span>
            </div>

            <!-- Year -->

            <div>
              <span
                class="mono-label inline-block border border-[#858585] px-2 py-1 text-[#858585]"
              >
                {{ item.year }}
              </span>
            </div>

            <!-- Content -->

            <div>
              <div class="flex items-start justify-between gap-4">
                <h3
                  class="text-2xl font-black uppercase leading-tight tracking-[-0.02em] text-[#181818] sm:text-3xl"
                >
                  {{ item.title }}
                </h3>

                <span
                  class="mt-1 hidden size-3 shrink-0 border-2 border-[#181818] transition-all duration-200 group-hover:border-[#E63B20] group-hover:bg-[#E63B20] sm:block"
                />
              </div>

              <p
                class="mt-3 max-w-2xl text-sm leading-7 text-[#858585] sm:text-base"
              >
                {{ item.description }}
              </p>

              <!-- Technical Identifier -->

              <div class="mt-5 flex items-center gap-2">
                <span class="h-px w-8 bg-[#E63B20]" />

                <span
                  class="font-mono text-[9px] font-bold uppercase tracking-[0.12em] text-[#858585]"
                >
                  MILESTONE /
                  {{ String(index + 1).padStart(2, "0") }}
                </span>
              </div>
            </div>
          </article>

          <!-- =====================================
               RESEARCH AUTHORSHIP
          ====================================== -->

          <article
            class="group grid gap-4 border-b-2 border-[#181818] py-7 sm:grid-cols-[90px_100px_1fr] sm:items-start"
          >
            <!-- Number -->

            <div>
              <span
                class="inline-flex size-12 items-center justify-center border-2 border-[#181818] bg-[#E63B20] font-mono text-sm font-black text-[#F2F0EA] transition-all duration-200 group-hover:-translate-y-1 group-hover:translate-x-1"
              >
                {{ String(recognition.length + 1).padStart(2, "0") }}
              </span>
            </div>

            <!-- Year -->

            <div>
              <span
                class="mono-label inline-block border border-[#858585] px-2 py-1 text-[#858585]"
              >
                2026
              </span>
            </div>

            <!-- Content -->

            <div>
              <div class="flex items-start justify-between gap-4">
                <h3
                  class="text-2xl font-black uppercase leading-tight tracking-[-0.02em] text-[#181818] sm:text-3xl"
                >
                  Research Author
                </h3>

                <span
                  class="mt-1 hidden size-3 shrink-0 border-2 border-[#181818] transition-all duration-200 group-hover:border-[#E63B20] group-hover:bg-[#E63B20] sm:block"
                />
              </div>

              <p
                class="mt-3 max-w-2xl text-sm leading-7 text-[#858585] sm:text-base"
              >
                Co-authored the research study
                <span class="font-bold text-[#181818]">
                  “A Star-Bus Hybrid Network Infrastructure Design and
                  Management Framework for St. Nicolas College of Business and
                  Technology.”
                </span>
              </p>

              <div class="mt-5 flex items-center gap-2">
                <span class="h-px w-8 bg-[#E63B20]" />

                <span
                  class="font-mono text-[9px] font-bold uppercase tracking-[0.12em] text-[#858585]"
                >
                  RESEARCH / 01
                </span>
              </div>
            </div>
          </article>

          <!-- =====================================
               BAYANIJUAN TOP 12
          ====================================== -->

          <article
            class="group grid gap-4 border-b-2 border-[#181818] py-7 sm:grid-cols-[90px_100px_1fr] sm:items-start"
          >
            <!-- Number -->

            <div>
              <span
                class="inline-flex size-12 items-center justify-center border-2 border-[#181818] bg-[#181818] font-mono text-sm font-black text-[#F2F0EA] transition-all duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:bg-[#E63B20]"
              >
                {{ String(recognition.length + 2).padStart(2, "0") }}
              </span>
            </div>

            <!-- Year -->

            <div>
              <span
                class="mono-label inline-block border border-[#858585] px-2 py-1 text-[#858585]"
              >
                2026
              </span>
            </div>

            <!-- Content -->

            <div>
              <div class="flex items-start justify-between gap-4">
                <h3
                  class="text-2xl font-black uppercase leading-tight tracking-[-0.02em] text-[#181818] sm:text-3xl"
                >
                  Top 12 — BayaniJuan Info Design Competition
                </h3>

                <span
                  class="mt-1 hidden size-3 shrink-0 border-2 border-[#181818] transition-all duration-200 group-hover:border-[#E63B20] group-hover:bg-[#E63B20] sm:block"
                />
              </div>

              <p
                class="mt-3 max-w-2xl text-sm leading-7 text-[#858585] sm:text-base"
              >
                Selected as one of the
                <span class="font-bold text-[#181818]"> Top 12 finalists </span>
                in the BayaniJuan Info Design Competition for an information
                design entry focused on disaster preparedness and community
                resilience.
              </p>

              <div class="mt-5 flex items-center gap-2">
                <span class="h-px w-8 bg-[#E63B20]" />

                <span
                  class="font-mono text-[9px] font-bold uppercase tracking-[0.12em] text-[#858585]"
                >
                  COMPETITION / TOP 12
                </span>
              </div>
            </div>
          </article>

          <!-- =====================================
               FOOTER
          ====================================== -->

          <div class="mt-6 flex flex-wrap items-center justify-between gap-3">
            <p
              class="font-mono text-[10px] uppercase tracking-[0.12em] text-[#858585]"
            >
              RECOGNITION DATABASE / 2026
            </p>

            <p
              class="font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-[#181818]"
            >
              STATUS:
              <span class="text-[#E63B20]"> VERIFIED </span>
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Technical Marker -->

    <div class="absolute bottom-0 left-0 h-1 w-full bg-[#E63B20]" />
  </section>
</template>
