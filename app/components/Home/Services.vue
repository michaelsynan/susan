<script setup lang="ts">
const services = ref([
  {
    title: "SINGLE SESSION",
    description: "One-on-one phone or video session focused on your growth and mental health.",
    bgColor: "bg-emerald-400",
    textColor: "text-emerald-400"
  },
  {
    title: "GROUP CHATS",
    description: "Connect with peers in a warm & supportive group environment via chat, video & call.",
    bgColor: "bg-yellow-300",
    textColor: "text-yellow-300"
  },
  {
    title: "PEER COACHING",
    description: "Long-term support and coaching from yours truly to help you navigate life situations.",
    bgColor: "bg-white",
    textColor: "text-white"
  }
])
</script>

<template>
  <div class="py-32 px-6">
    <h2 class="text-4xl md:text-6xl font-black text-black mb-16 text-center uppercase">
      SERVICES
    </h2>

    <div class="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
      <div v-for="service in services" :key="service.title"
        class="flex-1 border-4 border-black p-8 shadow-[-12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col"
        :class="service.bgColor">
        <h3 class="text-2xl md:text-3xl font-black text-black mb-4 uppercase">
          {{ service.title }}
        </h3>
        <p class="text-lg text-black mb-6 leading-relaxed flex-grow">
          {{ service.description }}
        </p>
        <button
          class="bg-black border-4 border-black px-6 py-3 font-bold text-lg shadow-[-6px_6px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[-3px_3px_0px_0px_rgba(0,0,0,0.3)] hover:translate-x-[-3px] hover:translate-y-[3px] transition-all duration-150 mt-auto"
          :class="service.textColor">
          LEARN MORE
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
