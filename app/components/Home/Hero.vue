<script setup lang="ts"></script>

<template>
  <div
    class="relative flex flex-col-reverse md:flex-row-reverse items-center justify-center gap-4 overflow-hidden pb-20 border-b-4 pt-10 min-h-screen">


    <div class="w-full md:w-1/2 flex flex-col items-start justify-center relative z-10 p-10 md:p-0">
      <h1
        class="text-center md:text-left text-5xl sm:text-6xl md:text-8xl font-bold mb-4 text-black max-w-[18ch] leading-tight">
        PEER COACHING<br /> FOR COOL
        FOLKS</h1>
      <h2 class="text-center md:text-left text-xl md:text-2xl text-black mb-8 max-w-[55ch] leading-relaxed">
        Gender & Social Justice Doula, Facilitator, and Peer Coaching
      </h2>
      <NuxtLink to="/about"
        class="mx-auto md:mx-0 bg-emerald-400 border-4 border-black px-7 md:px-8 py-3 md:py-4 text-xl md:text-2xl font-bold text-black shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[-4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-4px] hover:translate-y-[4px] transition-all duration-150 cursor-pointer rounded-none">
        LEARN MORE
      </NuxtLink>
    </div>
    <div class="w-full md:w-1/2 flex justify-center relative z-10 ">
      <div
        class="rounded-full h-[300px] sm:h-[400px] md:h-[600px] w-[300px] sm:w-[400px] md:w-[600px] bg-emerald-400 hover:bg-yellow-400 hover:-rotate-4 ease-in-out transition-all duration-300 border-4 border-black md:[box-shadow:var(--md-shadow)] overflow-hidden"
        style="box-shadow: -5px 5px 0px 0px rgba(0,0,0,1), -10px 10px 0px 0px rgba(0,0,0,1); --md-shadow: -10px 10px 0px 0px rgba(0,0,0,1), -20px 20px 0px 0px rgba(0,0,0,1), -30px 30px 0px 0px rgba(0,0,0,1), -40px 40px 0px 0px rgba(0,0,0,1);">
        <nuxt-img src="/peer-coaching-square.webp" placeholder width="600" height="600"
          class="w-full h-full object-cover" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
