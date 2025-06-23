<script setup lang="ts"></script>

<template>
  <div class="py-16 px-6 bg-yellow-50 border-b-4 border-black h-screen flex items-center justify-center -mt-20">
    <div class="max-w-4xl mx-auto flex flex-col items-center text-center">
      <!-- Profile Image -->
      <nuxt-img src="/susan-removebg.png" placeholder
        class="rounded-full h-[200px] sm:h-[250px] md:h-[300px] bg-emerald-400 hover:bg-yellow-400 hover:-rotate-6 transition-all duration-300 border-4 border-black mb-12 mt-8 md:[box-shadow:var(--md-shadow)]"
        style="box-shadow: -3px 3px 0px 0px rgba(0,0,0,1), -6px 6px 0px 0px rgba(0,0,0,1); --md-shadow: -6px 6px 0px 0px rgba(0,0,0,1), -12px 12px 0px 0px rgba(0,0,0,1), -18px 18px 0px 0px rgba(0,0,0,1);" />

      <!-- Intro Text -->
      <h2 class="text-3xl md:text-5xl font-black text-black mb-6 uppercase display">
        Hi, I'm Shan Shan.
      </h2>

      <p class="text-xl md:text-2xl text-black max-w-2xl leading-relaxed mb-8">
        Hi, I’m Shan Shan (he/they)! I am a trans, neurodivergent, polyamorous Chinese-American gender doula, peer
        counselor, and facilitator who is deeply committed to decolonization and social justice work.
      </p>

      <!-- Button Group -->
      <div class="flex flex-col sm:flex-row gap-4">
        <a href="#about-me"
          class="bg-emerald-400 border-4 border-black px-6 py-3 text-lg font-bold text-black shadow-[-6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[-3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-3px] hover:translate-y-[3px] transition-all duration-150 uppercase inline-block scroll-smooth">
          MORE ABOUT ME
        </a>
        <a href="#about-work"
          class="bg-yellow-300 border-4 border-black px-6 py-3 text-lg font-bold text-black shadow-[-6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[-3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-3px] hover:translate-y-[3px] transition-all duration-150 uppercase inline-block">
          ABOUT MY WORK
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
