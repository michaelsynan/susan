<script setup lang="ts">
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <nav
    class="flex flex-row justify-between items-center border-b-4 border-black py-4 px-6 bg-yellow-50 fixed w-full z-100">
    <!-- Logo/Title -->
    <NuxtLink to="/"
      class="text-2xl font-bold display text-black hover:text-emerald-600 transition-colors transform -skew-y-3 cool">
      PEER COACHING
    </NuxtLink>

    <!-- Desktop Menu -->
    <div class="hidden md:flex flex-row gap-8 items-center">
      <NuxtLink to="/"
        class="text-lg font-semibold text-black hover:text-emerald-600 transition-colors cool border-b-4 border-transparent hover:border-black">
        HOME
      </NuxtLink>
      <NuxtLink to="/about"
        class="text-lg font-semibold text-black hover:text-emerald-600 transition-colors cool border-b-4 border-transparent hover:border-black">
        ABOUT
      </NuxtLink>
      <NuxtLink to="/services"
        class="text-lg font-semibold text-black hover:text-emerald-600 transition-colors cool border-b-4 border-transparent hover:border-black">
        SERVICES
      </NuxtLink>
      <NuxtLink to="/get-in-touch"
        class="bg-emerald-400 border-4 border-black px-6 py-2 text-lg font-bold text-black shadow-[-4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[-2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[2px] transition-all duration-150 cool">
        LET'S TALK!
      </NuxtLink>
    </div>

    <!-- Mobile Menu Button -->
    <button @click="toggleMenu" class="md:hidden text-2xl font-bold text-black z-50 relative">
      {{ isMenuOpen ? '✕' : '☰' }}
    </button>

    <!-- Mobile Menu Overlay -->
    <div v-if="isMenuOpen"
      class="fixed inset-0 bg-yellow-50 z-40 flex flex-col items-center justify-center md:hidden pt-20">
      <div class="flex flex-col gap-8 text-center">
        <NuxtLink @click="toggleMenu" to="/"
          class="text-3xl font-bold text-black hover:text-emerald-600 transition-colors cool">
          HOME
        </NuxtLink>
        <NuxtLink @click="toggleMenu" to="/about"
          class="text-3xl font-bold text-black hover:text-emerald-600 transition-colors cool">
          ABOUT
        </NuxtLink>
        <NuxtLink @click="toggleMenu" to="/services"
          class="text-3xl font-bold text-black hover:text-emerald-600 transition-colors cool">
          SERVICES
        </NuxtLink>
        <NuxtLink @click="toggleMenu" to="/get-in-touch"
          class="bg-emerald-400 border-4 border-black px-8 py-4 text-2xl font-bold text-black shadow-[-6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[-3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-3px] hover:translate-y-[3px] transition-all duration-150 cool">
          LET'S TALK
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
