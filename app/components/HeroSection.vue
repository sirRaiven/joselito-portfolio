<script setup lang="ts">
import portrait from "~/assets/images/joselito-portrait.png";

const { profile } = usePortfolioData();
</script>

<template>
  <section
    id="home"
    class="hero-system relative overflow-hidden border-b-2 border-black"
  >
    <!-- TECHNICAL GRID -->
    <div class="hero-grid absolute inset-0 pointer-events-none" />

    <!-- CROSSHAIRS -->
    <div class="hero-crosshair hero-crosshair-tl" />
    <div class="hero-crosshair hero-crosshair-tr" />
    <div class="hero-crosshair hero-crosshair-bl" />
    <div class="hero-crosshair hero-crosshair-br" />

    <!-- TOP SYSTEM BAR -->
    <div class="hero-system-bar relative z-20 border-b border-white/10">
      <div
        class="editorial-container flex min-h-12 items-center justify-between gap-4"
      >
        <div class="flex items-center gap-4">
          <span class="hero-status-dot" />

          <span class="hero-mono"> JDF / PORTFOLIO </span>
        </div>

        <div class="hidden items-center gap-6 sm:flex">
          <span class="hero-mono text-white/40">
            GRAPHIC DESIGN × TECHNOLOGY
          </span>

          <span class="hero-mono"> 2026 </span>
        </div>

        <span class="hero-mono sm:hidden"> 01 / 06 </span>
      </div>
    </div>

    <!-- MAIN HERO -->
    <div
      class="editorial-container relative z-10 min-h-[calc(100svh-3rem)] py-12 sm:py-16 lg:py-20"
    >
      <!-- SMALL TOP LABEL -->
      <div class="hero-intro-label">
        <span>CREATIVE EDUCATOR</span>
        <span class="hero-label-line" />
        <span>VISUAL SYSTEMS / 001</span>
      </div>

      <!-- =================================
           CENTER TYPOGRAPHY
      ================================== -->

      <div class="hero-title-area">
        <!-- Small technical label -->
        <div class="hero-title-kicker">
          <span>GRAPHIC</span>
          <span>DESIGN</span>
        </div>

        <!-- Main title -->
        <h1 class="hero-title">
          <span class="hero-title-outline"> Design </span>

          <span class="hero-title-solid"> Portfolio </span>
        </h1>

        <!-- Animated scanning line -->
        <div class="hero-scan-line" />
      </div>

      <!-- =================================
           CONTENT GRID
      ================================== -->

      <div class="mt-12 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <!-- PORTRAIT -->
        <div class="hero-portrait-wrap">
          <!-- Object number -->
          <div class="hero-object-label">
            <span>OBJECT</span>
            <strong>01</strong>
          </div>

          <!-- Portrait -->
          <div class="hero-portrait">
            <!-- image -->
            <div class="relative aspect-[4/5] overflow-hidden">
              <img
                :src="portrait"
                :alt="`${profile.name} portrait`"
                class="h-full w-full object-cover object-center"
              />

              <!-- technical overlay -->
              <div
                class="hero-image-grid pointer-events-none absolute inset-0"
              />

              <!-- corner brackets -->
              <div class="hero-corner hero-corner-tl" />
              <div class="hero-corner hero-corner-tr" />
              <div class="hero-corner hero-corner-bl" />
              <div class="hero-corner hero-corner-br" />

              <!-- image data -->
              <div
                class="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-black/90 px-4 py-3"
              >
                <span class="hero-mono"> PORTRAIT / PROFILE </span>

                <span class="hero-mono text-white/50"> 001 </span>
              </div>
            </div>
          </div>

          <!-- Floating object -->
          <div class="hero-floating-tag">
            <span>DESIGN</span>
            <span>+</span>
            <span>CODE</span>
          </div>
        </div>

        <!-- INFORMATION -->
        <div class="hero-information">
          <div class="hero-info-header">
            <span class="hero-mono"> ABOUT / SYSTEM </span>

            <span class="hero-mono text-white/40"> 02.01 </span>
          </div>

          <div class="hero-info-body">
            <h2>
              Joselito
              <span>Faylogna</span>
            </h2>

            <p class="hero-role">
              Graphic Designer
              <span>×</span>
              IT Instructor
            </p>

            <p class="hero-description">
              {{ profile.tagline }}
            </p>

            <div class="mt-6 flex flex-wrap gap-3">
              <UButton
                to="#work"
                label="Explore Work"
                trailing-icon="i-lucide-arrow-down-right"
                class="hero-button hero-button-primary"
              />

              <UButton
                :to="`mailto:${profile.email}`"
                label="Contact"
                trailing-icon="i-lucide-arrow-up-right"
                class="hero-button hero-button-secondary"
              />
            </div>
          </div>

          <!-- SYSTEM DATA -->
          <div class="hero-data-grid">
            <div>
              <span>DISCIPLINE</span>
              <strong>DESIGN</strong>
            </div>

            <div>
              <span>DOMAIN</span>
              <strong>TECHNOLOGY</strong>
            </div>

            <div>
              <span>ROLE</span>
              <strong>EDUCATOR</strong>
            </div>

            <div>
              <span>STATUS</span>
              <strong class="hero-active"> AVAILABLE </strong>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- =================================
         BOTTOM MARQUEE
    ================================== -->

    <div class="hero-marquee">
      <div class="hero-marquee-track">
        <span>VISUAL DESIGN</span>
        <b>✦</b>

        <span>UI / UX</span>
        <b>✦</b>

        <span>CREATIVE TECHNOLOGY</span>
        <b>✦</b>

        <span>IT EDUCATION</span>
        <b>✦</b>

        <span>SYSTEMS THINKING</span>
        <b>✦</b>

        <span>VISUAL DESIGN</span>
        <b>✦</b>

        <span>UI / UX</span>
        <b>✦</b>

        <span>CREATIVE TECHNOLOGY</span>
        <b>✦</b>
      </div>
    </div>
  </section>
</template>
