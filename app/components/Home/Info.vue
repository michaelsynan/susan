<script setup lang="ts"></script>

<template>
  <div
    class="relative py-18 px-10 border-b-4 overflow-hidden bg-gradient-to-bl from-yellow-50 via-yellow-100/50 to-emerald-50">
    <!-- Top left circle -->
    <div
      class="absolute -top-32 -left-32 w-64 h-64 md:-top-64 md:-left-64 md:w-128 md:h-128 bg-emerald-400 border-4 border-black rounded-full">
    </div>

    <!-- Bottom right circle -->
    <div
      class="absolute -bottom-32 -right-32 w-64 h-64 md:-bottom-64 md:-right-64 md:w-128 md:h-128 bg-yellow-300 border-4 border-black rounded-full">
    </div>

    <div class="relative z-10 max-w-6xl mx-auto text-center">
      <p
        class="text-4xl md:text-6xl lg:text-8xl font-black text-black leading-tight uppercase tracking-tight display mb-8">
        I witness and support transformation in people's lives. As a peer counselor, I see myself as a mentor and
        friend, and a doula and guide through life's transitions and transformations.
        <UIcon name="i-mdi-heart-handshake" class="text-emerald-400 inline-block align-middle -mt-2 md:-mt-6" />
        Through conversations, workshops, and skill sharing, we will explore healing outside of conventional therapy and
        the medical-industrial complex.
      </p>

      <NuxtLink to="/about#about-work"
        class="inline-block bg-emerald-400 border-4 border-black px-8 py-4 text-xl font-bold text-black shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[-4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-4px] hover:translate-y-[4px] transition-all duration-150 uppercase">
        READ MORE ABOUT MY WORK
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped></style>
