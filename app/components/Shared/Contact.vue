<script setup lang="ts">
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <nav
    class="flex flex-row justify-between items-center border-b-4 border-black py-4 px-6 bg-yellow-50 fixed w-full z-50">
    <!-- Logo/Title - Always visible with high z-index -->
    <NuxtLink to="/"
      class="text-2xl font-bold display text-black hover:text-emerald-600 transition-colors transform -skew-y-3 cool relative z-[60]">
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
    <button @click="toggleMenu"
      class="md:hidden text-lg font-bold text-black z-[60] relative border-4 border-black bg-white w-24 h-12 flex items-center justify-center">
      {{ isMenuOpen ? 'CLOSE' : 'MENU' }}
    </button>

    <!-- Mobile Menu Overlay -->
    <div v-if="isMenuOpen" class="fixed inset-0 bg-yellow-50 z-40 flex flex-col items-center justify-center md:hidden">
      <div class="flex flex-col gap-8 text-center mt-16">
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

  <div class="py-12 md:py-16 px-6 bg-yellow-50 mb-32">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-4xl md:text-6xl font-black text-black mb-8 uppercase display">
        LET'S CONNECT
      </h2>

      <p class="text-lg md:text-xl text-black mb-12 leading-relaxed max-w-2xl mx-auto">
        Ready to get started? I'd love to talk to you and hear your story. Feel free to reach out, whether you want
        coaching or just would like to connect.
      </p>

      <NuxtLink to="/get-in-touch"
        class="inline-block bg-emerald-400 border-4 border-black px-8 py-4 text-2xl font-bold text-black shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[-4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-4px] hover:translate-y-[4px] transition-all duration-150 uppercase">
        GET IN TOUCH
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped></style>
