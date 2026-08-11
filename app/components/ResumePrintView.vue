<script setup lang="ts">
const {
  profile,
  experience,
  recognition,
  extracurricular,
  education,
  skillGroups,
  projects,
} = usePortfolioData();

const coreSkillGroups = computed(() => skillGroups.slice(0, 3));
const additionalSkills = computed(() => skillGroups.find((group) => group.name === "Additional"));
</script>

<template>
  <section id="resume-print-source" class="resume-document resume-only" aria-label="Printable résumé">
    <!-- PAGE 1 -->
    <article class="resume-page resume-page-first">
      <header class="resume-header">
        <div class="resume-identity">
          <div class="resume-mark" aria-hidden="true">
            <span>JF</span>
            <i />
          </div>

          <div>
            <p class="resume-overline">Professional Résumé</p>
            <h1>{{ profile.name }}</h1>
            <p class="resume-role">Graphic Designer <span>×</span> IT Instructor</p>
          </div>
        </div>

        <div class="resume-contact">
          <div>
            <span class="resume-contact-label">Email</span>
            <span>{{ profile.email }}</span>
          </div>
          <div>
            <span class="resume-contact-label">Phone</span>
            <span>{{ profile.phone }}</span>
          </div>
          <div>
            <span class="resume-contact-label">LinkedIn</span>
            <span class="resume-link">linkedin.com/in/joselitofaylogna</span>
          </div>
        </div>
      </header>

      <div class="resume-layout resume-page-content">
        <aside class="resume-sidebar">
          <section class="resume-section">
            <h2>Professional Profile</h2>
            <p>
              {{ profile.intro }}
            </p>
          </section>

          <section class="resume-section">
            <h2>Core Skills</h2>
            <div v-for="group in coreSkillGroups" :key="group.name" class="skill-group">
              <h3>{{ group.name }}</h3>
              <p>{{ group.items.join(" • ") }}</p>
            </div>
          </section>

          <section class="resume-section">
            <h2>Education</h2>
            <article class="education-entry">
              <p class="entry-date">{{ education.duration }}</p>
              <h3>{{ education.degree }}</h3>
              <p class="entry-accent">{{ education.school }}</p>
              <ul class="entry-list compact-list">
                <li v-for="achievement in education.achievements" :key="achievement">
                  {{ achievement }}
                </li>
              </ul>
            </article>
          </section>

          <section class="resume-section">
            <h2>Professional Focus</h2>
            <div class="focus-list">
              <span>Visual Design</span>
              <span>UI & Digital Products</span>
              <span>IT Instruction</span>
              <span>Creative Technology</span>
            </div>
          </section>
        </aside>

        <main class="resume-main">
          <section class="resume-section">
            <h2>Professional Experience</h2>

            <article v-for="item in experience" :key="item.id" class="experience-entry">
              <div class="entry-heading">
                <div>
                  <h3>{{ item.title }}</h3>
                  <p class="entry-accent">{{ item.company }}</p>
                </div>
                <p class="entry-date">{{ item.duration }}</p>
              </div>

              <p class="entry-summary">{{ item.description }}</p>

              <ul class="entry-list">
                <li v-for="highlight in item.highlights" :key="highlight">
                  {{ highlight }}
                </li>
              </ul>
            </article>
          </section>

          <section class="resume-section recognition-section">
            <h2>Awards & Recognition</h2>
            <div class="recognition-grid">
              <article v-for="item in recognition" :key="item.title" class="recognition-card">
                <p class="recognition-year">{{ item.year }}</p>
                <h3>{{ item.title }}</h3>
                <p>{{ item.description }}</p>
              </article>
            </div>
          </section>
        </main>
      </div>

      <footer class="resume-footer">
        <span>{{ profile.shortName }}</span>
        <span>Graphic Designer • IT Instructor</span>
        <span>Page 1 of 2</span>
      </footer>
    </article>

    <!-- PAGE 2 -->
    <article class="resume-page resume-page-second">
      <header class="resume-secondary-header">
        <div class="resume-secondary-identity">
          <div class="resume-mark resume-mark-small" aria-hidden="true">
            <span>JF</span>
            <i />
          </div>
          <div>
            <p class="resume-overline">Selected Work & Activities</p>
            <h2>Design, Technology & Teaching</h2>
            <p>
              Selected projects and experiences that connect visual communication, digital products,
              technology education, and collaborative innovation.
            </p>
          </div>
        </div>

        <div class="resume-secondary-name">
          <strong>{{ profile.shortName }}</strong>
          <span>{{ profile.email }}</span>
        </div>
      </header>

      <div class="resume-page-content page-two-content">
        <section class="resume-section projects-section">
          <h2>Selected Projects</h2>

          <div class="project-grid">
            <article v-for="project in projects" :key="project.id" class="project-card" :class="`project-card-${project.accent}`">
              <div class="project-topline">
                <span class="project-number">{{ project.number }}</span>
                <span class="project-year">{{ project.year }}</span>
              </div>

              <h3>{{ project.title }}</h3>
              <p class="project-subtitle">{{ project.subtitle }}</p>
              <p class="project-role">{{ project.role }}</p>
              <p class="entry-summary">{{ project.description }}</p>

              <ul class="project-highlight-list">
                <li v-for="highlight in project.highlights.slice(0, 2)" :key="highlight">
                  {{ highlight }}
                </li>
              </ul>

              <p class="project-tools">{{ project.tools.join(" • ") }}</p>
            </article>
          </div>
        </section>

        <div class="resume-page-two-grid">
          <section class="resume-section">
            <h2>Community & Entrepreneurship</h2>
            <article v-for="item in extracurricular" :key="item.role" class="activity-entry">
              <div class="entry-heading">
                <div>
                  <h3>{{ item.role }}</h3>
                  <p class="entry-accent">{{ item.organization }}</p>
                </div>
                <p class="entry-date">{{ item.duration }}</p>
              </div>
              <p class="entry-summary">{{ item.description }}</p>
            </article>
          </section>

          <section class="resume-section">
            <h2>Additional Capabilities</h2>
            <div class="capability-panel">
              <p v-if="additionalSkills">
                {{ additionalSkills.items.join(" • ") }}
              </p>
            </div>

            <div class="approach-grid">
              <article>
                <span>01</span>
                <h3>Clear Communication</h3>
                <p>Uses design and instruction to make information easier to understand and apply.</p>
              </article>
              <article>
                <span>02</span>
                <h3>Practical Creativity</h3>
                <p>Balances visual ideas with usability, purpose, and real project requirements.</p>
              </article>
              <article>
                <span>03</span>
                <h3>Continuous Learning</h3>
                <p>Builds skills through design practice, technology projects, teaching, and collaboration.</p>
              </article>
            </div>
          </section>
        </div>

        <section class="resume-contact-strip">
          <div>
            <span>Available for</span>
            <strong>Graphic Design • Creative Technology • IT Instruction</strong>
          </div>
          <div class="resume-contact-strip-right">
            <span>{{ profile.email }}</span>
            <span>{{ profile.phone }}</span>
          </div>
        </section>
      </div>

      <footer class="resume-footer">
        <span>{{ profile.shortName }}</span>
        <span>Graphic Designer • IT Instructor</span>
        <span>Page 2 of 2</span>
      </footer>
    </article>
  </section>
</template>
