<script setup lang="ts"></script>

<template>
  <div class="py-16 px-6 bg-yellow-50">
    <div class="max-w-4xl mx-auto flex flex-col items-center text-center">
      <!-- Profile Image -->
      <nuxt-img src="/susan-removebg.png" placeholder
        class="rounded-full h-[200px] sm:h-[250px] md:h-[300px] bg-emerald-400 hover:bg-yellow-400 hover:-rotate-6 transition-all duration-300 border-4 mb-12 mt-8"
        style="box-shadow: -6px 6px 0px 0px rgba(0,0,0,1), -12px 12px 0px 0px rgba(0,0,0,1), -18px 18px 0px 0px rgba(0,0,0,1);" />

      <!-- Intro Text -->
      <h2 class="text-3xl md:text-5xl font-black text-black mb-6 uppercase display">
        Hi, I'm Susan.
      </h2>

      <p class="text-xl md:text-2xl text-black font-bold max-w-2xl leading-relaxed">
        I do peer coaching and other great stuff.
      </p>
    </div>
  </div>
</template>

<style scoped></style>
