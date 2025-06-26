<script setup lang="ts"></script>

<template>
  <footer class="bg-yellow-50 border-t-4 border-black py-4 px-6">
    <div class="flex flex-row justify-between items-center">
      <!-- Logo/Title -->
      <div class="z-10 relative">
        <SharedLogo />
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
      <!-- Design Credit - Responsive Text -->
      <!-- Mobile Version -->
      <!-- <p class="!text-stone-400 text-xs font-mono md:hidden">
        Created by <nuxt-link to="https://formworkstudios.com/" target="_blank">Formwork Studios</nuxt-link>
      </p> -->

      <!-- Desktop Version -->
      <!-- <p class="!text-stone-400 text-xs md:text-sm font-mono hidden md:block">
        [ <nuxt-link to="https://formworkstudios.com/" target="_blank">Website Design</nuxt-link> by Formwork Studios ]
      </p> -->

      <!-- Instagram Icon -->
      <div class="bg-emerald-400 border-4 border-black rounded-full p-4 w-16 h-16 flex items-center justify-center">
        <UIcon name="i-mdi-instagram" class="text-black text-3xl" />
      </div>
    </div>


  </footer>
</template>

<style scoped></style>
