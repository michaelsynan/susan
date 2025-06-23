<script setup lang="ts">
// Handle hash navigation when the page loads
onMounted(() => {
  const hash = window.location.hash.substring(1) // Remove the #
  if (hash) {
    setTimeout(() => {
      const element = document.getElementById(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }
})
</script>

<template>
  <div>
    <AboutIntro />
    <AboutExtra />
    <AboutWork />

    <SharedContact />
  </div>
</template>

<style scoped></style>
