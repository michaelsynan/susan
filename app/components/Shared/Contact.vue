<script setup lang="ts">
const isMenuOpen = ref(false)
</script>

<template>
  <div class="py-16 md:py-32 px-6 bg-yellow-50 min-h-[400px] flex items-center justify-center">
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
