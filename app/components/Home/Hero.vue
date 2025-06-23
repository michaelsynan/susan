<script setup lang="ts"></script>

<template>
  <div
    class="relative flex flex-col-reverse md:flex-row-reverse items-center justify-center gap-4 overflow-hidden pb-20 border-b-4 pt-10 h-screen">
    <!-- Gradient blobs -->
    <!-- <div
      class="absolute top-10 left-20 w-80 h-80 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full opacity-30 blur-xl z-0">
    </div>
    <div
      class="absolute bottom-20 right-32 w-96 h-96 bg-gradient-to-bl from-emerald-300 to-emerald-600 rounded-full opacity-25 blur-2xl z-0">
    </div>
    <div
      class="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-gradient-to-tr from-emerald-200 to-emerald-400 rounded-full opacity-20 blur-xl z-0">
    </div> -->

    <div class="w-full md:w-1/2 flex flex-col items-start justify-center relative z-10 p-10 md:p-0">
      <h1
        class="text-center md:text-left text-5xl sm:text-6xl md:text-8xl font-bold mb-4 text-black max-w-[18ch] leading-tight">
        PEER COACHING FOR COOL
        FOLKS</h1>
      <h2 class="text-center md:text-left text-xl md:text-2xl text-black mb-8 max-w-[55ch] leading-relaxed">
        Gender & Social Justice Doula, Facilitator, and Peer Counseling
      </h2>
      <NuxtLink to="/about"
        class="mx-auto md:mx-0 bg-emerald-400 border-4 border-black px-7 md:px-8 py-3 md:py-4 text-xl md:text-2xl font-bold text-black shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[-4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-4px] hover:translate-y-[4px] transition-all duration-150 cursor-pointer rounded-none">
        LEARN MORE
      </NuxtLink>
    </div>
    <div class="w-full md:w-1/2 flex justify-center relative z-10 ">
      <nuxt-img src="/susan-removebg.png" placeholder
        class="rounded-full h-[300px] sm:h-[400px] md:h-[600px] bg-emerald-400 hover:bg-yellow-400 hover:-rotate-4 ease-in-out transition-all duration-300 border-4 border-black md:[box-shadow:var(--md-shadow)]"
        style="box-shadow: -5px 5px 0px 0px rgba(0,0,0,1), -10px 10px 0px 0px rgba(0,0,0,1); --md-shadow: -10px 10px 0px 0px rgba(0,0,0,1), -20px 20px 0px 0px rgba(0,0,0,1), -30px 30px 0px 0px rgba(0,0,0,1), -40px 40px 0px 0px rgba(0,0,0,1);" />
    </div>
  </div>
</template>

<style scoped></style>
