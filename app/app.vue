<template>
  <div class="bg-yellow-50 min-h-screen">
    <NuxtRouteAnnouncer />
    <SharedNav />
    <div>
      <NuxtPage class="pt-20" />
    </div>
    <SharedFooter />

    <!-- Cursor Star - Hidden on mobile -->
    <div ref="star" class="fixed pointer-events-none z-[100] text-4xl transition-none hidden md:block"
      style="transform: translate(-50%, -50%);">
      ⭐
    </div>
  </div>
</template>

<script setup>
const star = ref(null)
let mouseX = 0
let mouseY = 0
let starX = 0
let starY = 0
let rotation = 0

const updateStarPosition = () => {
  if (!star.value) return

  // Physics: star moves toward mouse with easing
  const dx = mouseX - starX
  const dy = mouseY - starY

  // Damping factor - controls how fast it catches up (lower = more lag)
  const damping = 0.07

  starX += dx * damping
  starY += dy * damping

  // Slow rotation around its center
  rotation += 0.3 // Much slower rotation

  star.value.style.left = starX + 'px'
  star.value.style.top = starY + 'px'
  star.value.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`

  requestAnimationFrame(updateStarPosition)
}

onMounted(() => {
  // Track mouse movement
  const handleMouseMove = (e) => {
    mouseX = e.clientX
    mouseY = e.clientY
  }

  // Initialize star position
  starX = window.innerWidth / 2
  starY = window.innerHeight / 2

  document.addEventListener('mousemove', handleMouseMove)
  updateStarPosition()

  onUnmounted(() => {
    document.removeEventListener('mousemove', handleMouseMove)
  })
})
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateX(10px);
}
</style>