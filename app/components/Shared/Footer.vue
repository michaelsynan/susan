<script setup lang="ts"></script>

<template>
  <footer class="bg-yellow-50 border-t-4 border-black py-4 px-6">
    <div class="flex flex-row justify-between items-center">
      <!-- Logo/Title -->
      <div class="text-lg md:text-xl font-black text-black uppercase transform -skew-y-3 display">
        PEER COACHING
      </div>

      <!-- Privacy Policy and TOS -->
      <!-- <div class="hidden md:flex gap-4 text-xs">
        <NuxtLink to="/privacy" class="text-white font-bold hover:text-white transition-colors">
          PRIVACY POLICY
        </NuxtLink>
        <NuxtLink to="/terms" class="text-white hover:text-white transition-colors font-bold ">
          TERMS OF SERVICE
        </NuxtLink>
      </div> -->

      <!-- Instagram Icon -->
      <div class="bg-emerald-400 border-4 border-black rounded-full p-4 w-16 h-16 flex items-center justify-center">
        <UIcon name="i-mdi-instagram" class="text-black text-3xl" />
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
