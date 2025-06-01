<script setup lang="ts"></script>

<template>
  <div
    class="relative py-18 px-10 border-b-4 overflow-hidden bg-gradient-to-bl from-yellow-50 via-yellow-100/50 to-emerald-50">
    <!-- Top left circle -->
    <div class="absolute -top-64 -left-64 w-128 h-128 bg-emerald-400 border-4 border-black rounded-full"></div>

    <!-- Bottom right circle -->
    <div class="absolute -bottom-64 -right-64 w-128 h-128 bg-yellow-300 border-4 border-black rounded-full"></div>

    <p
      class="relative z-10 text-4xl md:text-6xl lg:text-8xl font-black text-black leading-tight uppercase tracking-tight max-w-6xl mx-auto display">
      LOREM IPSUM DOLOR SIT AMET CONSECTETUR
      <UIcon name="i-mdi-hands-pray" class="text-yellow-500 inline-block align-middle -mt-2 md:-mt-6" /> ADIPISCING ELIT
      SED DO
      EIUSMOD
      TEMPOR INCIDIDUNT UT
      LABORE ET DOLORE MAGNA
      ALIQUA UT ENIM AD MINIM VENIAM QUIS
      <UIcon name="i-mdi-balloon" class="text-yellow-500 inline-block align-middle -mt-2 md:-mt-6" /> NOSTRUD
      EXERCITATION
      ULLAMCO LABORIS
      NISI UT ALIQUIP EX EA COMMODO CONSEQUAT

      <UIcon name="i-mdi-star-shooting" class="text-yellow-500 inline-block align-middle -mt-2 md:-mt-6" /> DUIS AUTE
      IRURE DOLOR
      IN
      REPREHENDERIT
    </p>
  </div>
</template>

<style scoped></style>
