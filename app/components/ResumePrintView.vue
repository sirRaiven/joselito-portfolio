<script setup lang="ts">
const { profile, experience, recognition, education, skillGroups, projects } = usePortfolioData();
</script>

<template>
  <section class="resume-only">
    <div class="resume-sheet">
      <header class="resume-header">
        <div>
          <p class="resume-name">{{ profile.name }}</p>
          <p class="resume-title">{{ profile.title }}</p>
        </div>
        <div class="resume-contact">
          <span>{{ profile.email }}</span>
          <span>{{ profile.phone }}</span>
          <span>{{ profile.linkedin }}</span>
        </div>
      </header>

      <div class="resume-columns">
        <aside class="resume-sidebar">
          <section class="resume-section">
            <h2>Profile</h2>
            <p>{{ profile.intro }}</p>
          </section>

          <section class="resume-section">
            <h2>Education</h2>
            <p><strong>{{ education.degree }}</strong></p>
            <p>{{ education.school }}</p>
            <p style="margin-top: 3pt">{{ education.duration }}</p>
            <ul class="resume-list">
              <li v-for="item in education.achievements" :key="item">{{ item }}</li>
            </ul>
          </section>

          <section class="resume-section">
            <h2>Skills</h2>
            <div v-for="group in skillGroups" :key="group.name" style="margin-bottom: 7pt">
              <p><strong>{{ group.name }}</strong></p>
              <div class="resume-tags" style="margin-top: 3pt">
                <span v-for="item in group.items" :key="item" class="resume-tag">{{ item }}</span>
              </div>
            </div>
          </section>

          <section class="resume-section">
            <h2>Awards</h2>
            <div v-for="item in recognition" :key="item.title" style="margin-bottom: 6pt">
              <p><strong>{{ item.title }}</strong> — {{ item.year }}</p>
            </div>
          </section>

          <div class="resume-accent-box">
            <strong>Professional focus</strong>
            <p style="margin-top: 3pt">Graphic Design • IT Instruction • UI Design • Creative Technology</p>
          </div>
        </aside>

        <div>
          <section class="resume-section">
            <h2>Professional Experience</h2>
            <article v-for="item in experience" :key="item.id" class="resume-entry">
              <div class="resume-entry-head">
                <div>
                  <h3>{{ item.title }}</h3>
                  <p class="resume-entry-company">{{ item.company }}</p>
                </div>
                <span class="resume-entry-date">{{ item.duration }}</span>
              </div>
              <p class="resume-entry-body">{{ item.description }}</p>
              <ul class="resume-list">
                <li v-for="highlight in item.highlights" :key="highlight">{{ highlight }}</li>
              </ul>
            </article>
          </section>

          <section class="resume-section">
            <h2>Selected Projects</h2>
            <article v-for="project in projects.slice(0, 2)" :key="project.id" class="resume-entry">
              <div class="resume-entry-head">
                <div>
                  <h3>{{ project.title }} — {{ project.subtitle }}</h3>
                  <p class="resume-entry-company">{{ project.category }}</p>
                </div>
                <span class="resume-entry-date">{{ project.year }}</span>
              </div>
              <p class="resume-entry-body">{{ project.description }}</p>
              <div class="resume-tags" style="margin-top: 5pt">
                <span v-for="tool in project.tools" :key="tool" class="resume-tag">{{ tool }}</span>
              </div>
            </article>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>
