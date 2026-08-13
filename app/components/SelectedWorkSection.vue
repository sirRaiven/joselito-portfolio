<script setup lang="ts">
const { projects } = usePortfolioData();

const featured = projects[0];
const secondary = projects.slice(1);
</script>

<template>
  <section
    id="work"
    class="work-section relative overflow-hidden border-b-2 border-[#181818] bg-[#181818] py-16 text-[#F2F0EA] sm:py-20 lg:py-28"
  >
    <!-- TECHNICAL BACKGROUND -->
    <div class="work-grid pointer-events-none absolute inset-0 opacity-10" />

    <div class="editorial-container relative z-10">
      <!-- =========================================
           SECTION HEADER
      ========================================== -->

      <header
        class="mb-12 grid gap-8 border-b-2 border-[#F2F0EA]/30 pb-8 lg:grid-cols-[1fr_0.5fr] lg:items-end"
      >
        <div>
          <div class="mb-5 flex flex-wrap items-center gap-3">
            <span
              class="mono-label border-2 border-[#E63B20] px-3 py-2 text-[#E63B20]"
            >
              SELECTED WORK
            </span>

            <span class="mono-label text-[#858585]">
              CASE STUDIES / 01—03
            </span>
          </div>

          <h2
            class="display-type text-[clamp(4rem,10vw,9rem)] uppercase leading-[0.78]"
          >
            Work that
            <br />
            <span class="text-[#E63B20]">connects</span>
            <br />
            ideas.
          </h2>
        </div>

        <div class="lg:border-l-2 lg:border-[#F2F0EA]/20 lg:pl-8">
          <p class="mono-label text-[#E63B20]">Design × Technology</p>

          <p
            class="mt-4 max-w-md text-sm leading-7 text-[#858585] sm:text-base"
          >
            Selected academic, product, and freelance work exploring visual
            communication, digital systems, interfaces, and practical
            problem-solving.
          </p>
        </div>
      </header>

      <!-- =========================================
           FEATURED PROJECT
      ========================================== -->

      <article
        v-if="featured"
        class="group relative border-2 border-[#181818] bg-[#F2F0EA] text-[#181818]"
      >
        <!-- PROJECT STATUS BAR -->

        <div
          class="flex flex-wrap items-center justify-between gap-3 border-b-2 border-[#181818] bg-[#E63B20] px-4 py-3 text-[#F2F0EA]"
        >
          <div class="flex items-center gap-3">
            <span class="size-3 border-2 border-[#F2F0EA] bg-[#181818]" />

            <span class="mono-label"> FEATURED CASE STUDY </span>
          </div>

          <span class="mono-label">
            {{ featured.year }} / {{ featured.category }}
          </span>
        </div>

        <div class="grid lg:grid-cols-[0.95fr_1.05fr]">
          <!-- =====================================
               VISUAL SYSTEM
          ====================================== -->

          <div
            class="relative min-h-[440px] overflow-hidden border-b-2 border-[#181818] bg-[#E63B20] p-6 sm:p-10 lg:border-b-0 lg:border-r-2"
          >
            <!-- TECHNICAL GRID -->

            <div
              class="absolute inset-0 opacity-20"
              style="
                background-image:
                  linear-gradient(
                    to right,
                    rgba(24, 24, 24, 0.35) 1px,
                    transparent 1px
                  ),
                  linear-gradient(
                    to bottom,
                    rgba(24, 24, 24, 0.35) 1px,
                    transparent 1px
                  );
                background-size: 32px 32px;
              "
            />

            <!-- LARGE PROJECT NUMBER -->

            <div
              class="absolute -right-5 -top-12 select-none text-[12rem] font-black leading-none text-[#181818]/15"
            >
              {{ featured.number }}
            </div>

            <!-- TECHNICAL LABEL -->

            <div class="relative z-10 flex items-start justify-between">
              <div
                class="border-2 border-[#181818] bg-[#F2F0EA] px-3 py-2 text-[#181818]"
              >
                <span class="mono-label"> SYSTEM / 01 </span>
              </div>

              <div
                class="border-2 border-[#181818] bg-[#181818] px-3 py-2 text-[#F2F0EA]"
              >
                <span class="mono-label"> LIVE </span>
              </div>
            </div>

            <!-- PRODUCT MOCKUP -->

            <div
              class="relative z-10 mx-auto mt-20 max-w-md border-2 border-[#181818] bg-[#F2F0EA] p-3 shadow-[14px_14px_0_#181818]"
            >
              <div
                class="border-2 border-[#181818] bg-[#E63B20] p-4 text-[#F2F0EA]"
              >
                <!-- HEADER -->

                <div
                  class="flex items-center justify-between border-b-2 border-[#181818] pb-3"
                >
                  <div>
                    <span class="mono-label"> AQUAARDENT </span>

                    <p class="mt-1 text-xs font-bold">IoT AQUACULTURE SYSTEM</p>
                  </div>

                  <UIcon name="i-lucide-waves" class="size-6" />
                </div>

                <!-- DASHBOARD -->

                <div class="mt-4 grid grid-cols-2 gap-3">
                  <div
                    class="border-2 border-[#181818] bg-[#F2F0EA] p-4 text-[#181818]"
                  >
                    <span class="mono-label !text-[9px]"> FEEDER </span>

                    <p class="mt-5 text-3xl font-black">AUTO</p>

                    <div class="mt-3 h-2 bg-[#181818]" />
                  </div>

                  <div
                    class="border-2 border-[#181818] bg-[#181818] p-4 text-[#F2F0EA]"
                  >
                    <span class="mono-label !text-[9px] text-[#E63B20]">
                      STATUS
                    </span>

                    <p class="mt-5 text-3xl font-black">LIVE</p>

                    <div class="mt-3 h-2 bg-[#E63B20]" />
                  </div>
                </div>
              </div>
            </div>

            <!-- TECHNICAL CORNER MARKERS -->

            <span
              class="absolute bottom-5 left-5 font-mono text-xs font-bold text-[#181818]"
            >
              X: 001 / Y: 002
            </span>

            <span
              class="absolute bottom-5 right-5 font-mono text-xs font-bold text-[#181818]"
            >
              ● SYSTEM READY
            </span>
          </div>

          <!-- =====================================
               PROJECT INFORMATION
          ====================================== -->

          <div
            class="flex flex-col justify-between bg-[#F2F0EA] p-7 text-[#181818] sm:p-10 lg:p-12"
          >
            <div>
              <div
                class="flex items-center justify-between border-b-2 border-[#181818] pb-4"
              >
                <span class="mono-label text-[#E63B20]">
                  {{ featured.category }}
                </span>

                <span class="font-mono text-xs font-bold">
                  #{{ featured.number }}
                </span>
              </div>

              <h3
                class="mt-7 text-[clamp(2.8rem,6vw,5rem)] font-black uppercase leading-[0.85] tracking-[-0.05em]"
              >
                {{ featured.title }}
              </h3>

              <p class="mt-4 text-lg font-black uppercase">
                {{ featured.subtitle }}
              </p>

              <p class="mt-6 max-w-2xl text-base leading-7 text-[#858585]">
                {{ featured.description }}
              </p>

              <!-- PROCESS / HIGHLIGHTS -->

              <div class="mt-8 grid border-2 border-[#181818] sm:grid-cols-2">
                <div
                  v-for="(highlight, index) in featured.highlights"
                  :key="highlight"
                  class="border-b-2 border-[#181818] p-4 last:border-b-0 sm:border-r-2 sm:last:border-r-0"
                >
                  <span class="font-mono text-xs font-black text-[#E63B20]">
                    0{{ index + 1 }}
                  </span>

                  <p class="mt-3 text-sm font-bold leading-6">
                    {{ highlight }}
                  </p>
                </div>
              </div>
            </div>

            <!-- PROJECT FOOTER -->

            <div class="mt-10 border-t-2 border-[#181818] pt-5">
              <div class="grid gap-5 sm:grid-cols-[0.7fr_1fr]">
                <div>
                  <span class="mono-label text-[#858585]"> ROLE </span>

                  <p class="mt-1 font-black uppercase">
                    {{ featured.role }}
                  </p>
                </div>

                <div>
                  <span class="mono-label text-[#858585]"> STACK / TOOLS </span>

                  <div class="mt-2 flex flex-wrap gap-2">
                    <span
                      v-for="tool in featured.tools"
                      :key="tool"
                      class="border-2 border-[#181818] bg-[#F2F0EA] px-2.5 py-1 text-xs font-bold uppercase transition-colors duration-200 group-hover:bg-[#E63B20] group-hover:text-[#F2F0EA]"
                    >
                      {{ tool }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <!-- =========================================
           SECONDARY PROJECTS
      ========================================== -->

      <div class="mt-8 grid gap-6 lg:grid-cols-2">
        <article
          v-for="project in secondary"
          :key="project.id"
          class="project-card group relative border-2 border-[#181818] bg-[#F2F0EA] text-[#181818]"
        >
          <!-- HEADER -->

          <div
            class="relative min-h-[280px] overflow-hidden border-b-2 border-[#181818] bg-[#F2F0EA] p-6"
          >
            <!-- GRID -->

            <div
              class="absolute inset-0 opacity-20"
              style="
                background-image:
                  linear-gradient(
                    to right,
                    rgba(24, 24, 24, 0.3) 1px,
                    transparent 1px
                  ),
                  linear-gradient(
                    to bottom,
                    rgba(24, 24, 24, 0.3) 1px,
                    transparent 1px
                  );
                background-size: 28px 28px;
              "
            />

            <div class="relative z-10 flex items-start justify-between">
              <span class="text-7xl font-black leading-none">
                {{ project.number }}
              </span>

              <span class="mono-label text-[#858585]">
                {{ project.year }}
              </span>
            </div>

            <!-- ABSTRACT TECHNICAL OBJECT -->

            <div class="absolute bottom-8 right-8">
              <div
                v-if="project.id === 2"
                class="w-48 border-2 border-[#181818] bg-[#181818] p-4 text-[#F2F0EA] shadow-[10px_10px_0_#E63B20] transition-transform duration-300 group-hover:-translate-x-2 group-hover:-translate-y-2"
              >
                <div class="flex items-center justify-between">
                  <span class="mono-label !text-[9px]"> UI / SYSTEM </span>

                  <UIcon name="i-lucide-box" class="size-4 text-[#E63B20]" />
                </div>

                <div class="mt-8 space-y-2">
                  <div class="h-2 bg-[#E63B20]" />
                  <div class="h-2 w-3/4 bg-[#F2F0EA]" />
                  <div class="h-2 w-1/2 bg-[#858585]" />
                </div>
              </div>

              <div
                v-else
                class="grid grid-cols-2 gap-2 transition-transform duration-300 group-hover:rotate-3"
              >
                <div class="size-16 bg-[#E63B20]" />
                <div class="size-16 bg-[#181818]" />
                <div class="size-16 border-2 border-[#181818] bg-[#F2F0EA]" />
                <div class="size-16 bg-[#858585]" />
              </div>
            </div>

            <span
              class="absolute bottom-5 left-6 font-mono text-[10px] font-bold text-[#858585]"
            >
              MODULE / {{ project.number }}
            </span>
          </div>

          <!-- CONTENT -->

          <div class="p-6 sm:p-8">
            <div class="flex items-center justify-between">
              <span class="mono-label text-[#E63B20]">
                {{ project.category }}
              </span>

              <UIcon
                name="i-lucide-arrow-up-right"
                class="size-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </div>

            <h3 class="mt-3 text-3xl font-black uppercase tracking-[-0.04em]">
              {{ project.title }}
            </h3>

            <p class="mt-4 leading-7 text-[#858585]">
              {{ project.description }}
            </p>

            <div
              class="mt-6 flex flex-wrap gap-2 border-t-2 border-[#181818] pt-4"
            >
              <span
                v-for="tool in project.tools"
                :key="tool"
                class="bg-[#181818] px-2.5 py-1 text-xs font-bold uppercase text-[#F2F0EA] transition-colors duration-200 group-hover:bg-[#E63B20]"
              >
                {{ tool }}
              </span>
            </div>
          </div>
        </article>
      </div>

      <!-- =========================================
           SYSTEM NOTE
      ========================================== -->

      <div
        class="mt-10 grid gap-4 border-2 border-dashed border-[#858585]/50 p-5 sm:grid-cols-[auto_1fr] sm:items-center"
      >
        <span
          class="mono-label w-fit border-2 border-[#E63B20] px-3 py-2 text-[#E63B20]"
        >
          SYSTEM NOTE
        </span>

        <p class="text-sm leading-6 text-[#858585]">
          Additional client-approved logos, social media graphics, posters,
          videos, and 3D work can be integrated into this modular case-study
          system without changing the visual language.
        </p>
      </div>
    </div>
  </section>
</template>
