<script setup lang="ts">
const services = ref([
  {
    title: "SINGLE SESSIONS",
    description: "One-on-one coaching sessions focused on your personal growth and mental health journey.",
    icon: "i-mdi-account"
  },
  {
    title: "GROUP CHATS",
    description: "Connect with peers in a supportive group environment for shared healing and growth.",
    icon: "i-mdi-account-group"
  },
  {
    title: "PEER COACHING",
    description: "Long-term support and coaching to help you navigate life situations and challenges.",
    icon: "i-mdi-heart-pulse"
  }
])
</script>

<template>
  <div class="py-16 px-6 bg-yellow-50">
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-col gap-8">
        <div v-for="service in services" :key="service.title"
          class="bg-yellow-100 border-4 border-black p-8 shadow-[-12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row items-center gap-8">
          <!-- Icon -->
          <div class="flex-shrink-0">
            <UIcon :name="service.icon" class="text-6xl text-black" />
          </div>

          <!-- Content -->
          <div class="flex-1 text-center md:text-left">
            <h3 class="text-2xl md:text-3xl font-black text-black mb-2 uppercase">
              {{ service.title }}
            </h3>
            <p class="text-lg text-black leading-relaxed">
              {{ service.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
