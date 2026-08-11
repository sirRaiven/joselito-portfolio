<script setup lang="ts">
const { profile } = usePortfolioData();
</script>

<template>
  <section id="contact" class="relative overflow-hidden border-b-2 border-black bg-[#7D39EB] py-16 text-white sm:py-20 lg:py-28">
    <div class="absolute -right-16 -top-16 size-72 rounded-full border-[36px] border-[#C6FF33] opacity-90" />
    <div class="editorial-container relative z-10">
      <p class="mono-label text-[#C6FF33]">Contact / 07</p>
      <div class="mt-5 grid gap-8 lg:grid-cols-[1fr_0.48fr] lg:items-end">
        <div>
          <h2 class="display-type text-[clamp(4rem,10vw,9rem)] uppercase">Let's make<br><span class="text-[#C6FF33]">something</span><br>useful.</h2>
          <p class="mt-7 max-w-2xl text-lg leading-8 text-white/75">Open to conversations around graphic design, creative technology, instructional work, and practical digital projects.</p>
        </div>
        <div class="border-2 border-white bg-black p-6 sm:p-8">
          <p class="mono-label text-[#C6FF33]">Direct contact</p>
          <a :href="`mailto:${profile.email}`" class="mt-5 block break-all text-xl font-black underline decoration-[#7D39EB] decoration-4 underline-offset-4">{{ profile.email }}</a>
          <a :href="profile.linkedin" target="_blank" rel="noopener noreferrer" class="mt-4 flex items-center justify-between border-t border-white/30 pt-4 text-sm font-bold">LinkedIn <UIcon name="i-lucide-arrow-up-right" class="size-4" /></a>
          <UButton :to="`mailto:${profile.email}`" label="Send an email" trailing-icon="i-lucide-send" class="mt-6 w-full !rounded-none !border-2 !border-[#C6FF33] !bg-[#C6FF33] !font-black !text-black hover:!bg-white" />
        </div>
      </div>
    </div>
  </section>
</template>
