<script setup lang="ts">
const { experience, extracurricular } = usePortfolioData();
</script>

<template>
  <section
    id="experience"
    class="relative overflow-hidden border-b-2 border-[#181818] bg-[#181818] py-16 text-[#F2F0EA] sm:py-20 lg:py-24"
  >
    <!-- Technical Grid -->
    <div
      class="pointer-events-none absolute inset-0 opacity-20"
      style="
        background-image:
          linear-gradient(
            to right,
            rgb(242 240 234 / 0.06) 1px,
            transparent 1px
          ),
          linear-gradient(
            to bottom,
            rgb(242 240 234 / 0.06) 1px,
            transparent 1px
          );
        background-size: 32px 32px;
      "
    />

    <div class="editorial-container relative z-10">
      <!-- HEADER -->
      <div
        class="flex items-center justify-between border-b-2 border-[#858585] pb-4"
      >
        <div class="flex items-center gap-3">
          <span class="size-2 bg-[#E63B20]" />

          <p class="mono-label text-[#E63B20]">Experience / 04</p>
        </div>

        <p class="mono-label hidden text-[#858585] sm:block">
          SYSTEM / WORK HISTORY
        </p>
      </div>

      <div class="mt-10 grid gap-10 lg:grid-cols-[0.35fr_1fr] lg:gap-16">
        <!-- LEFT -->
        <div class="lg:sticky lg:top-28 lg:self-start">
          <p class="mono-label text-[#858585]">01 / Professional History</p>

          <h2
            class="mt-5 text-5xl font-black uppercase leading-[0.85] tracking-[-0.06em] sm:text-6xl lg:text-7xl"
          >
            Work
            <br />
            <span class="text-[#E63B20]">history.</span>
          </h2>

          <p class="mt-6 max-w-xs text-sm leading-6 text-[#858585]">
            Professional experience spanning IT instruction, technology
            education, and creative-technical practice.
          </p>

          <!-- Career Progression -->
          <div class="mt-8 hidden border-l-2 border-[#E63B20] pl-4 lg:block">
            <p class="mono-label text-[#858585]">Career progression</p>

            <p
              class="mt-2 font-mono text-xs font-bold uppercase leading-6 text-[#F2F0EA]"
            >
              TECHNOLOGY
              <br />
              ↓
              <br />
              EDUCATION
              <br />
              ↓
              <br />
              CREATIVE PRACTICE
            </p>
          </div>

          <!-- Current Status -->
          <div
            class="mt-8 hidden border-2 border-[#858585] bg-[#F2F0EA] p-5 text-[#181818] lg:block"
          >
            <div class="flex items-center justify-between">
              <span class="mono-label text-[#E63B20]"> CURRENT ROLE </span>

              <span class="size-2 bg-[#E63B20]" />
            </div>

            <p class="mt-5 text-2xl font-black uppercase leading-none">
              IT Instructor
            </p>

            <p class="mt-2 text-sm font-bold">
              St. Nicolas College of Business and Technology
            </p>

            <p class="mono-label mt-4 text-[#858585]">OCT 2025 — PRESENT</p>
          </div>
        </div>

        <!-- RIGHT -->
        <div>
          <!-- EXPERIENCE TIMELINE -->
          <div class="relative">
            <!-- Timeline -->
            <div
              class="absolute bottom-0 left-[20px] top-0 hidden w-px bg-[#858585] sm:block"
            />

            <!-- CURRENT ROLE -->
            <article
              class="group relative grid gap-5 border-t-2 border-[#858585] bg-[#F2F0EA] px-5 py-8 text-[#181818] sm:grid-cols-[80px_1fr] sm:gap-8 sm:px-7"
            >
              <!-- Number -->
              <div class="relative">
                <div
                  class="relative z-10 flex size-10 items-center justify-center border-2 border-[#181818] bg-[#E63B20] font-mono text-xs font-black text-[#F2F0EA]"
                >
                  01
                </div>
              </div>

              <!-- Content -->
              <div>
                <div
                  class="flex flex-col gap-4 md:flex-row md:items-start md:justify-between"
                >
                  <div>
                    <div class="mb-3 flex flex-wrap items-center gap-2">
                      <span
                        class="mono-label bg-[#E63B20] px-2 py-1 text-[#F2F0EA]"
                      >
                        CURRENT POSITION
                      </span>

                      <span
                        class="mono-label border border-[#858585] px-2 py-1 text-[#858585]"
                      >
                        OCT 2025 — PRESENT
                      </span>
                    </div>

                    <h3
                      class="text-2xl font-black uppercase tracking-[-0.03em] sm:text-3xl"
                    >
                      IT Instructor
                    </h3>

                    <p class="mt-1 font-bold uppercase text-[#E63B20]">
                      St. Nicolas College of Business and Technology
                    </p>
                  </div>

                  <span
                    class="mono-label flex w-fit items-center gap-2 border-2 border-[#181818] bg-[#181818] px-3 py-2 text-[#F2F0EA]"
                  >
                    <span class="size-2 bg-[#E63B20]" />
                    ACTIVE
                  </span>
                </div>

                <p class="mt-5 max-w-3xl text-base leading-7 text-[#181818]/75">
                  Currently serving as an IT Instructor, delivering
                  technology-focused instruction while helping students develop
                  practical skills in computing, software, information
                  technology, and digital problem-solving.
                </p>

                <div class="mt-6 grid gap-x-8 gap-y-3 md:grid-cols-2">
                  <div class="flex gap-3 text-sm leading-6">
                    <span class="mt-[7px] size-2 shrink-0 bg-[#E63B20]" />
                    <span>
                      Deliver IT lectures, laboratory activities, and
                      technology-focused learning experiences.
                    </span>
                  </div>

                  <div class="flex gap-3 text-sm leading-6">
                    <span class="mt-[7px] size-2 shrink-0 bg-[#E63B20]" />
                    <span>
                      Develop instructional materials, presentations,
                      assessments, and practical laboratory activities.
                    </span>
                  </div>

                  <div class="flex gap-3 text-sm leading-6">
                    <span class="mt-[7px] size-2 shrink-0 bg-[#E63B20]" />
                    <span>
                      Guide students in software development, systems,
                      computing, and digital technologies.
                    </span>
                  </div>

                  <div class="flex gap-3 text-sm leading-6">
                    <span class="mt-[7px] size-2 shrink-0 bg-[#E63B20]" />
                    <span>
                      Combine technical knowledge with clear and practical
                      instruction.
                    </span>
                  </div>
                </div>

                <div
                  class="mt-6 flex items-center gap-3 border-t border-[#858585] pt-4"
                >
                  <span class="size-1.5 bg-[#E63B20]" />

                  <span
                    class="font-mono text-[9px] uppercase tracking-[0.12em] text-[#858585]"
                  >
                    EXPERIENCE MODULE / 01
                  </span>
                </div>
              </div>
            </article>

            <!-- ATP ROLE -->
            <article
              class="group relative grid gap-5 border-t-2 border-[#858585] py-8 sm:grid-cols-[80px_1fr] sm:gap-8"
            >
              <!-- Number -->
              <div class="relative">
                <div
                  class="relative z-10 flex size-10 items-center justify-center border-2 border-[#858585] bg-[#181818] font-mono text-xs font-black text-[#F2F0EA] transition-colors duration-200 group-hover:border-[#E63B20] group-hover:bg-[#E63B20]"
                >
                  02
                </div>
              </div>

              <!-- Content -->
              <div>
                <div
                  class="flex flex-col gap-3 md:flex-row md:items-start md:justify-between"
                >
                  <div>
                    <p class="mono-label mb-2 text-[#858585]">POSITION / 02</p>

                    <h3
                      class="text-xl font-black uppercase tracking-[-0.02em] sm:text-2xl"
                    >
                      Auxiliary Technology Program Instructor
                    </h3>

                    <p class="mt-1 font-bold uppercase text-[#E63B20]">
                      Part-time
                    </p>
                  </div>

                  <span
                    class="mono-label w-fit border border-[#858585] px-3 py-2 text-[#F2F0EA]"
                  >
                    JUL 2025 — OCT 2025
                  </span>
                </div>

                <p class="mt-5 max-w-3xl text-base leading-7 text-[#858585]">
                  Served as a part-time Auxiliary Technology Program Instructor,
                  supporting technology-related instruction and helping learners
                  develop foundational digital and technical competencies.
                </p>

                <div
                  class="mt-6 flex items-center gap-3 border-t border-[#858585] pt-4"
                >
                  <span class="size-1.5 bg-[#E63B20]" />

                  <span
                    class="font-mono text-[9px] uppercase tracking-[0.12em] text-[#858585]"
                  >
                    EXPERIENCE MODULE / 02
                  </span>
                </div>
              </div>
            </article>

            <!-- REMAINING DATA-DRIVEN EXPERIENCE -->
            <article
              v-for="(item, index) in experience.slice(2)"
              :key="item.id"
              class="group relative grid gap-5 border-t-2 border-[#858585] py-8 sm:grid-cols-[80px_1fr] sm:gap-8"
            >
              <div class="relative">
                <div
                  class="relative z-10 flex size-10 items-center justify-center border-2 border-[#858585] bg-[#181818] font-mono text-xs font-black text-[#F2F0EA] transition-colors duration-200 group-hover:border-[#E63B20] group-hover:bg-[#E63B20]"
                >
                  {{ String(index + 3).padStart(2, "0") }}
                </div>
              </div>

              <div>
                <div
                  class="flex flex-col gap-3 md:flex-row md:items-start md:justify-between"
                >
                  <div>
                    <p class="mono-label mb-2 text-[#858585]">
                      POSITION / {{ String(index + 3).padStart(2, "0") }}
                    </p>

                    <h3
                      class="text-xl font-black uppercase tracking-[-0.02em] sm:text-2xl"
                    >
                      {{ item.title }}
                    </h3>

                    <p class="mt-1 font-bold uppercase text-[#E63B20]">
                      {{ item.company }}
                    </p>
                  </div>

                  <span
                    class="mono-label w-fit border border-[#858585] px-3 py-2 text-[#F2F0EA]"
                  >
                    {{ item.duration }}
                  </span>
                </div>

                <p class="mt-5 max-w-3xl text-base leading-7 text-[#858585]">
                  {{ item.description }}
                </p>

                <ul class="mt-6 grid gap-x-8 gap-y-3 md:grid-cols-2">
                  <li
                    v-for="highlight in item.highlights"
                    :key="highlight"
                    class="flex gap-3 text-sm leading-6 text-[#858585]"
                  >
                    <span
                      class="mt-[7px] size-2 shrink-0 border border-[#858585]"
                    />

                    <span>
                      {{ highlight }}
                    </span>
                  </li>
                </ul>

                <div
                  class="mt-6 flex items-center gap-3 border-t border-[#858585] pt-4"
                >
                  <span class="size-1.5 bg-[#E63B20]" />

                  <span
                    class="font-mono text-[9px] uppercase tracking-[0.12em] text-[#858585]"
                  >
                    EXPERIENCE MODULE /
                    {{ String(index + 3).padStart(2, "0") }}
                  </span>
                </div>
              </div>
            </article>
          </div>

          <!-- COMMUNITY / ENTREPRENEURSHIP -->
          <div
            class="relative mt-10 border-2 border-[#858585] bg-[#F2F0EA] p-6 text-[#181818] shadow-[10px_10px_0_#E63B20] sm:p-8"
          >
            <div
              class="flex items-center justify-between border-b border-[#858585] pb-4"
            >
              <div class="flex items-center gap-3">
                <span class="size-2 bg-[#E63B20]" />

                <p class="mono-label text-[#E63B20]">
                  Community & Entrepreneurship
                </p>
              </div>

              <span class="mono-label hidden text-[#858585] sm:block">
                EXT / 05
              </span>
            </div>

            <div class="mt-6 grid gap-8 md:grid-cols-2">
              <div
                v-for="(item, index) in extracurricular"
                :key="item.role"
                class="group border-t border-[#858585] pt-5"
              >
                <div class="flex items-start justify-between gap-4">
                  <div>
                    <p class="font-mono text-[10px] font-bold text-[#858585]">
                      0{{ index + 1 }}
                    </p>

                    <p
                      class="mt-2 text-xl font-black uppercase tracking-[-0.02em]"
                    >
                      {{ item.role }}
                    </p>
                  </div>

                  <span
                    class="size-2 shrink-0 bg-[#858585] transition-colors group-hover:bg-[#E63B20]"
                  />
                </div>

                <p class="mt-2 font-bold uppercase text-[#E63B20]">
                  {{ item.organization }}
                </p>

                <p class="mono-label mt-2 !text-[9px] text-[#858585]">
                  {{ item.duration }}
                </p>

                <p class="mt-4 text-sm leading-6 text-[#858585]">
                  {{ item.description }}
                </p>
              </div>
            </div>
          </div>

          <!-- STATUS -->
          <div
            class="mt-8 flex flex-wrap items-center justify-between gap-3 border-t-2 border-[#858585] pt-4"
          >
            <p
              class="font-mono text-[10px] uppercase tracking-[0.12em] text-[#858585]"
            >
              PROFESSIONAL EXPERIENCE / ARCHIVED
            </p>

            <p
              class="font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-[#F2F0EA]"
            >
              STATUS:
              <span class="text-[#E63B20]"> ACTIVE </span>
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Accent -->
    <div class="absolute bottom-0 left-0 h-1 w-full bg-[#E63B20]" />
  </section>
</template>
