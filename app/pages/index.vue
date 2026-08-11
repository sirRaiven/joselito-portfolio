<script setup lang="ts">
const { profile } = usePortfolioData();

useSeoMeta({
  title: `${profile.name} | Graphic Designer & IT Instructor`,
  description:
    "Creative portfolio of Joselito D. Faylogna, a Graphic Designer and IT Instructor working across visual design, digital products, technology education, and creative projects.",
  ogTitle: `${profile.name} | Graphic Designer & IT Instructor`,
  ogDescription:
    "Selected design work, technology projects, professional experience, awards, skills, and education.",
  ogType: "website",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <div>
    <ResumePrintView />

    <div class="site-portfolio">
      <HeroSection />
      <SelectedWorkSection />
      <CreativeProfileSection />
      <ServicesSection />
      <ExperienceSection />
      <RecognitionSection />
      <EducationSkillsSection />
      <ContactSection />
    </div>
  </div>
</template>
